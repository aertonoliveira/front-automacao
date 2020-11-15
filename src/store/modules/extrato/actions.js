import * as Types from './types';

export const listagemExtratoRequest = (data) => ({
  type: Types.LISTAGEM_EXTRATOS,
  payload: data,
});

export const listagemExtratoSuccess = (data) => ({
  type: Types.LISTAGEM_EXTRATOS_SUCCESS,
  payload: data,
});

export const listagemExtratoFailure = (data) => ({
  type: Types.LISTAGEM_EXTRATOS_FAILURE,
  payload: data,
});
