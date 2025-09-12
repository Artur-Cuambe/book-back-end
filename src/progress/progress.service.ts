import { Injectable } from '@nestjs/common';

export interface Progress {
  bookId: number;
  cfi: string; // posição no EPUB
  userId: number
}

@Injectable()
export class ProgressService {
  private progresses: Progress[] = [];

  saveProgress(bookId: number, cfi: string, userId: number) {

    const existing = this.progresses.find(p => p.bookId === bookId && p.userId == userId);
    if (existing) {
      existing.cfi = cfi;
    } else {
      this.progresses.push({ bookId, cfi, userId });
    }
    // console.log({ bookId, cfi });
    
    return this.progresses;
  }

  getProgress(bookId: number,userId: number) {
    // console.log({bookId,userId});
    
    return this.progresses.find(p => p.bookId === bookId && p.userId == userId) || null;
  }
}
