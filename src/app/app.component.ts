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
      new Book('acd', 'adf', 0),
      new Book('addsdsdscd', 'adf', 5),
      new Book('acdd', 'adf', 10)
    ];
  }

  addBook(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Title: ${title.value} and Link: ${link.value}`);
    return false;
  }
}
