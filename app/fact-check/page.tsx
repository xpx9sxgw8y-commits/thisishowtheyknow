import ArticleGrid from '@/components/ArticleGrid'
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react'

export default function FactCheckPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-secondary mb-4">Fact Check</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Verified claims, debunked misinformation, and transparent fact-checking analysis. 
          Every claim is thoroughly researched and verified against multiple credible sources.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatCard
          icon={<CheckCircle2 className="h-8 w-8 text-green-500" />}
          title="Claims Verified"
          value="12,345"
          description="Total claims fact-checked"
        />
        <StatCard
          icon={<AlertTriangle className="h-8 w-8 text-yellow-500" />}
          title="Misleading Claims"
          value="3,456"
          description="Claims found to be misleading"
        />
        <StatCard
          icon={<XCircle className="h-8 w-8 text-red-500" />}
          title="False Claims"
          value="1,234"
          description="Claims proven false"
        />
      </div>

      {/* Articles */}
      <ArticleGrid category="fact-check" />
    </div>
  )
}

function StatCard({ icon, title, value, description }: any) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary">
      <div className="flex items-center space-x-4">
        {icon}
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-secondary">{value}</p>
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>
      </div>
    </div>
  )
}

