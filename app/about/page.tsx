import { Shield, Target, Users, Eye } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-secondary mb-4">About This Is How They Know</h1>
        <p className="text-xl text-gray-600">
          Promoting transparency, accuracy, and media literacy in the digital age
        </p>
      </div>

      {/* Mission */}
      <section className="mb-12">
        <div className="bg-primary/5 rounded-lg p-8 border-l-4 border-primary">
          <h2 className="text-2xl font-bold text-secondary mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In an era of information overload and misinformation, we believe that transparency 
            is the key to building trust. "This Is How They Know" was created to demystify the 
            process of news verification and fact-checking.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We show you exactly how news organizations verify information, what sources they use, 
            and how you can apply these same techniques to evaluate information yourself. Our goal 
            is to empower readers with the tools and knowledge to become more critical consumers of media.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-secondary mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ValueCard
            icon={<Shield className="h-8 w-8 text-primary" />}
            title="Transparency"
            description="We believe in showing our work. Every fact-check includes sources, methodology, and reasoning."
          />
          <ValueCard
            icon={<Target className="h-8 w-8 text-primary" />}
            title="Accuracy"
            description="We prioritize accuracy over speed, ensuring every claim is thoroughly verified."
          />
          <ValueCard
            icon={<Users className="h-8 w-8 text-primary" />}
            title="Education"
            description="We don't just fact-check—we teach you how to fact-check, building media literacy skills."
          />
          <ValueCard
            icon={<Eye className="h-8 w-8 text-primary" />}
            title="Independence"
            description="We maintain editorial independence and are not affiliated with any political party or organization."
          />
        </div>
      </section>

      {/* How We Work */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-secondary mb-6">How We Work</h2>
        <div className="space-y-6">
          <ProcessStep
            number={1}
            title="Identify Claims"
            description="We monitor news, social media, and public statements to identify claims that need verification."
          />
          <ProcessStep
            number={2}
            title="Research & Verify"
            description="Our team researches each claim using multiple independent sources, official records, and expert consultation."
          />
          <ProcessStep
            number={3}
            title="Analyze Sources"
            description="We evaluate the credibility of each source, checking for bias, accuracy, and reliability."
          />
          <ProcessStep
            number={4}
            title="Present Findings"
            description="We present our findings transparently, showing our methodology and all sources used."
          />
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-3xl font-bold text-secondary mb-6">Our Team</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our team consists of experienced journalists, fact-checkers, researchers, and media 
          literacy educators dedicated to promoting accurate information and transparency.
        </p>
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-gray-600 italic">
            "We believe that an informed public is essential for democracy. By showing people 
            how information is verified, we empower them to make better decisions and hold 
            media organizations accountable."
          </p>
          <p className="text-gray-700 font-semibold mt-4">— The This Is How They Know Team</p>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ icon, title, description }: any) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function ProcessStep({ number, title, description }: any) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-bold text-secondary mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

