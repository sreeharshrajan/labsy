import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export interface PageTransitionConfig {
  duration?: number;
  ease?: string;
  direction?: 'horizontal' | 'vertical' | 'scale' | 'fade';
}

export const usePageTransition = (config: PageTransitionConfig = {}) => {
  const transitionRef = useRef<HTMLDivElement>(null);
  const {
    duration = 0.8,
    ease = 'power3.inOut',
    direction = 'horizontal'
  } = config;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Create transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';

    Object.assign(overlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: '#004D40',
      zIndex: '10000',
      pointerEvents: 'none'
    });

    document.body.appendChild(overlay);
    transitionRef.current = overlay;

    // Initial page load animation
    const getInitialTransform = () => {
      switch (direction) {
        case 'horizontal':
          return { x: '100%' };
        case 'vertical':
          return { y: '100%' };
        case 'scale':
          return { scale: 0, transformOrigin: 'center center' };
        case 'fade':
          return { opacity: 1 };
        default:
          return { x: '100%' };
      }
    };

    const getFinalTransform = () => {
      switch (direction) {
        case 'horizontal':
          return { x: '-100%' };
        case 'vertical':
          return { y: '-100%' };
        case 'scale':
          return { scale: 1.5, opacity: 0 };
        case 'fade':
          return { opacity: 0 };
        default:
          return { x: '-100%' };
      }
    };

    // Set initial state
    gsap.set(overlay, getInitialTransform());

    // Animate out on page load
    gsap.to(overlay, {
      ...getFinalTransform(),
      duration,
      ease,
      delay: 0.2
    });

    return () => {
      overlay.remove();
    };
  }, [duration, ease, direction]);

  const triggerTransition = (callback?: () => void) => {
    if (!transitionRef.current) return;

    const overlay = transitionRef.current;

    // Animate in
    gsap.fromTo(overlay,
      direction === 'horizontal' ? { x: '100%' } :
        direction === 'vertical' ? { y: '100%' } :
          direction === 'scale' ? { scale: 0 } : { opacity: 0 },
      {
        ...(direction === 'horizontal' ? { x: '0%' } :
          direction === 'vertical' ? { y: '0%' } :
            direction === 'scale' ? { scale: 1 } : { opacity: 1 }),
        duration: duration / 2,
        ease,
        onComplete: () => {
          if (callback) callback();

          // Animate out
          gsap.to(overlay, {
            ...(direction === 'horizontal' ? { x: '-100%' } :
              direction === 'vertical' ? { y: '-100%' } :
                direction === 'scale' ? { scale: 1.5, opacity: 0 } : { opacity: 0 }),
            duration: duration / 2,
            ease
          });
        }
      }
    );
  };

  return { triggerTransition };
};

/**
 * Hook for smooth scrolling with GSAP
 */
export const useSmoothScroll = (config: { duration?: number; ease?: string } = {}) => {
  const { duration = 1, ease = 'power3.inOut' } = config;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const smoothScrollTo = (target: string | HTMLElement, offset = 0) => {
      const element = typeof target === 'string' ? document.querySelector(target) : target;
      if (!element) return;

      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;

      gsap.to(window, {
        scrollTo: targetPosition,
        duration,
        ease
      });
    };

    // Override default scroll behavior for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');

      if (href && href.startsWith('#')) {
        e.preventDefault();
        smoothScrollTo(href, 80); // 80px offset for fixed header
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [duration, ease]);
};

/**
 * Hook for scroll-triggered animations with intersection observer
 */
export const useScrollAnimation = (
  elementRef: React.RefObject<HTMLElement | null>,
  animationConfig: {
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    threshold?: number;
    rootMargin?: string;
  } = {}
) => {
  const {
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
    threshold = 0.1,
    rootMargin = '0px 0px -10% 0px'
  } = animationConfig;

  useEffect(() => {
    if (!elementRef.current || typeof window === 'undefined') return;

    const element = elementRef.current;
    gsap.set(element, from);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, to);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, from, to, threshold, rootMargin]);
};
