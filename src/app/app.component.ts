import { Component } from '@angular/core';
import { Book } from './book/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: Book[];

  constructor() {
    this.books = [
      new Book('acd', 'http://angular.io/', 0),
      new Book('addsdsdscd', 'http://angular.io/', 5),
      new Book('acdd', 'http://angular.io/', 10)
    ];
  }

  addBook(title: HTMLInputElement, link: HTMLInputElement) {
    this.books.push(new Book(title.value, link.value, 0));
    title.value = '';
    link.value = '';
  }

  sortedBooks(): Book[] {
    return this.books.sort((a: Book, b: Book) => b.votes - a.votes);
  }
}
