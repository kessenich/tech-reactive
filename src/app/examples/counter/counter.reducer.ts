import * as Counter from './counter.actions';

export const initialState = 0;

export function counterReducer(
  state = initialState,
  action: Counter.ActionsUnion
): number {
  switch (action.type) {
    case Counter.ActionTypes.Increment:
      return state + 1;

    case Counter.ActionTypes.Decrement:
      return state - 1;

    case Counter.ActionTypes.Reset:
      return 0;

    default:
      return state;
  }
}
