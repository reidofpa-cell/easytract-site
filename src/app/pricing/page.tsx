const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "Basic compliance tools for emerging artists and small projects",
    features: [
      "Split sheet templates",
      "Work-for-hire agreements",
      "PRO registration guidance",
      "Basic compliance checklist",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "per month",
    description: "Full workflow automation for established artists and producers",
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
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$499+",
    period: "per month",
    description: "White-label solutions for labels, distributors, and music companies",
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
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer: "Professional plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.",
  },
];

export default function Pricing() {
  return (
    <div className="py-20">
      {/* Hero */}
      <section className="text-center mb-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the plan that fits your needs. All plans include our core compliance tools.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.popular 
                  ? "bg-easytract-gradient text-white scale-105 shadow-easytract-hover" 
                  : "bg-white border-2 border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-easytract-dark text-white px-6 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <div className={`text-5xl font-extrabold mb-1 ${plan.popular ? "text-white" : "text-easytract-primary"}`}>
                  {plan.price}
                </div>
                <div className={plan.popular ? "text-white/80" : "text-gray-500"}>
                  {plan.period}
                </div>
              </div>

              <p className={`text-center mb-8 ${plan.popular ? "text-white/90" : "text-gray-600"}`}>
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg 
                      className={`w-6 h-6 flex-shrink-0 ${plan.popular ? "text-white" : "text-easytract-primary"}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.popular ? "text-white/90" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular 
                    ? "bg-white text-easytract-primary hover:shadow-lg" 
                    : "bg-easytract-gradient text-white hover:shadow-easytract"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="bg-gray-50 py-16 mb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We work with labels, distributors, and music companies to build custom white-label solutions.
          </p>
          <a 
            href="mailto:enterprise@easytract.com"
            className="inline-block bg-easytract-dark text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors"
          >
            Contact Our Enterprise Team
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Start Protecting Your Rights Today
        </h2>
        <a 
          href="/#waitlist"
          className="inline-block bg-easytract-gradient text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-easytract-hover transition-all duration-300 hover:-translate-y-1"
        >
          Join the Waitlist
        </a>
      </section>
    </div>
  );
}
