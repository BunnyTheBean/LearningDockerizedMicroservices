import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookTestData: Book[] = [
    { id: 1, author: "Richard Adams", title: "Watership Down" },
    { id: 2, author: "Bhante Gunaratana", title: "Mindfulness in Plain English" },
    { id: 3, author: "Hiromu Arakawa", title: "Fullmetal Alchemist, Vol. 10" }
  ];

  constructor() { }

  public getAll(): Observable<Book[]> {
    return of(this.bookTestData);
  }

  public get(id: number): Observable<Book> {
    return of(this.bookTestData[0]);
  }

  public create(book: Book): Observable<Book> {
    return of(book);
  }

  public update(book: Book): Observable<Book> {
    return of(book);
  }

  public delete(id: number): Observable<any> {
    return of();
  }
}
