import { data } from 'jquery';
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

export const alterarStatusClienteRequest = (data) => ({
  type: Types.ALTERAR_STATUS_CLIENTE,
  payload: data,
});

export const alterarStatusClienteSuccess = (data) => ({
  type: Types.ALTERAR_STATUS_CLIENTE_SUCCESS,
  payload: data,
});

export const alterarStatusClienteFailure = (data) => ({
  type: Types.ALTERAR_STATUS_CLIENTE_FAILURE,
  payload: data,
});

export const listaProdutosRequest = (data) => ({
  type: Types.LISTAGEM_PRODUTOS_CLIENTES,
  payload: data,
});

export const listaProdutosSucesso = (data) => ({
  type: Types.LISTAGEM_PRODUTOS_CLIENTES_SUCESSO,
  payload: data,
});

export const listaProdutosFailure = (data) => ({
  type: Types.LISTAGEM_PRODUTOS_CLIENTES_FAILURE,
  payload: data,
});

export const uploadeDocumentoRequest = (data) => ({
  type: Types.UPLOAD_DOCUMENTO_CLIENTE,
  payload: data,
});

export const updateProgressDocumento = () => ({
  type: Types.PROGRESS_DOCUMENTO_CLIENTE
});

export const updateProgressDocumentoSucesso = () => ({
  type: Types.PROGRESS_DOCUMENTO_CLIENTE_SUCESSO
});

export const updateProgressDocumentoFalha = () => ({
  type: Types.PROGRESS_DOCUMENTO_CLIENTE_FALHA
});

export const documentosClienteRequest = (data) => ({
  type: Types.RETORNA_DOCUMENTO_CLIENTE,
  payload: data,
});

export const listagemDocumentosCliente = (data) => ({
  type: Types.LISTAGEM_DOCUMENTO_CLIENTE,
  payload: data,
});
