import { notFound } from 'next/navigation'
import { Clock, User, CheckCircle2, ExternalLink, Shield, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

// Mock article data - in a real app, this would come from a database
const articles: Record<string, any> = {
  '1': {
    id: '1',
    title: 'How Major News Outlets Verify Breaking News in Real-Time',
    content: `
      <p>When breaking news hits, the pressure to report quickly is immense. But how do major news organizations ensure accuracy while racing against the clock?</p>
      
      <h2>The Multi-Step Verification Process</h2>
      <p>Leading news outlets follow a rigorous multi-step verification process that includes:</p>
      <ul>
        <li><strong>Source Confirmation:</strong> At least two independent sources must confirm the information</li>
        <li><strong>Cross-Referencing:</strong> Information is checked against official records, databases, and previous reporting</li>
        <li><strong>Expert Consultation:</strong> Subject matter experts are consulted for technical accuracy</li>
        <li><strong>Legal Review:</strong> Sensitive stories undergo legal review before publication</li>
      </ul>

      <h2>Real-Time Verification Tools</h2>
      <p>Modern newsrooms use sophisticated tools to verify information in real-time:</p>
      <ul>
        <li>Reverse image search to verify photo authenticity</li>
        <li>Geolocation tools to confirm location claims</li>
        <li>Social media verification protocols</li>
        <li>Database cross-referencing systems</li>
      </ul>

      <h2>What This Means for Readers</h2>
      <p>Understanding these processes helps readers evaluate news credibility. When you see a breaking news story, look for:</p>
      <ul>
        <li>Multiple source citations</li>
        <li>Transparent reporting of what is confirmed vs. what is still developing</li>
        <li>Corrections and updates as more information becomes available</li>
      </ul>
    `,
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Media Analysis',
    verified: true,
    sources: [
      { name: 'Reuters Verification Guidelines', url: '#', type: 'Official Document' },
      { name: 'AP News Standards', url: '#', type: 'Official Document' },
      { name: 'Interview with CNN Newsroom Director', url: '#', type: 'Primary Source' },
      { name: 'BBC Verification Protocol', url: '#', type: 'Official Document' },
    ],
    factCheck: {
      status: 'Verified',
      accuracy: 95,
      claims: [
        { claim: 'News outlets use multi-source verification', verified: true, confidence: 'High' },
        { claim: 'Real-time tools are standard in modern newsrooms', verified: true, confidence: 'High' },
      ],
    },
  },
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles[params.id]

  if (!article) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/${article.category.toLowerCase().replace(' ', '-')}`} className="hover:text-primary">
          {article.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{article.title}</span>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            {article.category}
          </span>
          {article.verified && (
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Verified</span>
            </span>
          )}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
          {article.title}
        </h1>
        <div className="flex items-center space-x-6 text-gray-600 mb-6">
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5" />
            <span className="font-medium">{article.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>{article.readTime}</span>
          </div>
          <div>
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      </header>

      {/* Fact Check Summary */}
      {article.factCheck && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start space-x-4">
            <Shield className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-bold text-lg text-secondary mb-2">Fact-Check Summary</h3>
              <div className="space-y-2 mb-4">
                {article.factCheck.claims.map((claim: any, idx: number) => (
                  <div key={idx} className="flex items-start space-x-2">
                    {claim.verified ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm text-gray-700">{claim.claim}</p>
                      <p className="text-xs text-gray-500">Confidence: {claim.confidence}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <strong>Overall Accuracy:</strong> {article.factCheck.accuracy}%
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="prose prose-lg max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>

      {/* Sources Section */}
      {article.sources && article.sources.length > 0 && (
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center space-x-2">
            <ExternalLink className="h-6 w-6 text-primary" />
            <span>Verified Sources</span>
          </h2>
          <div className="space-y-4">
            {article.sources.map((source: any, idx: number) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-secondary mb-1">{source.name}</h3>
                    <p className="text-sm text-gray-600">{source.type}</p>
                  </div>
                  <a
                    href={source.url}
                    className="text-primary hover:text-primary-dark font-semibold text-sm flex items-center space-x-1"
                  >
                    <span>View</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold text-secondary mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((id) => (
            <Link
              key={id}
              href={`/article/${id}`}
              className="article-card block p-6 group"
            >
              <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                Related Article Title {id}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                Brief description of the related article content...
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

