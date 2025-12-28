import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-bold text-secondary mb-4">Page Not Found</h2>
      <p className="text-xl text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex items-center justify-center space-x-4">
        <Link
          href="/"
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center space-x-2"
        >
          <Home className="h-5 w-5" />
          <span>Go Home</span>
        </Link>
        <Link
          href="/fact-check"
          className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center space-x-2"
        >
          <Search className="h-5 w-5" />
          <span>Browse Articles</span>
        </Link>
      </div>
    </div>
  )
}


