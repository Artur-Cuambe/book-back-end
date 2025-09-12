import { Controller, Get, Post, Param, Body, Query } from "@nestjs/common";
import { ProgressService } from "./progress.service";

@Controller("progress")
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Post(":bookId")
  saveProgress(
    @Param("bookId") bookId: string,
    @Body() body: { cfi: string; userId: string }
  ) {
    const userId = parseInt(body.userId)
    return this.progressService.saveProgress(+bookId, body.cfi, userId);
  }

  @Get()
  getProgress(@Query() options: { bookId: string; userId: string }) {
    const userId = parseInt(options.userId)
    return this.progressService.getProgress(+options.bookId, userId);
  }
}
