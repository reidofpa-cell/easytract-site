const team = [
  {
    name: "Jordan Walker",
    role: "CEO & Founder",
    initials: "JW",
    bio: "Grammy-nominated audio engineer with major artist credits. Deep industry experience in music production and rights management. Jordan has witnessed firsthand the chaos of missing credits and delayed releases, inspiring the creation of Easytract.",
    credentials: ["Grammy-nominated Engineer", "Major Label Credits", "15+ Years in Music"],
  },
  {
    name: "Lairin K. Taylor",
    role: "Legal Advisor",
    initials: "LT",
    bio: "Entertainment lawyer and Managing Partner of LK Taylor & Associates. Expert in music law and creator rights protection. Lairin brings decades of experience protecting artists and ensuring fair compensation.",
    credentials: ["Managing Partner, LK Taylor & Associates", "Entertainment Law Specialist", "Creator Rights Expert"],
  },
  {
    name: "Chris Allen",
    role: "Legal Advisor",
    initials: "CA",
    bio: "Top 40 Under 40 Black Lawyer (2024). Specializes in creator protection and intellectual property law. Chris is passionate about empowering independent artists with the legal tools they need to succeed.",
    credentials: ["Top 40 Under 40 Black Lawyer 2024", "IP Law Specialist", "Creator Protection Advocate"],
  },
];

const values = [
  {
    icon: "🎯",
    title: "Creator First",
    description: "Every feature we build starts with one question: does this help creators get paid fairly?",
  },
  {
    icon: "🔐",
    title: "Transparency",
    description: "No hidden fees, no confusing terms. We believe in clear, honest communication.",
  },
  {
    icon: "⚡",
    title: "Simplicity",
    description: "Music rights are complex enough. Our platform makes compliance simple.",
  },
  {
    icon: "🤝",
    title: "Community",
    description: "We're building more than software—we're building a movement for fair music rights.",
  },
];

export default function About() {
  return (
    <div className="py-20">
      {/* Hero */}
      <section className="text-center mb-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Our Mission
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We&apos;re on a mission to eliminate the $2.5 billion &ldquo;black box&rdquo; and ensure every creator gets paid for their work.
        </p>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="bg-easytract-primary/5 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem We&apos;re Solving</h2>
          <div className="space-y-4 text-lg text-gray-600">
            <p>
              Every year, billions of dollars in music royalties go unclaimed. Not because the money isn&apos;t there—but because the systems are broken. Missing metadata, unsigned split sheets, unregistered copyrights. The list goes on.
            </p>
            <p>
              For independent artists creating 80% of the 120,000 songs released daily, there&apos;s no infrastructure. No team of lawyers. No rights management department. Just them and a confusing web of PROs, CMOs, distributors, and databases.
            </p>
            <p>
              <strong className="text-gray-900">Easytract changes that.</strong> We built the compliance layer that should have existed all along—a guided workflow that ensures every song is properly registered, every split is documented, and every royalty finds its rightful owner.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Leadership Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-8 text-center hover:shadow-easytract transition-shadow duration-300"
            >
              <div className="w-24 h-24 bg-easytract-gradient rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-easytract">
                {member.initials}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <div className="text-easytract-primary font-semibold mb-4">{member.role}</div>
              <p className="text-gray-600 mb-6">{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.credentials.map((credential, credIndex) => (
                  <span 
                    key={credIndex}
                    className="bg-easytract-primary/10 text-easytract-primary text-sm px-3 py-1 rounded-full"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <div className="bg-easytract-gradient rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-8">The Opportunity</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-extrabold mb-2">$28B</div>
              <div className="text-white/80">Global recorded music market</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2">46.7%</div>
              <div className="text-white/80">Independent market share</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2">2M+</div>
              <div className="text-white/80">Independent artists worldwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Join Us in Fixing Music Rights
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you&apos;re an artist, producer, label, or just passionate about fair compensation—we want to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/#waitlist"
            className="inline-block bg-easytract-gradient text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-easytract-hover transition-all duration-300 hover:-translate-y-1"
          >
            Join the Waitlist
          </a>
          <a 
            href="mailto:hello@easytract.com"
            className="inline-block border-2 border-easytract-primary text-easytract-primary px-10 py-5 rounded-full font-bold text-xl hover:bg-easytract-primary/5 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
