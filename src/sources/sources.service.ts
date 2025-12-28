import { Injectable } from '@nestjs/common';

@Injectable()
export class SourcesService {
  getConcepts() {
    return [
      {
        icon: 'shield',
        title: 'Source Verification',
        description: 'Learn how to verify the authenticity and credibility of sources',
      },
      {
        icon: 'check',
        title: 'Credibility Assessment',
        description: 'Understand the factors that determine source reliability',
      },
      {
        icon: 'file',
        title: 'Document Analysis',
        description: 'Techniques for analyzing and verifying documents and records',
      },
    ];
  }
}


