const steps = [
  {
    number: "01",
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
    number: "02",
    title: "Publishing & Songwriting Rights",
    description: "Set up your royalty collection infrastructure",
    items: [
      { name: "Join a PRO", type: "diy", description: "ASCAP, BMI, SESAC - collect performance royalties" },
      { name: "Register with The MLC", type: "diy", description: "Collect digital mechanical royalties from streaming" },
      { name: "Publishing Administration", type: "optional", description: "Songtrust, Sentric, or a publisher for global collection" },
    ],
  },
  {
    number: "03",
    title: "Recording / Master Distribution",
    description: "Get your music to every platform",
    items: [
      { name: "Upload to Distributor", type: "diy", description: "DistroKid, TuneCore, UnitedMasters, AWAL, etc." },
      { name: "Register with SoundExchange", type: "diy", description: "Collect digital performance royalties" },
      { name: "Register with Local Rights Orgs", type: "diy", description: "PPL, SOCAN, etc. for international collection" },
    ],
  },
  {
    number: "04",
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
    number: "05",
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

const typeConfig = {
  template: { bg: "bg-[#2D8B5A]/10", text: "text-[#2D8B5A]", label: "Easytract Template" },
  diy: { bg: "bg-blue-50", text: "text-blue-600", label: "DIY" },
  lawyer: { bg: "bg-amber-50", text: "text-amber-600", label: "Lawyer Recommended" },
  optional: { bg: "bg-gray-100", text: "text-gray-500", label: "Optional" },
};

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="section bg-[#F8F9FA]">
        <div className="container-lg text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1E5A3A] mb-6">
            How It Works
          </h1>
          <p className="text-xl md:text-2xl text-[#495057] max-w-3xl mx-auto">
            We guide you through every step of the music release process, ensuring you never miss a registration or leave money on the table.
          </p>
        </div>
      </section>

      {/* Legend */}
      <section className="bg-white py-8 border-b border-[#E9ECEF] sticky top-20 z-40">
        <div className="container-lg">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(typeConfig).map(([key, config]) => (
              <div key={key} className={`${config.bg} ${config.text} px-5 py-2 rounded-full text-sm font-semibold`}>
                {config.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="mb-20">
                <div className="flex items-start gap-6 mb-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2D8B5A] to-[#4FBF6E] rounded-2xl flex items-center justify-center text-white text-2xl font-black flex-shrink-0 shadow-lg">
                    {step.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E5A3A]">{step.title}</h2>
                      {step.optional && (
                        <span className="bg-gray-100 text-gray-500 text-sm font-semibold px-4 py-1 rounded-full">
                          Optional
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-[#495057] mt-2">{step.description}</p>
                  </div>
                </div>

                <div className="space-y-4 pl-0 md:pl-26">
                  {step.items.map((item, itemIndex) => {
                    const config = typeConfig[item.type as keyof typeof typeConfig];
                    return (
                      <div key={itemIndex} className="timeline-item">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-[#1E5A3A]">{item.name}</h3>
                          <span className={`${config.bg} ${config.text} px-4 py-1 rounded-full text-sm font-semibold w-fit`}>
                            {config.label}
                          </span>
                        </div>
                        <p className="text-[#495057]">{item.description}</p>
                      </div>
                    );
                  })}
                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center my-12">
                    <div className="w-1 h-16 bg-gradient-to-b from-[#2D8B5A] to-[#4FBF6E]/30 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Release Day */}
      <section className="section hero-gradient">
        <div className="container-lg text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Release Day & Beyond</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Once you&apos;re live, Easytract becomes your central hub for tracking royalties across all platforms.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "📊", title: "Monitor Dashboards", description: "Track streams and revenue in real-time" },
              { icon: "💰", title: "Track Royalties", description: "PRO, MLC, SoundExchange - all in one place" },
              { icon: "📝", title: "Manage Contracts", description: "As you grow, we grow with you" },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white text-center">
        <div className="container-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C3E50] mb-6">
            Ready to release with confidence?
          </h2>
          <a href="/#waitlist" className="btn-primary text-xl px-12 py-5">
            Join the Waitlist
          </a>
        </div>
      </section>
    </div>
  );
}
