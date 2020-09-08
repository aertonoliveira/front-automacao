import * as Types from './types';

export const loginRequest = (email, password) => ({
  type: Types.AUTH_LOGIN,
  payload: { email, password },
});

export const loginSuccess = (token) => ({
  type: Types.AUTH_LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = () => ({
  type: Types.AUTH_LOGIN_FAILURE,
});

export const logoutRequest = (token) => ({
  type: Types.AUTH_LOGOUT,
});
