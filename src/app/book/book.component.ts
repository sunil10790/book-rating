import { Component, OnInit, Input } from '@angular/core';
import { Book } from './book.model'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  host: {
    class: 'row ui grid posts'
  }
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor() {
  }

  voteUp(): boolean{
    this.book.voteUp();
    return false;
  }

  voteDown(): boolean{
    this.book.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
