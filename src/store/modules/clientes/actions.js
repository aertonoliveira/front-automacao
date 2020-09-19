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

export const listagemClienteRequest = (data) => ({
  type: Types.LISTAGEM_CLIENTES,
  payload: data,
});

export const listagemClienteSuccess = (data) => ({
  type: Types.LISTAGEM_CLIENTES_SUCCESS,
  payload: data,
});

export const listagemClienteFailure = (data) => ({
  type: Types.LISTAGEM_CLIENTES_FAILURE,
  payload: data,
});

