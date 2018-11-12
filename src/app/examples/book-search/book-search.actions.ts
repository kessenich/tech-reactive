import { Action } from '@ngrx/store';
import { Book } from './book.models';

export enum BookSearchActionTypes {
  SearchBooks = '[BookSearch] Search Books',
  SearchSuccess = '[BookSearch] Search Success',
  SearchFailure = '[BookSearch] Search Failure'
}

export class SearchQuery implements Action {
  readonly type = BookSearchActionTypes.SearchBooks;

  constructor(public payload: string) {}
}

export class SearchSuccess implements Action {
  readonly type = BookSearchActionTypes.SearchSuccess;

  constructor(public payload: Book[]) {}
}

export class SearchFailure implements Action {
  readonly type = BookSearchActionTypes.SearchFailure;

  constructor(public payload: string) {}
}

export type BookSearchActions = SearchQuery | SearchSuccess | SearchFailure;
