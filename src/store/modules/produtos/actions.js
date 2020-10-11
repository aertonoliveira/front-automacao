import * as Types from './types';

export const cadastroProdutoRequest = (data) => ({
  type: Types.CADASTRO_PRODUTO,
  payload: data,
});

export const cadastroProdutoSuccess = (data) => ({
  type: Types.CADASTRO_PRODUTO_SUCCESS,
  payload: data,
});

export const cadastroProdutoFailure = (data) => ({
  type: Types.CADASTRO_PRODUTO_FAILURE,
  payload: data,
});

export const listagemProdutosRequest = (data) => ({
  type: Types.LISTAGEM_PRODUTOS,
  payload: data,
});

export const listagemProdutosSuccess = (data) => ({
  type: Types.LISTAGEM_PRODUTOS_SUCCESS,
  payload: data,
});

export const listagemProdutosFailure = (data) => ({
  type: Types.LISTAGEM_PRODUTOS_FAILURE,
  payload: data,
});

export const alterarStatusProdutoRequest = (data) => ({
  type: Types.ALTERAR_STATUS_PRODUTO,
  payload: data,
});

export const alterarStatusProdutoSuccess = (data) => ({
  type: Types.ALTERAR_STATUS_PRODUTO_SUCCESS,
  payload: data,
});

export const alterarStatusProdutoFailure = (data) => ({
  type: Types.ALTERAR_STATUS_PRODUTO_FAILURE,
  payload: data,
});
