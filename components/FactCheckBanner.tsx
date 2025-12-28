'use client'

import { Search, AlertCircle, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export default function FactCheckBanner() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // In a real app, this would navigate to search results
      console.log('Searching for:', searchQuery)
    }
  }

  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark rounded-lg p-8 mb-12 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <CheckCircle2 className="h-8 w-8" />
          <h2 className="text-3xl font-bold">Verify Any Claim</h2>
        </div>
        <p className="text-lg mb-6 opacity-90">
          Enter a claim, headline, or statement to see our fact-checking analysis and source verification
        </p>
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Paste a claim or headline to verify..."
              className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Verify
          </button>
        </form>
        <div className="mt-6 flex items-center justify-center space-x-6 text-sm opacity-80">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="h-4 w-4" />
            <span>12,345 claims verified</span>
          </div>
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-4 w-4" />
            <span>98.2% accuracy rate</span>
          </div>
        </div>
      </div>
    </div>
  )
}


