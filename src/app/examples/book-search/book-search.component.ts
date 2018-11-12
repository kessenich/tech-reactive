import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';
import { SearchQuery } from './book-search.actions';
import { Store, select } from '@ngrx/store';
import { Book } from './book.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  searchInput = new FormControl('');

  books$: Observable<Book[]>;

  constructor(private store: Store<{ books: Book[] }>) {
    this.books$ = store.pipe(select('books'));
  }

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(500),
        tap(x => console.log(`search string: ${x}`))
      )
      .subscribe(x => this.store.dispatch(new SearchQuery(x)));
  }
}
