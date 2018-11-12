import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BookSearchEffects } from './book-search.effects';

describe('BookSearchEffects', () => {
  let actions$: Observable<any>;
  let effects: BookSearchEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookSearchEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(BookSearchEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
