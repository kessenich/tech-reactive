import { BookSearchActions, BookSearchActionTypes } from './book-search.actions';
import { Book } from './book.models';

export interface State {
  books: Book[];
  loading: boolean;
  error: string;
  query: string;
}

const initialState: State = {
  books: [],
  loading: false,
  error: '',
  query: '',
};

export function reducer(
  state = initialState,
  action: BookSearchActions
): State {
  switch (action.type) {
    case BookSearchActionTypes.SearchBooks: {
      const query = action.payload;

      if (query === '') {
        return {
          books: [],
          loading: false,
          error: '',
          query,
        };
      }

      return {
        ...state,
        loading: true,
        error: '',
        query,
      };
    }

    case BookSearchActionTypes.SearchSuccess: {
      return {
        books: action.payload,
        loading: false,
        error: '',
        query: state.query,
      };
    }

    case BookSearchActionTypes.SearchFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getBooks = (state: State) => state.books;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;
