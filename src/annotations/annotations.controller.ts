import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AnnotationsService } from './annotations.service';

@Controller('annotations')
export class AnnotationsController {
  constructor(private readonly service: AnnotationsService) {}

  @Get(':bookId')
  getByBook(@Param('bookId') bookId: string) {
    return this.service.findByBook(+bookId);
  }

  @Post(':bookId')
  create(@Param('bookId') bookId: string, @Body() body: { cfiRange: string; text: string; type: string, markedText: string }) {
    return this.service.create(+bookId, body.cfiRange, body.text, body.type, body.markedText);
  }
}
