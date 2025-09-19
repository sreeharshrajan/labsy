"use client";

import { useCursor } from "@/hooks/animations";

export default function CustomCursor() {
  useCursor({
    size: 40,
    color: 'rgba(255, 110, 64, 0.3)',
    mixBlendMode: 'multiply',
    zIndex: 9999
  });

  return null; // This component doesn't render anything visible
}
