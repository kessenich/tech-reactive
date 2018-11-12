import { BookSearchComponent } from './book-search/book-search.component';
import { EffectsModule } from '@ngrx/effects';
import { BookSearchEffects } from './book-search/book-search.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { MaterialModule } from '../material.module';
import * as BookSearch from './book-search/book-search.reducer';
import { ReactiveFormsModule } from '@angular/forms';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature('count', counterReducer, { metaReducers }),
    StoreModule.forFeature('books', BookSearch.reducer),
    EffectsModule.forFeature([BookSearchEffects])
  ],
  declarations: [CounterComponent, BookSearchComponent],
  exports: [CounterComponent, BookSearchComponent]
})
export class ExamplesModule {}
