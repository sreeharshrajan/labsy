"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  useRevealAnimation,
  useScaleAnimation,
  useMagneticEffect,
  useTextReveal,
  useParallax
} from "@/hooks/animations";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const demoButtonRef = useRef<HTMLButtonElement>(null);
  const trialButtonRef = useRef<HTMLButtonElement>(null);

  // Apply advanced animations using custom hooks
  useRevealAnimation(badgeRef, {
    direction: 'down',
    distance: 30,
    delay: 0.2,
    duration: 0.8
  });

  useTextReveal(titleRef, {
    delay: 0.5,
    stagger: 0.02
  });

  useRevealAnimation(subtitleRef, {
    direction: 'up',
    distance: 40,
    delay: 0.8,
    duration: 0.8
  });

  useRevealAnimation(buttonRef, {
    direction: 'up',
    distance: 30,
    delay: 1.0,
    duration: 0.6
  });

  useScaleAnimation(visualRef, {
    scale: 0.9,
    delay: 0.6,
    duration: 1.2
  });

  useParallax(visualRef, 0.3);

  // Add magnetic effects to buttons
  useMagneticEffect(demoButtonRef, 0.2);
  useMagneticEffect(trialButtonRef, 0.2);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#015052] via-white to-[#E8EAF6]"
    >
      {/* Noise & Spotlight */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-radial from-white/40 via-transparent to-transparent"></div>

      {/* Animated Background */}
      <div ref={visualRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* keep your ai-nodes but reduce opacity for subtlety */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <Badge
          ref={badgeRef}
          variant="outline"
          className="mb-5 px-6 py-2 text-sm font-medium bg-white/70 backdrop-blur-md border-[#004D40]/20 text-[#004D40] shadow-md"
        >
          AI-Powered Laboratory Intelligence
        </Badge>

        <h1
          ref={titleRef}
          className="text-3xl md:text-6xl font-extrabold tracking-tight text-[#FF6E40] mb-6 leading-tight"
        >
          Empowering Your Lab
          <span className="block bg-gradient-to-r from-[#3F51B5] to-[#FF6E40] bg-clip-text text-transparent">
            With Smart LIMS
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-[#004D40]/80 mb-14 max-w-3xl mx-auto leading-relaxed"
        >
          Simplify test management, reporting, and compliance with MedLabby—
          <span className="font-semibold text-[#3F51B5]"> built for Indian labs </span>.
          No heavy setup, no high costs—just seamless lab operations, ready in minutes.
        </p>

        {/* CTA buttons */}
        <div
          ref={buttonRef}
          className="inline-flex gap-6"
        >
          <Button
            ref={demoButtonRef}
            size="lg"
            className="group relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-[#FF6E40] to-[#FF7043] text-white rounded-xl shadow-lg overflow-hidden transition-all"
          >
            Request a Demo
            <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition">
              →
            </span>
          </Button>

          <Button
            ref={trialButtonRef}
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-semibold border-2 border-[#004D40] text-[#004D40] rounded-xl hover:bg-[#004D40] hover:text-white transition-all"
          >
            Start Free Trial
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2">
          <svg width="24" height="48" className="animate-bounce">
            <rect width="20" height="40" x="2" y="2" rx="10" ry="10" stroke="#004D40" strokeWidth="2" fill="none" />
            <circle cx="12" cy="12" r="3" fill="#004D40" className="animate-pulse" />
          </svg>
        </div>
      </div>
    </section>

  );
}
