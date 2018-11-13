import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BookSearchActionTypes, SearchQuery, SearchSuccess, SearchFailure } from './book-search.actions';
import { Observable, empty, of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { Book } from './book.models';
import { Action } from '@ngrx/store';
import { BookSearchService } from './book-search.service';

@Injectable()
export class BookSearchEffects {

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

        return this.bookSearchService.searchBooks(query).pipe(
          map((books: Book[]) => new SearchSuccess(books)),
          catchError(err => of(new SearchFailure(err)))
        );
      })
    )

  constructor(private actions$: Actions, private bookSearchService: BookSearchService) {}
}
