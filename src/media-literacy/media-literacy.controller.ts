import { Controller, Get } from '@nestjs/common';
import { MediaLiteracyService } from './media-literacy.service';

@Controller('api/media-literacy')
export class MediaLiteracyController {
  constructor(private readonly mediaLiteracyService: MediaLiteracyService) {}

  @Get('learning-path')
  getLearningPath() {
    return this.mediaLiteracyService.getLearningPath();
  }
}


