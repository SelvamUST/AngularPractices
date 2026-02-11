// import { createFeature, createReducer, on } from '@ngrx/store';
// import { CounterActions } from '../actions/counter.actions';

// export const counterFeatureKey = 'counter';

// export interface State {

// }

// export const initialState: State = {

// };
import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from '../actions/counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (currentValue) => currentValue + 1),
  on(decrement, (currentValue) => currentValue - 1)
);
