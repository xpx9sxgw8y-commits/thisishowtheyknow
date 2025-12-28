import { Controller, Get } from '@nestjs/common';
import { SourcesService } from './sources.service';

@Controller('api/sources')
export class SourcesController {
  constructor(private readonly sourcesService: SourcesService) {}

  @Get('concepts')
  getConcepts() {
    return this.sourcesService.getConcepts();
  }
}

