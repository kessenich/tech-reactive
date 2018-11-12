import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BookSearchActionTypes, SearchQuery, SearchSuccess, SearchFailure } from './book-search.actions';
import { Observable, empty, of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.models';
import { Action } from '@ngrx/store';

@Injectable()
export class BookSearchEffects {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  @Effect()
  search$ = (): Observable<Action> =>
    this.actions$.pipe(
      ofType<SearchQuery>(BookSearchActionTypes.SearchBooks),
      map(action => action.payload),
      tap(query => console.log(`Search books with query: ${query}`)),
      switchMap(query => {
        if (query === '') {
          return empty();
        }

        return this.searchBooks(query).pipe(
          map((books: Book[]) => new SearchSuccess(books)),
          catchError(err => of(new SearchFailure(err)))
        );
      })
    )

  searchBooks(queryTitle: string): Observable<Book[]> {
    return this.http
      .get<{ items: Book[] }>(`${this.API_PATH}?q=${queryTitle}`)
      .pipe(map(books => books.items || []));
  }

  constructor(private actions$: Actions, private http: HttpClient) {}
}
