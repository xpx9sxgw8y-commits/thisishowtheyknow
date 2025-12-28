import ArticleGrid from '@/components/ArticleGrid'
import { Shield, CheckCircle2, FileText } from 'lucide-react'

export default function SourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-secondary mb-4">Source Analysis</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Understanding how to verify sources, analyze credibility, and identify reliable information. 
          Learn the techniques used by professional journalists and fact-checkers.
        </p>
      </div>

      {/* Key Concepts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <ConceptCard
          icon={<Shield className="h-8 w-8 text-primary" />}
          title="Source Verification"
          description="Learn how to verify the authenticity and credibility of sources"
        />
        <ConceptCard
          icon={<CheckCircle2 className="h-8 w-8 text-green-500" />}
          title="Credibility Assessment"
          description="Understand the factors that determine source reliability"
        />
        <ConceptCard
          icon={<FileText className="h-8 w-8 text-blue-500" />}
          title="Document Analysis"
          description="Techniques for analyzing and verifying documents and records"
        />
      </div>

      {/* Articles */}
      <ArticleGrid category="sources" />
    </div>
  )
}

function ConceptCard({ icon, title, description }: any) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}


