import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case types.LOGIN_ERROR:
    case types.LOGIN_REQUEST:
      return state;
    case types.LOGIN_SUCCESS: {
      return { ...action.payload };
    }
    default:
      return state;
  }
}
