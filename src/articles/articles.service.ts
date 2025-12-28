import { Injectable } from '@nestjs/common';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  verified: boolean;
  sources?: number;
  image?: string;
  factCheck?: {
    status: string;
    accuracy: number;
    claims: Array<{
      claim: string;
      verified: boolean;
      confidence: string;
    }>;
  };
  sourcesList?: Array<{
    name: string;
    url: string;
    type: string;
  }>;
}

@Injectable()
export class ArticlesService {
  private articles: Article[] = [
    {
      id: '1',
      title: 'How Major News Outlets Verify Breaking News in Real-Time',
      excerpt: 'An in-depth look at the verification processes used by leading news organizations when reporting on developing stories. We break down the multi-step verification process and show you how to apply these techniques.',
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
      sources: 12,
      factCheck: {
        status: 'Verified',
        accuracy: 95,
        claims: [
          { claim: 'News outlets use multi-source verification', verified: true, confidence: 'High' },
          { claim: 'Real-time tools are standard in modern newsrooms', verified: true, confidence: 'High' },
        ],
      },
      sourcesList: [
        { name: 'Reuters Verification Guidelines', url: '#', type: 'Official Document' },
        { name: 'AP News Standards', url: '#', type: 'Official Document' },
        { name: 'Interview with CNN Newsroom Director', url: '#', type: 'Primary Source' },
        { name: 'BBC Verification Protocol', url: '#', type: 'Official Document' },
      ],
    },
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
  ];

  findAll(category?: string, limit?: number): Article[] {
    let articles = this.articles;
    
    if (category) {
      articles = articles.filter(a => 
        a.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (limit) {
      articles = articles.slice(0, limit);
    }

    return articles;
  }

  findOne(id: string): Article | undefined {
    return this.articles.find(article => article.id === id);
  }

  getFeatured(): Article {
    return this.articles[0];
  }
}


