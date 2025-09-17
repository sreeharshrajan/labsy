"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

export default function USPSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const uspsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50,
      });

      // Handle USPs animation with proper type checking
      if (uspsRef.current?.children) {
        const uspElements = Array.from(uspsRef.current.children);
        gsap.set(uspElements, {
          opacity: 0,
          y: 100,
          rotationX: 45,
        });

        // Animate USPs with 3D effect
        gsap.to(uspElements, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: uspsRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Create timeline for title and subtitle
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const usps = [
    {
      icon: "🚀",
      title: "AI-Powered Automation",
      description: "Leverage artificial intelligence to automate routine tasks, reduce human error, and accelerate laboratory workflows with intelligent sample processing and result analysis.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description: "Get instant insights with comprehensive dashboards, predictive analytics, and customizable reports that help you make data-driven decisions in real-time.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: "🔗",
      title: "Seamless Integration",
      description: "Connect with existing hospital systems, EHR platforms, and third-party devices through our robust API ecosystem for a unified laboratory experience.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
            Why Choose MedLaby
          </Badge>

          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Three Key Advantages
          </h2>

          <p
            ref={subtitleRef}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the powerful features that make MedLaby the preferred choice
            for modern laboratory management across the globe.
          </p>
        </div>

        <div ref={uspsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br hover:scale-105 transform-gpu"
              style={{
                background: `linear-gradient(135deg, ${usp.bgGradient.includes('blue') ? '#eff6ff' : usp.bgGradient.includes('purple') ? '#faf5ff' : '#f0fdf4'}, ${usp.bgGradient.includes('blue') ? '#dbeafe' : usp.bgGradient.includes('purple') ? '#f3e8ff' : '#dcfce7'})`
              }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${usp.gradient} flex items-center justify-center text-3xl shadow-lg`}>
                  {usp.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {usp.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {usp.description}
                </p>

                {/* Decorative elements */}
                <div className="mt-6 flex justify-center">
                  <div className={`w-12 h-1 bg-gradient-to-r ${usp.gradient} rounded-full`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Ready to Transform Your Laboratory?
            </h3>
            <p className="text-gray-600 mb-8">
              Join thousands of healthcare professionals who trust MedLaby
              to streamline their laboratory operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
