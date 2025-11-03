import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      onAnimationComplete={(definition: any) => {
        if (definition.opacity === 0) {
          const loader = document.getElementById("page-loader");
          if (loader) {
            loader.style.display = "none";
          }
        }
      }}
      id="page-loader"
    >
      <div className="relative">
        {/* Animated logo/loader */}
        <motion.div
          className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />

        {/* Pulsing center dot */}
        <motion.div
          className="absolute inset-0 m-auto w-3 h-3 bg-primary rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 m-auto w-20 h-20 bg-primary/20 rounded-full blur-xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Loading text */}
      <motion.p
        className="absolute bottom-1/3 text-muted-foreground text-sm tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Loading Portfolio...
      </motion.p>
    </motion.div>
  );
};

export default PageLoader;
