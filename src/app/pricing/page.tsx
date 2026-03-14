const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Basic compliance tools for emerging artists",
    features: [
      "Split sheet templates",
      "Work-for-hire agreements",
      "PRO registration guidance",
      "Basic compliance checklist",
      "Email support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "Full workflow automation for established artists",
    features: [
      "Everything in Starter",
      "Unlimited projects",
      "Producer notifications",
      "Publishing coordination",
      "Sample detection",
      "MLC integration",
      "SoundExchange setup",
      "Priority support",
      "Lawyer referral network",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$499+",
    period: "/month",
    description: "White-label for labels & distributors",
    features: [
      "Everything in Professional",
      "White-label platform",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "Custom legal templates",
      "Bulk project management",
      "Analytics dashboard",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <div>
      {/* Hero */}
      <section className="section bg-[#F8F9FA]">
        <div className="container-lg text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1E5A3A] mb-6">
            Simple Pricing
          </h1>
          <p className="text-xl md:text-2xl text-[#495057] max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core compliance tools.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1E5A3A] text-white px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-[#1E5A3A]'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className={`text-5xl font-black ${plan.featured ? 'text-white' : 'text-[#2D8B5A]'}`}>
                      {plan.price}
                    </span>
                    <span className={plan.featured ? 'text-white/70' : 'text-[#495057]'}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={plan.featured ? 'text-white/80' : 'text-[#495057]'}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-10 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className={`w-6 h-6 flex-shrink-0 ${plan.featured ? 'text-white' : 'text-[#2D8B5A]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.featured ? 'text-white/90' : 'text-[#495057]'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 ${
                  plan.featured 
                    ? 'bg-white text-[#2D8B5A] hover:shadow-lg' 
                    : 'bg-gradient-to-r from-[#2D8B5A] to-[#4FBF6E] text-white hover:shadow-lg'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="section bg-[#F8F9FA]">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C3E50] mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-[#495057] mb-8">
              We work with labels, distributors, and music companies to build custom white-label solutions.
            </p>
            <a href="mailto:enterprise@easytract.com" className="btn-primary text-lg">
              Contact Our Enterprise Team
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark text-center">
        <div className="container-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Start Protecting Your Rights Today
          </h2>
          <a href="/#waitlist" className="btn-primary text-xl px-12 py-5 bg-white !text-[#2D8B5A]">
            Join the Waitlist
          </a>
        </div>
      </section>
    </div>
  );
}
