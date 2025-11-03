# Imad Nesrate - Portfolio

> Elite-tier personal portfolio showcasing expertise in Big Data and Artificial Intelligence

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Accessibility](https://img.shields.io/badge/accessibility-AAA-success)]()
[![Performance](https://img.shields.io/badge/performance-optimized-blue)]()

## Project Overview

A modern, accessible, and performance-optimized portfolio built with cutting-edge web technologies. This portfolio demonstrates professional excellence in UI/UX design, accessibility standards, and frontend engineering best practices.

## Key Features

### Design Excellence
- **Modern Aesthetic**: Clean, professional design with gradient accents and glassmorphism effects
- **Micro-interactions**: Thoughtful hover states, transitions, and interactive elements
- **Typography**: Optimized font rendering with Inter and Fira Code typefaces
- **Color System**: Carefully crafted HSL-based design tokens for consistency

### Accessibility First (WCAG AA/AAA Compliant)
- **ARIA Labels**: Comprehensive semantic markup for screen readers
- **Keyboard Navigation**: Full keyboard accessibility with visible focus states
- **Reduced Motion**: Respects `prefers-reduced-motion` for users with vestibular disorders
- **Focus Management**: Custom focus-visible states throughout the application
- **Semantic HTML**: Proper heading hierarchy and landmark regions

### Performance Optimized
- **60fps Animations**: GPU-accelerated animations using Framer Motion
- **Lazy Loading**: Strategic component loading for faster initial paint
- **Code Splitting**: Optimized bundle size with Vite
- **Font Optimization**: Preconnected fonts with display: swap
- **Image Optimization**: Responsive images and lazy loading

### SEO Enhanced
- **JSON-LD Structured Data**: Schema.org Person markup for rich snippets
- **Open Graph Tags**: Optimized social media sharing
- **Twitter Cards**: Enhanced Twitter link previews
- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Semantic HTML5**: Proper document structure for search engines

### Technical Features
- **Smooth Scroll**: Native smooth scrolling with scroll-padding
- **Responsive Navigation**: Sticky header with mobile menu
- **Loading States**: Beautiful page loader with animations
- **Custom Scrollbar**: Styled scrollbar for webkit browsers
- **Custom 404 Page**: Branded error page with navigation
- **Animation Hook**: Reusable reduced-motion aware animation utilities

## Project Info

**URL**: https://lovable.dev/projects/2499a9c4-b8d2-4f3a-abf9-cf1f1b3e2be9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/2499a9c4-b8d2-4f3a-abf9-cf1f1b3e2be9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Technology Stack

### Core Technologies
- **[React 18](https://react.dev/)** - UI library with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool and dev server

### UI & Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality accessible components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled accessible UI primitives

### Animation & Interaction
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- **Custom Hooks** - Reusable animation utilities with reduced-motion support

### Icons & Assets
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icon set
- **[Google Fonts](https://fonts.google.com/)** - Inter & Fira Code typefaces

### Development Tools
- **PostCSS** - CSS transformations
- **ESLint** - Code quality and consistency
- **React Router DOM** - Client-side routing

## Component Architecture

```
src/
├── components/
│   ├── Hero.tsx              # Hero section with animated background
│   ├── About.tsx             # About section with highlights
│   ├── Skills.tsx            # Skills showcase with progress bars
│   ├── Experience.tsx        # Timeline of experience & education
│   ├── Contact.tsx           # Contact information & CTA
│   ├── Navigation.tsx        # Sticky responsive navigation
│   ├── PageLoader.tsx        # Initial loading animation
│   ├── NotFound.tsx          # Custom 404 page
│   └── ui/                   # shadcn/ui component library (60+ components)
├── hooks/
│   ├── use-mobile.tsx        # Mobile breakpoint detection
│   ├── use-toast.ts          # Toast notification system
│   └── use-animation.tsx     # Animation utilities with reduced-motion
├── pages/
│   ├── Index.tsx             # Main portfolio page
│   └── NotFound.tsx          # 404 error page
└── lib/
    └── utils.ts              # Utility functions
```

## Design System

### Color Palette (HSL)
- **Background**: `220 25% 8%` - Deep navy
- **Primary**: `195 100% 50%` - Vibrant cyan
- **Secondary**: `175 70% 45%` - Teal
- **Accent**: `280 70% 55%` - Purple
- **Foreground**: `210 40% 98%` - Off-white

### Typography
- **Headings**: Inter (700-800 weight) with -0.02em letter spacing
- **Body**: Inter (400-600 weight) with 1.7 line-height
- **Code**: Fira Code (400-600 weight)

### Spacing Scale
- Uses Tailwind's default spacing scale (0.25rem increments)
- Custom section padding: `py-24` (6rem)
- Container max-width: `max-w-6xl` (72rem)

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/2499a9c4-b8d2-4f3a-abf9-cf1f1b3e2be9) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
