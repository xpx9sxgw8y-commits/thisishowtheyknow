import Link from 'next/link'
import { Clock, User, CheckCircle2 } from 'lucide-react'

export default function FeaturedArticle() {
  const article = {
    id: '1',
    title: 'How Major News Outlets Verify Breaking News in Real-Time',
    excerpt: 'An in-depth look at the verification processes used by leading news organizations when reporting on developing stories. We break down the multi-step verification process and show you how to apply these techniques.',
    image: '/api/placeholder/800/400',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Media Analysis',
    verified: true,
    sources: 12,
  }

  return (
    <Link href={`/article/${article.id}`} className="article-card block group">
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h3 className="text-3xl font-bold mb-4">{article.title}</h3>
            <p className="text-lg opacity-90">{article.excerpt}</p>
          </div>
        </div>
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          {article.verified && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
              <CheckCircle2 className="h-3 w-3" />
              <span>Verified</span>
            </span>
          )}
          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
          <span className="text-primary font-semibold">{article.sources} sources verified</span>
        </div>
        <p className="text-gray-700 leading-relaxed">{article.excerpt}</p>
        <div className="mt-4 text-primary font-semibold group-hover:underline">
          Read Full Analysis →
        </div>
      </div>
    </Link>
  )
}

