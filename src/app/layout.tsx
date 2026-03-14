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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-extrabold text-easytract-primary tracking-tight">
            EASYTRACT
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/how-it-works" className="text-gray-600 hover:text-easytract-primary transition-colors font-medium">
              How It Works
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-easytract-primary transition-colors font-medium">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-easytract-primary transition-colors font-medium">
              About
            </Link>
            <Link 
              href="#waitlist" 
              className="bg-easytract-gradient text-white px-6 py-2 rounded-full font-semibold hover:shadow-easytract-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              Join Waitlist
            </Link>
          </div>
          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <footer className="bg-easytract-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-extrabold mb-4">EASYTRACT</h3>
            <p className="text-gray-300 max-w-md">
              The pre-release compliance layer for the music industry. Eliminating the $2.5B black box one release at a time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
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
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
