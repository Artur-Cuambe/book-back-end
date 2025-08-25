import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { ProgressController } from './progress/progress.controller';
import { ProgressService } from './progress/progress.service';
import { AnnotationsController } from './annotations/annotations.controller';
import { AnnotationsService } from './annotations/annotations.service';

@Module({
  imports: [],
  controllers: [BooksController, ProgressController, AnnotationsController],
  providers: [BooksService, ProgressService, AnnotationsService],
})
export class AppModule {}
