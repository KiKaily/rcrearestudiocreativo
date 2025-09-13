// Image optimization utilities for performance

/**
 * Preload critical images for better performance
 */
export const preloadCriticalImages = () => {
  const criticalImages = [
    './logo.webp',
    './logo.png', // fallback
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

/**
 * Check if WebP is supported by the browser
 */
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Create intersection observer for lazy loading images
 */
export const createImageObserver = (callback: IntersectionObserverCallback) => {
  if (!('IntersectionObserver' in window)) {
    // Fallback for browsers without IntersectionObserver
    return null;
  }

  return new IntersectionObserver(callback, {
    rootMargin: '50px 0px',
    threshold: 0.01,
  });
};

/**
 * Generate responsive image sizes attribute
 */
export const generateSizes = (breakpoints: Record<string, string>): string => {
  return Object.entries(breakpoints)
    .map(([breakpoint, size]) => `${breakpoint} ${size}`)
    .join(', ');
};