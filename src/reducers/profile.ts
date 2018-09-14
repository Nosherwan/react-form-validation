import { ActionTypes } from '../constants';
import { Map } from 'immutable';

const _FULFILLED = '_FULFILLED';

export function profile(state = Map({
  firstName: '',
  lastName: '',
  email: '',
  available: false,
}), action: any) {
  switch (action.type) {
    case ActionTypes.STUDENT_FETCH + _FULFILLED:
      console.log('action', action)
      return state.withMutations(state => {
        state.set('firstName', action.payload.firstName || '');
        state.set('lastName', action.payload.lastName || '');
        state.set('email', action.payload.email || '');
        state.set('available', !!action.payload.available);
      });
    default:
      return state;
  }
}
