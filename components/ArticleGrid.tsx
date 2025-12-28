import Link from 'next/link'
import { Clock, CheckCircle2, ExternalLink } from 'lucide-react'

interface Article {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  verified: boolean
  sources?: number
  image?: string
}

// Mock data - in a real app, this would come from an API or database
const mockArticles: Article[] = [
  {
    id: '2',
    title: 'Fact-Check: Climate Change Claims Debunked',
    excerpt: 'We analyzed 50 recent climate change claims and verified each one against peer-reviewed scientific sources.',
    author: 'Michael Chen',
    date: '2024-01-14',
    readTime: '5 min read',
    category: 'Fact Check',
    verified: true,
    sources: 8,
  },
  {
    id: '3',
    title: 'Source Analysis: Understanding Primary vs Secondary Sources',
    excerpt: 'Learn the difference between primary and secondary sources and why it matters for news credibility.',
    author: 'Emily Rodriguez',
    date: '2024-01-13',
    readTime: '6 min read',
    category: 'Media Literacy',
    verified: true,
    sources: 5,
  },
  {
    id: '4',
    title: 'How to Spot Deepfakes and AI-Generated Content',
    excerpt: 'A comprehensive guide to identifying manipulated media in the age of AI-generated content.',
    author: 'David Park',
    date: '2024-01-12',
    readTime: '7 min read',
    category: 'Media Literacy',
    verified: true,
    sources: 10,
  },
  {
    id: '5',
    title: 'Verification Process: Breaking News Edition',
    excerpt: 'See how we verified a major breaking news story in real-time, step by step.',
    author: 'Sarah Johnson',
    date: '2024-01-11',
    readTime: '4 min read',
    category: 'Source Analysis',
    verified: true,
    sources: 15,
  },
  {
    id: '6',
    title: 'Fact-Check: Political Ad Claims Analyzed',
    excerpt: 'We fact-checked 20 claims from recent political advertisements and found 12 to be misleading.',
    author: 'James Wilson',
    date: '2024-01-10',
    readTime: '9 min read',
    category: 'Fact Check',
    verified: true,
    sources: 20,
  },
  {
    id: '7',
    title: 'The Anatomy of a Reliable News Source',
    excerpt: 'What makes a news source trustworthy? We break down the key indicators of credibility.',
    author: 'Lisa Anderson',
    date: '2024-01-09',
    readTime: '6 min read',
    category: 'Media Literacy',
    verified: true,
    sources: 7,
  },
]

export default function ArticleGrid({ 
  category, 
  limit 
}: { 
  category?: string
  limit?: number 
}) {
  const articles = category
    ? mockArticles.filter(a => a.category.toLowerCase().includes(category.toLowerCase()))
    : mockArticles

  const displayedArticles = limit ? articles.slice(0, limit) : articles

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {displayedArticles.map((article) => (
        <Link
          key={article.id}
          href={`/article/${article.id}`}
          className="article-card block group"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                {article.category}
              </span>
              {article.verified && (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              )}
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-3">
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.readTime}</span>
                {article.sources && (
                  <>
                    <span>•</span>
                    <span>{article.sources} sources</span>
                  </>
                )}
              </div>
              <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}


