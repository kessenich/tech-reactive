import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';

import { BookSearchEffects } from './book-search.effects';
import { Book } from './book.models';
import { SearchSuccess, SearchQuery } from './book-search.actions';
import { BookSearchService } from './book-search.service';

describe('BookSearchEffects', () => {
  let actions$: Observable<any>;
  let effects: BookSearchEffects;
  let searchService: BookSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookSearchEffects,
        provideMockActions(() => actions$),
        {
          provide: BookSearchService,
          useValue: { searchBooks: () => {} }
        }
      ]
    });

    effects = TestBed.get(BookSearchEffects);
    searchService = TestBed.get(BookSearchService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should return a new SearchSuccess with books', () => {
    const book1 = { id: '111', volumeInfo: {} } as Book;
    const book2 = { id: '222', volumeInfo: {} } as Book;
    const books = [book1, book2];
    const action = new SearchQuery('query');
    const completion = new SearchSuccess(books);

    actions$ = hot('-a---', { a: action });
    const response = cold('-a|', { a: books });
    const expected = cold('--b', { b: completion });

    spyOn(searchService, 'searchBooks').and.returnValue(response);

    expect(effects.search$()).toBeObservable(expected);
  });
});
