import { Injectable } from '@nestjs/common';

export interface Progress {
  bookId: number;
  cfi: string; // posição no EPUB
}

@Injectable()
export class ProgressService {
  private progresses: Progress[] = [];

  saveProgress(bookId: number, cfi: string) {

    const existing = this.progresses.find(p => p.bookId === bookId);
    if (existing) {
      existing.cfi = cfi;
    } else {
      this.progresses.push({ bookId, cfi });
    }
    console.log({ bookId, cfi });
    
    return { bookId, cfi };
  }

  getProgress(bookId: number) {
    return this.progresses.find(p => p.bookId === bookId) || null;
  }
}
