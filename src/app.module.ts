import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ArticlesModule } from './articles/articles.module';
import { FactCheckModule } from './fact-check/fact-check.module';
import { SourcesModule } from './sources/sources.module';
import { MediaLiteracyModule } from './media-literacy/media-literacy.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
    ArticlesModule,
    FactCheckModule,
    SourcesModule,
    MediaLiteracyModule,
  ],
})
export class AppModule {}

