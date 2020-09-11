import * as Types from './types';

export const loginRequest = (email, password) => ({
  type: Types.AUTH_LOGIN,
  payload: { email, password },
});

export const loginSuccess = (token, data) => ({
  type: Types.AUTH_LOGIN_SUCCESS,
  payload: { token, data },
});

export const loginFailure = () => ({
  type: Types.AUTH_LOGIN_FAILURE,
});

export const recuperarSenhaRequest = (email) => ({
  type: Types.AUTH_RECUPERAR_SENHA_REQUEST,
  payload: email,
});

export const recuperarSenhaSuccess = (email) => ({
  type: Types.AUTH_RECUPERAR_SENHA_SUCCESS,
  payload: email,
});

export const recuperarSenhaFailure = () => ({
  type: Types.AUTH_RECUPERAR_SENHA_FAILURE,
});

export const logoutRequest = () => ({
  type: Types.AUTH_LOGOUT,
});
