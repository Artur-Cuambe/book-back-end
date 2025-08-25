import { Injectable } from "@nestjs/common";

export interface Annotation {
  id: number;
  bookId: number;
  cfiRange: string; // trecho selecionado
  text: string; // anotação opcional
  type: string; // "highlight" | "underline"
  markedText: string; 

}

@Injectable()
export class AnnotationsService {
  private annotations: Annotation[] = [];
  private idCounter = 1;

  findByBook(bookId: number) {
    return this.annotations.filter((a) => a.bookId === bookId);
  }

  create(
    bookId: number,
    cfiRange: string,
    text: string,
    type: string,
    markedText: string
  ) {
    const annotation: Annotation = {
      id: this.idCounter++,
      bookId,
      cfiRange,
      text,
      type,
      markedText
    };
    this.annotations.push(annotation);
    return annotation;
  }
}
