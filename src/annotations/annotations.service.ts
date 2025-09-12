import { Injectable } from "@nestjs/common";

export interface Annotation {
  id: number;
  bookId: number;
  cfiRange: string; // trecho selecionado
  text: string; // anotação opcional
  type: string; // "highlight" | "underline"
  markedText: string;
  userId: number;
}

@Injectable()
export class AnnotationsService {
  private annotations: Annotation[] = [];
  private idCounter = 1;

  findByBook(bookId: number,userId: number) {
    // console.log("params",{bookId, userId});
    // console.log("anotations",this.annotations);
    
    return this.annotations.filter((a) => a.bookId === bookId && a.userId == userId);
  }

  create(
    bookId: number,
    cfiRange: string,
    text: string,
    type: string,
    markedText: string,
    userId: number
  ) {
    const annotation: Annotation = {
      id: this.idCounter++,
      bookId,
      cfiRange,
      text,
      type,
      markedText,
      userId
    };
    this.annotations.push(annotation);
    return annotation;
  }
}
