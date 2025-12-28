import ArticleGrid from '@/components/ArticleGrid'
import { BookOpen, Eye, Brain } from 'lucide-react'

export default function LiteracyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-secondary mb-4">Media Literacy</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Build your skills in identifying reliable information, understanding media bias, 
          and developing critical thinking skills for the digital age.
        </p>
      </div>

      {/* Learning Path */}
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-lg p-8 mb-12 text-white">
        <h2 className="text-2xl font-bold mb-4">Start Your Media Literacy Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LearningStep
            step={1}
            title="Learn the Basics"
            description="Understand fundamental concepts of media literacy"
            icon={<BookOpen className="h-6 w-6" />}
          />
          <LearningStep
            step={2}
            title="Practice Analysis"
            description="Apply your skills to real-world examples"
            icon={<Eye className="h-6 w-6" />}
          />
          <LearningStep
            step={3}
            title="Master Critical Thinking"
            description="Develop advanced analytical skills"
            icon={<Brain className="h-6 w-6" />}
          />
        </div>
      </div>

      {/* Articles */}
      <ArticleGrid category="literacy" />
    </div>
  )
}

function LearningStep({ step, title, description, icon }: any) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-3">
        <div className="bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold">
          {step}
        </div>
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  )
}

