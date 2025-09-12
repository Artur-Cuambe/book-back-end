import { Controller, Get, Post, Param, Body, Query } from "@nestjs/common";
import { AnnotationsService } from "./annotations.service";

@Controller("annotations")
export class AnnotationsController {
  constructor(private readonly service: AnnotationsService) {}

  @Get()
  getByBook(@Query() options: { bookId: string; userId: string }) {
    const userId = parseInt(options.userId);
    return this.service.findByBook(+options.bookId, userId);
  }

  @Post(":bookId")
  create(
    @Param("bookId") bookId: string,
    @Body()
    body: {
      cfiRange: string;
      text: string;
      type: string;
      markedText: string;
      userId: string;
    }
  ) {
    const userId = parseInt(body.userId);
    return this.service.create(
      +bookId,
      body.cfiRange,
      body.text,
      body.type,
      body.markedText,
      userId
    );
  }
}
