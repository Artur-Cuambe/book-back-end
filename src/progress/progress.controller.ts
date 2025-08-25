import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ProgressService } from './progress.service';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Post(':bookId')
  saveProgress(@Param('bookId') bookId: string, @Body() body: { cfi: string }) {
    return this.progressService.saveProgress(+bookId, body.cfi);
  }

  @Get(':bookId')
  getProgress(@Param('bookId') bookId: string) {
    return this.progressService.getProgress(+bookId);
  }
}
