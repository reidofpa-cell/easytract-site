const team = [
  {
    name: "Jordan Walker",
    role: "CEO & Founder",
    initials: "JW",
    bio: "Grammy-nominated audio engineer with major artist credits. Deep industry experience in music production and rights management.",
    credentials: ["Grammy-nominated Engineer", "Major Label Credits", "15+ Years in Music"],
  },
  {
    name: "Lairin K. Taylor",
    role: "Legal Advisor",
    initials: "LT",
    bio: "Entertainment lawyer and Managing Partner of LK Taylor & Associates. Expert in music law and creator rights protection.",
    credentials: ["Managing Partner", "Entertainment Law Specialist", "Creator Rights Expert"],
  },
  {
    name: "Chris Allen",
    role: "Legal Advisor",
    initials: "CA",
    bio: "Top 40 Under 40 Black Lawyer (2024). Specializes in creator protection and intellectual property law.",
    credentials: ["Top 40 Under 40 (2024)", "IP Law Specialist", "Creator Protection"],
  },
];

const values = [
  { icon: "🎯", title: "Creator First", description: "Every feature we build starts with one question: does this help creators get paid fairly?" },
  { icon: "🔐", title: "Transparency", description: "No hidden fees, no confusing terms. Clear, honest communication always." },
  { icon: "⚡", title: "Simplicity", description: "Music rights are complex enough. Our platform makes compliance simple." },
  { icon: "🤝", title: "Community", description: "We're building more than software—we're building a movement for fair music rights." },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="section bg-[#F8F9FA]">
        <div className="container-lg text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1E5A3A] mb-6">
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-[#495057] max-w-3xl mx-auto">
            We&apos;re on a mission to eliminate the $2.5 billion &ldquo;black box&rdquo; and ensure every creator gets paid for their work.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#2D8B5A]/5 to-[#4FBF6E]/10 rounded-3xl p-10 md:p-14 border border-[#E9ECEF]">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E5A3A] mb-8">The Problem We&apos;re Solving</h2>
              <div className="space-y-6 text-lg text-[#495057] leading-relaxed">
                <p>
                  Every year, billions of dollars in music royalties go unclaimed. Not because the money isn&apos;t there—but because the systems are broken. Missing metadata, unsigned split sheets, unregistered copyrights.
                </p>
                <p>
                  For independent artists creating 80% of the 120,000 songs released daily, there&apos;s no infrastructure. No team of lawyers. No rights management department. Just them and a confusing web of PROs, CMOs, distributors, and databases.
                </p>
                <p className="font-semibold text-[#1E5A3A] text-xl">
                  Easytract changes that. We built the compliance layer that should have existed all along.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-[#F8F9FA]">
        <div className="container-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C3E50] text-center mb-16">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.initials}</div>
                <h3 className="text-2xl font-bold text-[#1E5A3A] mb-1">{member.name}</h3>
                <div className="text-[#2D8B5A] font-semibold mb-4">{member.role}</div>
                <p className="text-[#495057] mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.credentials.map((cred, i) => (
                    <span key={i} className="bg-[#2D8B5A]/10 text-[#2D8B5A] text-sm font-medium px-3 py-1 rounded-full">
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C3E50] text-center mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#1E5A3A] mb-3">{value.title}</h3>
                <p className="text-[#495057]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section hero-gradient">
        <div className="container-lg relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">The Opportunity</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-6xl md:text-7xl font-black text-white mb-2">$28B</div>
              <div className="text-white/80 text-lg">Global recorded music market</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-black text-white mb-2">46.7%</div>
              <div className="text-white/80 text-lg">Independent market share</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-black text-white mb-2">2M+</div>
              <div className="text-white/80 text-lg">Independent artists worldwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white text-center">
        <div className="container-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C3E50] mb-6">
            Join Us in Fixing Music Rights
          </h2>
          <p className="text-xl text-[#495057] mb-10 max-w-2xl mx-auto">
            Whether you&apos;re an artist, producer, label, or just passionate about fair compensation—we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#waitlist" className="btn-primary text-lg px-10 py-4">
              Join the Waitlist
            </a>
            <a href="mailto:hello@easytract.com" className="border-2 border-[#2D8B5A] text-[#2D8B5A] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2D8B5A]/5 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
