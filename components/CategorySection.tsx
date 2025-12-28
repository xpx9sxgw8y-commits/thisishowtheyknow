import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

interface Article {
  id: string
  title: string
  author: string
  date: string
  verified: boolean
}

// Mock data
const mockArticles: Record<string, Article[]> = {
  sources: [
    { id: '8', title: 'How to Verify Social Media Sources', author: 'Alex Kim', date: '2024-01-08', verified: true },
    { id: '9', title: 'Primary Source Documentation Guide', author: 'Maria Garcia', date: '2024-01-07', verified: true },
    { id: '10', title: 'Cross-Referencing Multiple Sources', author: 'Tom Brown', date: '2024-01-06', verified: true },
    { id: '11', title: 'Source Credibility Scoring System', author: 'Anna White', date: '2024-01-05', verified: true },
  ],
  literacy: [
    { id: '12', title: 'Understanding Media Bias', author: 'Chris Lee', date: '2024-01-08', verified: true },
    { id: '13', title: 'Reading Between the Headlines', author: 'Rachel Green', date: '2024-01-07', verified: true },
    { id: '14', title: 'Fact vs Opinion in News', author: 'Mark Taylor', date: '2024-01-06', verified: true },
    { id: '15', title: 'Critical Thinking for News Consumers', author: 'Jennifer Adams', date: '2024-01-05', verified: true },
  ],
  'fact-check': [
    { id: '16', title: 'Weekly Fact-Check Roundup', author: 'News Team', date: '2024-01-08', verified: true },
    { id: '17', title: 'Viral Claim Investigation', author: 'Fact Check Team', date: '2024-01-07', verified: true },
  ],
}

export default function CategorySection({ 
  title, 
  category, 
  limit = 4 
}: { 
  title: string
  category: string
  limit?: number 
}) {
  const articles = mockArticles[category] || []
  const displayedArticles = articles.slice(0, limit)

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-secondary">{title}</h3>
        <Link 
          href={`/${category}`}
          className="text-primary text-sm font-semibold hover:underline flex items-center space-x-1"
        >
          <span>View All</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="space-y-4">
        {displayedArticles.map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.id}`}
            className="block group"
          >
            <div className="flex items-start space-x-3">
              {article.verified && (
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {article.author} • {new Date(article.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

