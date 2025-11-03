import { useReducedMotion } from "framer-motion";

/**
 * Custom hook to get animation configuration based on user's motion preferences
 * Respects prefers-reduced-motion for accessibility
 */
export const useAnimation = () => {
  const prefersReducedMotion = useReducedMotion();

  const getInitial = (animation: Record<string, any>) => {
    if (prefersReducedMotion) {
      return { opacity: 1 };
    }
    return animation;
  };

  const getAnimate = (condition: boolean, animation: Record<string, any>, fallback: Record<string, any>) => {
    if (prefersReducedMotion) {
      return condition ? { opacity: 1 } : { opacity: 0 };
    }
    return condition ? animation : fallback;
  };

  const getHover = (animation: Record<string, any>) => {
    if (prefersReducedMotion) {
      return {};
    }
    return animation;
  };

  return {
    prefersReducedMotion,
    getInitial,
    getAnimate,
    getHover,
  };
};
