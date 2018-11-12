import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { MaterialModule } from '../material.module';

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
    MaterialModule,
    StoreModule.forFeature('count', counterReducer, { metaReducers })
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class ExamplesModule {}
