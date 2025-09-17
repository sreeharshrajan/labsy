import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface GSAPAnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  scrollTrigger?: ScrollTrigger.Vars;
}

export interface RevealAnimationConfig extends GSAPAnimationConfig {
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export interface ScaleAnimationConfig extends GSAPAnimationConfig {
  scale?: number;
  transformOrigin?: string;
}

export interface RotateAnimationConfig extends GSAPAnimationConfig {
  rotation?: number;
  transformOrigin?: string;
}

/**
 * Custom hook for GSAP animations with TypeScript support
 */
export const useGSAP = (
  callback: (context: gsap.Context) => void,
  dependencies: React.DependencyList = []
) => {
  const contextRef = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    contextRef.current = gsap.context(() => {
      if (contextRef.current) {
        callback(contextRef.current);
      }
    });

    return () => {
      contextRef.current?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return contextRef.current;
};

/**
 * Hook for reveal animations (fade + slide)
 */
export const useRevealAnimation = (
  elementRef: React.RefObject<HTMLElement | null>,
  config: RevealAnimationConfig = {}
) => {
  const {
    direction = 'up',
    distance = 50,
    duration = 0.8,
    delay = 0,
    ease = 'power3.out',
    stagger = 0,
    scrollTrigger
  } = config;

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const getFinalTransform = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  useGSAP(() => {
    if (!elementRef.current) return;

    const elements = elementRef.current.children.length > 0
      ? Array.from(elementRef.current.children)
      : [elementRef.current];

    gsap.set(elements, getInitialTransform());

    gsap.to(elements, {
      ...getFinalTransform(),
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: scrollTrigger ? {
        trigger: elementRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        ...scrollTrigger
      } : undefined
    });
  }, [elementRef, direction, distance, duration, delay, ease, stagger, scrollTrigger]);
};

/**
 * Hook for scale animations
 */
export const useScaleAnimation = (
  elementRef: React.RefObject<HTMLElement | null>,
  config: ScaleAnimationConfig = {}
) => {
  const {
    scale = 0.8,
    duration = 0.8,
    delay = 0,
    ease = 'power3.out',
    transformOrigin = 'center center',
    scrollTrigger
  } = config;

  useGSAP(() => {
    if (!elementRef.current) return;

    gsap.set(elementRef.current, {
      scale,
      opacity: 0,
      transformOrigin
    });

    gsap.to(elementRef.current, {
      scale: 1,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: scrollTrigger ? {
        trigger: elementRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        ...scrollTrigger
      } : undefined
    });
  }, [elementRef, scale, duration, delay, ease, transformOrigin, scrollTrigger]);
};

/**
 * Hook for rotation animations
 */
export const useRotateAnimation = (
  elementRef: React.RefObject<HTMLElement | null>,
  config: RotateAnimationConfig = {}
) => {
  const {
    rotation = 360,
    duration = 1,
    delay = 0,
    ease = 'power2.inOut',
    transformOrigin = 'center center',
    scrollTrigger
  } = config;

  useGSAP(() => {
    if (!elementRef.current) return;

    gsap.set(elementRef.current, {
      rotation: 0,
      transformOrigin
    });

    gsap.to(elementRef.current, {
      rotation,
      duration,
      delay,
      ease,
      scrollTrigger: scrollTrigger ? {
        trigger: elementRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        ...scrollTrigger
      } : undefined
    });
  }, [elementRef, rotation, duration, delay, ease, transformOrigin, scrollTrigger]);
};

/**
 * Hook for magnetic button effect (Awwwards style)
 */
export const useMagneticEffect = (
  elementRef: React.RefObject<HTMLElement | null>,
  strength = 0.3
) => {
  useGSAP(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    let bounds: DOMRect;

    const handleMouseEnter = () => {
      bounds = element.getBoundingClientRect();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [elementRef, strength]);
};

/**
 * Hook for parallax scroll effect
 */
export const useParallax = (
  elementRef: React.RefObject<HTMLElement | null>,
  speed = 0.5
) => {
  useGSAP(() => {
    if (!elementRef.current) return;

    gsap.to(elementRef.current, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, [elementRef, speed]);
};

/**
 * Hook for text reveal animation (character by character)
 */
export const useTextReveal = (
  elementRef: React.RefObject<HTMLElement | null>,
  config: GSAPAnimationConfig = {}
) => {
  const {
    duration = 0.05,
    delay = 0,
    ease = 'power3.out',
    stagger = 0.03
  } = config;

  useGSAP(() => {
    if (!elementRef.current) return;

    const text = elementRef.current.textContent || '';
    elementRef.current.innerHTML = text
      .split('')
      .map(char => char === ' ' ? ' ' : `<span class="char">${char}</span>`)
      .join('');

    const chars = elementRef.current.querySelectorAll('.char');

    gsap.set(chars, { opacity: 0, y: 20 });

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
      stagger
    });
  }, [elementRef, duration, delay, ease, stagger]);
};
