import { Controller, Get, Post, Body } from '@nestjs/common';
import { FactCheckService } from './fact-check.service';

@Controller('api/fact-check')
export class FactCheckController {
  constructor(private readonly factCheckService: FactCheckService) {}

  @Get('stats')
  getStats() {
    return this.factCheckService.getStats();
  }

  @Post('verify')
  verifyClaim(@Body('claim') claim: string) {
    return this.factCheckService.verifyClaim(claim);
  }
}

