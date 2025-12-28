import Link from 'next/link'
import { Shield, Mail, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-white">THIS IS HOW THEY KNOW</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted source for media analysis, fact-checking, and source verification. 
              We believe in transparency in journalism and empowering readers with the tools 
              to verify information themselves.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fact-check" className="hover:text-primary transition-colors">
                  Fact Check
                </Link>
              </li>
              <li>
                <Link href="/sources" className="hover:text-primary transition-colors">
                  Source Analysis
                </Link>
              </li>
              <li>
                <Link href="/literacy" className="hover:text-primary transition-colors">
                  Media Literacy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-it-works" className="hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/verification-guide" className="hover:text-primary transition-colors">
                  Verification Guide
                </Link>
              </li>
              <li>
                <Link href="/api" className="hover:text-primary transition-colors">
                  API Access
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} This Is How They Know. All rights reserved.</p>
          <p className="mt-2">Promoting transparency and media literacy worldwide.</p>
        </div>
      </div>
    </footer>
  )
}

