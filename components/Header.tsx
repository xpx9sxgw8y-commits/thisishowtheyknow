'use client'

import Link from 'next/link'
import { Menu, Search, Shield, TrendingUp } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Fact Check', href: '/fact-check' },
    { name: 'Source Analysis', href: '/sources' },
    { name: 'Media Literacy', href: '/literacy' },
    { name: 'About', href: '/about' },
  ]

  return (
    <header className="bg-white border-b-4 border-primary shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary group-hover:text-primary-dark transition-colors">
                  THIS IS HOW THEY KNOW
                </span>
                <span className="text-xs text-gray-600 -mt-1">Media Analysis & Fact-Checking</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search & Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button
              className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Breaking News Bar */}
        <div className="bg-primary text-white py-2 px-4 flex items-center space-x-3">
          <TrendingUp className="h-4 w-4 animate-pulse" />
          <span className="text-sm font-semibold">BREAKING:</span>
          <span className="text-sm flex-1 truncate">
            New fact-checking tools now available - Verify sources in real-time
          </span>
        </div>
      </div>
    </header>
  )
}


