import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  host: {
    class: 'row ui grid posts'
  }
})
export class BookComponent implements OnInit {
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Eloquent JavaScript';
    this.link = 'http://eloquentjavascript.net/';
    this.votes = 37;
  }

  voteUp(): boolean{
    this.votes  += 1;
    return false;
  }

  voteDown(): boolean{
    this.votes  -= 1;
    return false;
  }

  ngOnInit() {
  }

}
