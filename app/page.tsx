import FeaturedArticle from '@/components/FeaturedArticle'
import ArticleGrid from '@/components/ArticleGrid'
import CategorySection from '@/components/CategorySection'
import FactCheckBanner from '@/components/FactCheckBanner'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-secondary mb-4">
          This Is How They Know
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Uncovering the truth behind the headlines. Fact-checking, source verification, 
          and media analysis to help you understand how news organizations verify information.
        </p>
      </div>

      {/* Fact Check Banner */}
      <FactCheckBanner />

      {/* Featured Article */}
      <section className="mb-12">
        <h2 className="section-title">Featured Analysis</h2>
        <FeaturedArticle />
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Main Articles */}
        <div className="lg:col-span-2">
          <h2 className="section-title">Latest Fact-Checks</h2>
          <ArticleGrid category="fact-check" limit={6} />
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-8">
          <CategorySection 
            title="Source Analysis" 
            category="sources"
            limit={4}
          />
          <CategorySection 
            title="Media Literacy" 
            category="literacy"
            limit={4}
          />
        </div>
      </div>

      {/* Category Sections */}
      <section className="mb-12">
        <h2 className="section-title">Explore by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard
            title="Fact Checking"
            description="Verified claims and debunked misinformation"
            href="/fact-check"
            count={24}
            color="bg-red-50 border-red-200"
          />
          <CategoryCard
            title="Source Verification"
            description="Analyzing credibility and transparency of sources"
            href="/sources"
            count={18}
            color="bg-blue-50 border-blue-200"
          />
          <CategoryCard
            title="Media Literacy"
            description="Learn how to identify reliable information"
            href="/literacy"
            count={15}
            color="bg-green-50 border-green-200"
          />
        </div>
      </section>
    </div>
  )
}

function CategoryCard({ 
  title, 
  description, 
  href, 
  count, 
  color 
}: { 
  title: string
  description: string
  href: string
  count: number
  color: string
}) {
  return (
    <a 
      href={href}
      className={`${color} border-2 rounded-lg p-6 hover:shadow-lg transition-shadow block`}
    >
      <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <span className="text-primary font-semibold">{count} articles →</span>
    </a>
  )
}


