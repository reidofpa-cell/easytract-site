"use client";

import { useState } from "react";

const stats = [
  { number: "$2.5B+", label: "Unclaimed royalties globally" },
  { number: "80%+", label: "Indie artists manage credits manually" },
  { number: "60%", label: "Projects delayed by incomplete metadata" },
  { number: "15+", label: "Fragmented systems to navigate" },
];

const features = [
  {
    icon: "🎵",
    title: "Beat Placement Notifications",
    description: "Automatically notify producers, request stems, and identify co-producers when beats are used in new tracks.",
  },
  {
    icon: "📋",
    title: "Publishing Coordination",
    description: "Contact lawyers/managers, update PRO information, and store publishing lines with automated workflows.",
  },
  {
    icon: "🔍",
    title: "Sample Usage Detection",
    description: "Detect and document samples used in tracks to ensure proper clearance and attribution.",
  },
  {
    icon: "✅",
    title: "Distribution Readiness",
    description: "Verify all credits and splits are finalized before release to prevent delays and disputes.",
  },
];

const steps = [
  { num: "01", title: "Song Creation", desc: "Split sheets, work-for-hire, producer agreements" },
  { num: "02", title: "Publishing Rights", desc: "PRO registration, MLC, publishing admin" },
  { num: "03", title: "Distribution", desc: "Distributor upload, SoundExchange, international orgs" },
  { num: "04", title: "Monetization", desc: "Content ID, sync licensing, merch" },
  { num: "05", title: "Release", desc: "Trademark, LLC, playlist pitching" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative">
        <div className="container-lg text-center relative z-10 py-20">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tight">
              EASYTRACT
            </h1>
          </div>
          <div className="animate-fade-in-up delay-100">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/95 mb-6 max-w-4xl mx-auto leading-tight">
              The Pre-Release Compliance Layer<br />for the Music Industry
            </p>
          </div>
          <div className="animate-fade-in-up delay-200">
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Streamlining music credits, publishing & release coordination to eliminate delays and protect creator rights
            </p>
          </div>
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#waitlist" className="btn-primary text-lg px-10 py-4">
              Join the Waitlist
            </a>
            <a href="/how-it-works" className="btn-secondary text-lg px-10 py-4">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Problem Stats */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2C3E50] mb-6">
              The <span className="gradient-text">$2.5B</span> Problem
            </h2>
            <p className="text-xl text-[#495057] max-w-2xl mx-auto">
              Music releases are consistently delayed by missing credits, publishing conflicts, and fragmented systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="stat-box">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="section bg-[#F8F9FA]">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2C3E50] mb-6">
              Our Solution
            </h2>
            <p className="text-xl text-[#495057] max-w-3xl mx-auto">
              A comprehensive pre-release compliance layer that eliminates delays, disputes, and lost royalties
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2D8B5A] to-[#4FBF6E] rounded-2xl flex items-center justify-center text-3xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1E5A3A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#495057] text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2C3E50] mb-6">
              5-Step Process
            </h2>
            <p className="text-xl text-[#495057] max-w-2xl mx-auto">
              We guide you through every stage, from song creation to release day
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#2D8B5A] to-[#4FBF6E] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  {step.num}
                </div>
                <h4 className="font-bold text-[#1E5A3A] text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-[#495057]">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/how-it-works" className="inline-flex items-center gap-3 text-[#2D8B5A] font-semibold text-lg group">
              Learn more about our process
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="section hero-gradient">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Join the Movement
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Be first in line for early access and help us build the future of music rights management
            </p>
            
            {submitted ? (
              <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-10">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-3xl font-bold text-white mb-3">You&apos;re on the list!</h3>
                <p className="text-white/90 text-lg">We&apos;ll be in touch soon with exclusive updates.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-8 py-5 rounded-full text-[#2C3E50] text-lg border-0 shadow-lg focus:ring-4 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="bg-[#1E5A3A] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-black transition-colors shadow-lg whitespace-nowrap"
                >
                  Get Early Access
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2C3E50] mb-6">
              Market Opportunity
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-7xl md:text-8xl lg:text-9xl font-black gradient-text mb-4">
                $28B+
              </div>
              <p className="text-2xl text-[#495057]">Global recorded music market size annually</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-[#2D8B5A] mb-2">~15%</div>
                <p className="text-[#495057]">Independent segment CAGR</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-[#2D8B5A] mb-2">2M+</div>
                <p className="text-[#495057]">Independent artists</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-[#2D8B5A] mb-2">50K+</div>
                <p className="text-[#495057]">Labels & distributors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-dark">
        <div className="container-lg text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Because every song<br />deserves its royalty
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Stop leaving money on the table. Start protecting your rights from day one.
          </p>
          <a href="#waitlist" className="btn-primary text-xl px-12 py-5 bg-white !text-[#2D8B5A] hover:bg-white/90">
            Join the Waitlist
          </a>
        </div>
      </section>
    </div>
  );
}
