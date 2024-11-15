import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent implements OnInit {

  @Input({required: true})
  public book: Book = { author: '', title: '' };

  public bookForm = new FormGroup<BookForm>({
    author: new FormControl('', { nonNullable: true }),
    title: new FormControl('', { nonNullable: true })
  })

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookForm.setValue(this.book);
  }

  public saveBook(): void {
    // TODo
  }

}

interface BookForm {
  author: FormControl<string>,
  title: FormControl<string>
}