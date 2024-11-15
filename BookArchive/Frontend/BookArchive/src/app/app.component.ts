import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookTableComponent } from './components/book-table/book-table.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, BookTableComponent, BookFormComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookArchive';

  public book: Book = {
    author: 'test',
    title: 'test'
  };
}
