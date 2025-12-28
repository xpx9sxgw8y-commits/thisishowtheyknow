import { Injectable } from '@nestjs/common';

@Injectable()
export class MediaLiteracyService {
  getLearningPath() {
    return [
      {
        step: 1,
        title: 'Learn the Basics',
        description: 'Understand fundamental concepts of media literacy',
        icon: 'book',
      },
      {
        step: 2,
        title: 'Practice Analysis',
        description: 'Apply your skills to real-world examples',
        icon: 'eye',
      },
      {
        step: 3,
        title: 'Master Critical Thinking',
        description: 'Develop advanced analytical skills',
        icon: 'brain',
      },
    ];
  }
}

