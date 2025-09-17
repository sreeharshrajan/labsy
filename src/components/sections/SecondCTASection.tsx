"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function SecondCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Handle content animation with proper type checking
      if (contentRef.current?.children) {
        const contentElements = Array.from(contentRef.current.children);

        // Set initial states
        gsap.set(contentElements, {
          opacity: 0,
          y: 50,
        });

        // Animate content
        gsap.to(contentElements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Continuous floating animation for background elements
      if (sectionRef.current) {
        const floatingElements = sectionRef.current.querySelectorAll('.floating-element');
        if (floatingElements.length > 0) {
          gsap.to(floatingElements, {
            y: -20,
            duration: 4,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.5,
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-r from-[#004D40] to-[#3F51B5] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-1/4 left-1/4 w-32 h-32 bg-[#80CBC4]/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#FF6E40]/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div ref={contentRef} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Research?
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Join thousands of healthcare professionals who trust MedLabby to streamline
            their laboratory operations and accelerate breakthrough discoveries.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="px-12 py-5 text-lg font-semibold bg-[#FF6E40] hover:bg-[#FF6E40]/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                // Scroll to contact section or open demo request modal
                const contactSection = document.getElementById('cta');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Request a Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-12 py-5 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-[#004D40] transition-all duration-300"
              onClick={() => {
                // Navigate to registration or open trial signup
                window.open('/register', '_self');
              }}
            >
              Start Your Free Trial
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Healthcare Institutions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">1M+</div>
              <div className="text-white/80">Tests Processed Daily</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/80">Uptime Guarantee</div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-12 text-center">
            <p className="text-white/80 mb-4">
              <span className="font-semibold">Free 30-day trial</span> • No credit card required •
              <span className="font-semibold"> 24/7 support</span> •
              <span className="font-semibold"> HIPAA compliant</span>
            </p>
            <p className="text-sm text-white/60">
              Setup takes less than 5 minutes. Get started today and see the difference AI-powered LIMS can make.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
