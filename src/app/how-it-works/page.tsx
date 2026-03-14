const steps = [
  {
    number: 1,
    title: "Song Creation & Ownership",
    description: "Lock down ownership and credits before anything else",
    items: [
      { name: "Split Sheets", type: "template", description: "Get all writers/producers to sign off on percentages" },
      { name: "Work-for-Hire Agreements", type: "template", description: "For session players, engineers, vocalists" },
      { name: "Producer / Feature Agreements", type: "template", description: "Lock in producer fees, publishing %, and royalties" },
      { name: "Collect Pub Lines (Credits)", type: "diy", description: "Confirm legal names, PROs, publishing info" },
      { name: "Copyright Registration", type: "diy", description: "File for ownership protection (composition & master)" },
    ],
  },
  {
    number: 2,
    title: "Publishing & Songwriting Rights",
    description: "Set up your royalty collection infrastructure",
    items: [
      { name: "Join a PRO", type: "diy", description: "ASCAP, BMI, SESAC - collect performance royalties" },
      { name: "Register with The MLC", type: "diy", description: "Collect digital mechanical royalties from streaming" },
      { name: "Publishing Administration", type: "optional", description: "Songtrust, Sentric, or a publisher for global collection" },
    ],
  },
  {
    number: 3,
    title: "Recording / Master Distribution",
    description: "Get your music to every platform",
    items: [
      { name: "Upload to Distributor", type: "diy", description: "DistroKid, TuneCore, UnitedMasters, AWAL, etc." },
      { name: "Register with SoundExchange", type: "diy", description: "Collect digital performance royalties" },
      { name: "Register with Local Rights Orgs", type: "diy", description: "PPL, SOCAN, etc. for international collection" },
    ],
  },
  {
    number: 4,
    title: "Additional Monetization",
    description: "Maximize your revenue streams",
    optional: true,
    items: [
      { name: "YouTube Content ID", type: "diy", description: "Monetize usage on YouTube" },
      { name: "Sync Licensing", type: "lawyer", description: "Enable film/TV/game placement" },
      { name: "Merch Store Setup", type: "diy", description: "Bandcamp, Shopify, Amazon" },
    ],
  },
  {
    number: 5,
    title: "Pre-Release Legal & Marketing",
    description: "Protect your brand and prepare for launch",
    optional: true,
    items: [
      { name: "Trademark Artist Name", type: "lawyer", description: "Protect your brand (one-time)" },
      { name: "LLC Formation", type: "optional", description: "Structure royalties, protect liability" },
      { name: "Set Release Date", type: "diy", description: "Allow 2-4 weeks for playlist pitching" },
      { name: "Editorial Playlist Submission", type: "diy", description: "Submit to Spotify/Apple" },
    ],
  },
];

const typeStyles = {
  template: "bg-easytract-primary/10 text-easytract-primary",
  diy: "bg-blue-100 text-blue-700",
  lawyer: "bg-amber-100 text-amber-700",
  optional: "bg-gray-100 text-gray-600",
};

const typeLabels = {
  template: "Easytract Template",
  diy: "DIY",
  lawyer: "Lawyer Recommended",
  optional: "Optional",
};

export default function HowItWorks() {
  return (
    <div className="py-20">
      {/* Hero */}
      <section className="text-center mb-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          How Easytract Works
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We guide you through every step of the music release process, ensuring you never miss a registration or leave money on the table.
        </p>
      </section>

      {/* Legend */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(typeLabels).map(([key, label]) => (
            <div 
              key={key}
              className={`px-4 py-2 rounded-full text-sm font-medium ${typeStyles[key as keyof typeof typeStyles]}`}
            >
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-5xl mx-auto px-4">
        {steps.map((step, index) => (
          <div key={step.number} className="mb-16">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-easytract-gradient rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                {step.number}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                  {step.optional && (
                    <span className="bg-gray-100 text-gray-500 text-sm px-3 py-1 rounded-full">
                      Optional
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-lg mt-1">{step.description}</p>
              </div>
            </div>

            <div className="ml-0 md:ml-22 space-y-4">
              {step.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-easytract transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${typeStyles[item.type as keyof typeof typeStyles]}`}>
                      {typeLabels[item.type as keyof typeof typeLabels]}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            {index < steps.length - 1 && (
              <div className="flex justify-center my-8">
                <div className="w-px h-12 bg-easytract-primary/30"></div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Release Day */}
      <section className="bg-easytract-gradient py-20 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Release Day & Beyond</h2>
          <p className="text-xl text-white/90 mb-8">
            Once you&apos;re live, Easytract becomes your central hub for tracking royalties across all platforms.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📊", title: "Monitor Dashboards", description: "Track streams and revenue in real-time" },
              { icon: "💰", title: "Track Royalties", description: "PRO, MLC, SoundExchange - all in one place" },
              { icon: "📝", title: "Manage Contracts", description: "As you grow, we grow with you" },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to release with confidence?
          </h2>
          <a 
            href="/#waitlist"
            className="inline-block bg-easytract-gradient text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-easytract-hover transition-all duration-300 hover:-translate-y-1"
          >
            Join the Waitlist
          </a>
        </div>
      </section>
    </div>
  );
}
