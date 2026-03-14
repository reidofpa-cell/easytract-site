"use client";

import { useState } from "react";

const stats = [
  { number: "$2.5B+", label: "Unclaimed royalties globally" },
  { number: "80%+", label: "Indie artists manage credits manually" },
  { number: "60%", label: "Projects delayed by metadata issues" },
  { number: "120K", label: "New songs released daily" },
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

const testimonials = [
  {
    quote: "Every release used to be a nightmare of tracking down credits. Easytract changed everything.",
    author: "Independent Producer",
    role: "Atlanta, GA",
  },
  {
    quote: "Finally, a system that speaks our language and solves real problems we face daily.",
    author: "Label Manager",
    role: "Los Angeles, CA",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-easytract-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
            The Pre-Release Compliance Layer for Music
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Streamline credits, publishing & release coordination to eliminate delays and protect creator rights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <a 
              href="#waitlist"
              className="bg-white text-easytract-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Join the Waitlist
            </a>
            <a 
              href="/how-it-works"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Problem Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The <span className="text-easytract-primary">$2.5B</span> Problem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Music releases are consistently delayed by missing credits, publishing conflicts, and fragmented systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-easytract border border-gray-100 text-center hover:shadow-easytract-hover transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-easytract-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              One Platform, Complete Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to release music with confidence, from first beat to final stream
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-easytract transition-all duration-300 group"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-easytract-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple 5-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We guide you through every stage, from song creation to release day
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Song Creation", "Publishing Rights", "Distribution", "Monetization", "Release"].map((step, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-easytract-primary/10 px-6 py-3 rounded-full"
              >
                <span className="w-8 h-8 bg-easytract-gradient text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <span className="font-medium text-easytract-dark">{step}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-easytract-primary font-semibold text-lg hover:gap-4 transition-all"
            >
              Learn more about our process
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-easytract-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Be First in Line
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join the waitlist for early access and help us build the future of music rights management
          </p>
          
          {submitted ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the list!</h3>
              <p className="text-white/90">We&apos;ll be in touch soon with exclusive updates.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button
                type="submit"
                className="bg-easytract-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-colors whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="text-4xl text-easytract-primary mb-4">&ldquo;</div>
                <p className="text-xl text-gray-700 mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Because every song deserves its royalty
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Stop leaving money on the table. Start protecting your rights from day one.
          </p>
          <a 
            href="#waitlist"
            className="inline-block bg-easytract-gradient text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-easytract-hover transition-all duration-300 hover:-translate-y-1"
          >
            Join the Movement
          </a>
        </div>
      </section>
    </div>
  );
}
