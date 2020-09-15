import * as Types from './types';

export const cadastroClienteRequest = (data) => ({
  type: Types.CADASTRO_CLIENTE,
  payload: data,
});

export const cadastroClienteSuccess = (data) => ({
  type: Types.CADASTRO_CLIENTE_SUCCESS,
  payload: data,
});

export const cadastroClienteFailure = (data) => ({
  type: Types.CADASTRO_CLIENTE_FAILURE,
  payload: data,
});
