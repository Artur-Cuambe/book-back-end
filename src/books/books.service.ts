import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  // Você pode trocar por banco de dados depois.
  private books = [
    { id: 1, title: 'Livro Exemplo', file: '/files/livro1.epub' },
    { id: 2, title: 'Pride and Prejudice', file: '/files/austen-pride-and-prejudice-illustrations.epub' },
  ];

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find(b => b.id === id);
  }
}
