import * as types from './actionTypes';
import { axPostLogin } from '../api';

export const loginRequest = () => ({ type: types.LOGIN_REQUEST });
export const loginSuccess = payload => ({ type: types.LOGIN_SUCCESS, payload });
export const loginError = payload => ({ type: types.LOGIN_ERROR, payload });

export const postLogin = ({ email, password }) => async dispatch => {
  dispatch(loginRequest());
  try {
    const token = await axPostLogin(email, password);
    dispatch(loginSuccess(token));
  } catch (err) {
    dispatch(loginError(err));
    throw err;
  }
};
