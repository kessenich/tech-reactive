import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { StoreModule, Store } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import * as Counter from './counter.actions';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: Store<number>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CounterComponent
      ],
      imports: [
        StoreModule.forRoot({ count: counterReducer })
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to increment the counter', () => {
    const action = new Counter.Increment();

    component.increment();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to decrement the counter', () => {
    const action = new Counter.Decrement();

    component.decrement();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to reset the counter', () => {
    const action = new Counter.Reset();

    component.reset();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should display a counter state of three', () => {
    component.increment();
    component.increment();
    component.increment();

    component.count$.subscribe(data => {
      expect(data).toBe(3);
    });
  });
});
