import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export interface CursorConfig {
  size?: number;
  color?: string;
  mixBlendMode?: string;
  zIndex?: number;
}

export const useCursor = (config: CursorConfig = {}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const {
    size = 40,
    color = 'rgba(255, 110, 64, 0.5)',
    mixBlendMode = 'difference',
    zIndex = 9999
  } = config;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Create cursor elements
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');

    cursor.className = 'custom-cursor';
    cursorDot.className = 'custom-cursor-dot';

    // Cursor styles
    Object.assign(cursor.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      borderRadius: '50%',
      pointerEvents: 'none',
      mixBlendMode,
      zIndex: zIndex.toString(),
      transform: 'translate(-50%, -50%)',
      transition: 'transform 0.15s ease-out'
    });

    // Cursor dot styles
    Object.assign(cursorDot.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '4px',
      height: '4px',
      backgroundColor: '#FF6E40',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: (zIndex + 1).toString(),
      transform: 'translate(-50%, -50%)'
    });

    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    cursorRef.current = cursor;
    cursorDotRef.current = cursorDot;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update dot position immediately
      gsap.set(cursorDot, { x: mouseX, y: mouseY });
    };

    // Smooth cursor follow animation
    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      gsap.set(cursor, { x: cursorX, y: cursorY });
      requestAnimationFrame(updateCursor);
    };

    // Interactive elements handlers
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Start cursor animation
    updateCursor();

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });

      cursor.remove();
      cursorDot.remove();
      document.body.style.cursor = 'auto';
    };
  }, [size, color, mixBlendMode, zIndex]);

  return { cursorRef, cursorDotRef };
};

/**
 * Hook for cursor hover effects on specific elements
 */
export const useCursorHover = (
  elementRef: React.RefObject<HTMLElement | null>,
  hoverConfig: {
    scale?: number;
    color?: string;
    text?: string;
  } = {}
) => {
  const { scale = 2, color = 'rgba(255, 110, 64, 0.8)', text } = hoverConfig;

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const cursor = document.querySelector('.custom-cursor')!;
    const cursorText = text ? document.createElement('div') : null;

    if (cursorText && text) {
      cursorText.textContent = text;
      cursorText.className = 'cursor-text';
      Object.assign(cursorText.style, {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '12px',
        fontWeight: 'bold',
        color: 'white',
        pointerEvents: 'none',
        opacity: '0'
      });
    }

    const handleMouseEnter = () => {
      if (cursor) {
        gsap.to(cursor, {
          scale,
          backgroundColor: color,
          duration: 0.3,
          ease: 'power2.out'
        });

        if (cursorText) {
          cursor.appendChild(cursorText);
          gsap.to(cursorText, {
            opacity: 1,
            duration: 0.2
          });
        }
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: 'rgba(255, 110, 64, 0.5)',
          duration: 0.3,
          ease: 'power2.out'
        });

        if (cursorText) {
          gsap.to(cursorText, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
              if (cursorText.parentNode) {
                cursorText.parentNode.removeChild(cursorText);
              }
            }
          });
        }
      }
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [elementRef, scale, color, text]);
};
