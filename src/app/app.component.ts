import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addBook(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Title: ${title.value} and Link: ${link.value}`);
    return false;
  }
}
