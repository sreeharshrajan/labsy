"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, navRef);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass = `text-sm font-medium transition-colors hover:text-[#FF6E40] ${isScrolled ? "text-[#004D40]" : "text-white"
    }`;

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center hidden">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span
              className={`text-xl font-bold ${isScrolled ? "text-[#004D40]" : "text-white"
                }`}
            >
              MedLabby
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("hero")} className={linkClass}>
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className={linkClass}
            >
              Features
            </button>
            <button onClick={() => scrollToSection("cta")} className={linkClass}>
              Get Started
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className={`hidden sm:inline-flex ${isScrolled
                ? "text-[#004D40] hover:text-[#FF6E40]"
                : "text-white hover:text-[#80CBC4]"
                }`}
              onClick={() => window.open("/login", "_self")}
            >
              Sign In
            </Button>
            <Button
              className="bg-[#FF6E40] hover:bg-[#FF6E40]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open("/register", "_self")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
