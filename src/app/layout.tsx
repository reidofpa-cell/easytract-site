import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Easytract - The Pre-Release Compliance Layer for Music",
  description: "Eliminate $2.5B in lost royalties. Automated workflow for credits, splits, publishing coordination, and distribution readiness.",
  keywords: "music rights, royalties, split sheets, publishing, music compliance, PRO registration, MLC, blockchain",
  openGraph: {
    title: "Easytract - The Pre-Release Compliance Layer for Music",
    description: "Streamline music credits, publishing & release coordination to eliminate delays and protect creator rights.",
    type: "website",
  },
};

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E9ECEF]">
      <div className="container-lg">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-black text-[#2D8B5A] tracking-tight">
            EASYTRACT
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href="/how-it-works" className="nav-link">
              How It Works
            </Link>
            <Link href="/pricing" className="nav-link">
              Pricing
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/#waitlist" className="btn-primary px-8 py-3 text-base">
              Join Waitlist
            </Link>
          </div>
          <button className="md:hidden text-[#495057]">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1E5A3A] text-white py-20">
      <div className="container-lg">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-4">EASYTRACT</h3>
            <p className="text-white/70 text-lg max-w-md leading-relaxed">
              The pre-release compliance layer for the music industry. Eliminating the $2.5B black box, one release at a time.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/how-it-works" className="text-white/70 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="text-white/70 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Easytract. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
