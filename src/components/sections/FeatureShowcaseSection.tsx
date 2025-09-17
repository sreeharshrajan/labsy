"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  useRevealAnimation, 
  useScrollAnimation
} from "@/hooks/animations";

export default function FeatureShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Apply advanced animations
  useRevealAnimation(titleRef, {
    direction: 'up',
    distance: 60,
    duration: 0.8,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  useScrollAnimation(featuresRef, {
    from: { opacity: 0, y: 100, scale: 0.9 },
    to: {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2
    }
  });

  const features = [
    {
      title: "Hybrid Architecture",
      description: "Seamlessly operate offline with desktop Tauri app and sync automatically with cloud infrastructure when connected.",
      mockup: "🖥️",
      details: [
        "Offline-first desktop application",
        "Automatic background synchronization",
        "Conflict resolution algorithms",
        "Real-time data consistency"
      ],
      color: "from-[#3F51B5] to-[#80CBC4]"
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze patterns, predict outcomes, and provide actionable insights in real-time.",
      mockup: "🧠",
      details: [
        "Predictive modeling",
        "Pattern recognition",
        "Automated reporting",
        "Intelligent alerts"
      ],
      color: "from-[#80CBC4] to-[#FF6E40]"
    },
    {
      title: "Comprehensive LIMS",
      description: "Complete laboratory management including sample tracking, inventory management, quality control, and compliance reporting.",
      mockup: "📋",
      details: [
        "Sample lifecycle management",
        "Inventory tracking",
        "Quality assurance",
        "Regulatory compliance"
      ],
      color: "from-[#FF6E40] to-[#3F51B5]"
    },
    {
      title: "Real-Time Collaboration",
      description: "Enable seamless collaboration between researchers, clinicians, and administrators with shared workspaces and communication tools.",
      mockup: "👥",
      details: [
        "Shared workspaces",
        "Real-time notifications",
        "Role-based access control",
        "Audit trails"
      ],
      color: "from-[#004D40] to-[#80CBC4]"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 overflow-x-hidden">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-[#004D40]/20 text-[#004D40]">
            Core Features
          </Badge>

          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-[#004D40] mb-6"
          >
            Powerful LIMS Functionality
          </h2>

          <p className="text-xl text-[#004D40]/80 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive features that make MedLabby the most advanced
            hybrid laboratory information management system available.
          </p>
        </div>

        <div ref={featuresRef} className="space-y-16 overflow-x-hidden">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 overflow-x-hidden`}>
              {/* Feature Content */}
              <div className="flex-1">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                      {feature.mockup}
                    </div>

                    <h3 className="text-2xl font-bold text-[#004D40] mb-4">
                      {feature.title}
                    </h3>

                    <p className="text-lg text-[#004D40]/80 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`}></div>
                          <span className="text-[#004D40]/70 font-medium">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Feature Mockup */}
              <div className="flex-1 overflow-x-hidden">
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${feature.color} shadow-2xl overflow-x-hidden max-w-full`}>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="h-20 bg-gray-100 rounded"></div>
                        <div className="h-20 bg-gray-100 rounded"></div>
                      </div>
                      <div className="h-8 bg-[#FF6E40] rounded w-1/3 mt-4"></div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-[#3F51B5] text-sm">📊</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-[#FF6E40] text-xs">⚡</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
