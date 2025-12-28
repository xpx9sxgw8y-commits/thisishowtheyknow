import { Module } from '@nestjs/common';
import { FactCheckController } from './fact-check.controller';
import { FactCheckService } from './fact-check.service';

@Module({
  controllers: [FactCheckController],
  providers: [FactCheckService],
})
export class FactCheckModule {}


