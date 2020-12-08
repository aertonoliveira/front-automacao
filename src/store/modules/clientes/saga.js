import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import * as Actions from './actions';
import * as Types from './types';

import { toast } from 'react-toastify';
import _ from 'lodash';

function* cadastroCliente(action) {
  try {
    const data = action.payload;

    const response = yield call(api.post, '/cliente', data);

    toast.success('Cliente cadastrado com sucesso!');
    yield put(Actions.cadastroClienteSuccess(response.data));
  } catch (error) {
    toast.error('Ocorreu um erro ao tentar cadastrar o cliente!');
    yield put(Actions.cadastroClienteFailure());
  }
}

function* listagemCliente(action) {
  try {
    const data = action.payload;

    const response = yield call(
      api.get,
      '/cliente/' + data.type + '?page=' + data.page
    );

    yield put(Actions.listagemClienteSuccess(response.data));
  } catch (error) {
    yield put(Actions.listagemClienteFailure());
  }
}

function* alterarStatusCliente(action) {
  try {
    const user_id = action.payload;

    const response = yield call(api.post, '/ativa_cliente', {
      user_id,
    });

    yield put(Actions.alterarStatusClienteSuccess(response.data));

    if (_.has(response.data, 'success')) {
      toast.success(response.data.success);
      yield call(Actions.listagemClienteRequest);
    }
  } catch (error) {
    yield put(Actions.alterarStatusClienteFailure(error));
    toast.error('Ocorreu um erro ao tentar alterar o status do cliente!');
  }
}

function* listarProdutosCliente(action) {
  try {
    const data = action.payload;

    const response = yield call(
      api.get,
      '/cliente/buscarid/' + data.clienteId
    );
    yield put(Actions.listaProdutosSucesso(response.data));
  } catch (error) {
    yield put(Actions.listaProdutosFailure(error));
  }
}

function* uploadDocumentoCliente(action) {
  try {
    yield put(Actions.updateProgressDocumento());

    // const headers = {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    //     'Content-Type': 'multipart/form-data'
    //   }
    // };

    const data = action.payload;

    const response = yield call(
      api.post,
      'cliente/documentos',
      data
      );
    toast.success('Documentos enviados com sucesso!');
    yield put(Actions.updateProgressDocumentoSucesso());
  } catch (error) {
    toast.error('Ocorreu uma falha ao tentar cadastrar o documento!');
    yield put(Actions.updateProgressDocumentoFalha());
  }
}

function* listaDocumentoCliente(action) {
  try {
    const data = action.payload;
    const response = yield call(
      api.get,
      'cliente/documentos/' + data.clienteId
    );
    yield put(Actions.listagemDocumentosCliente(response.data));
  } catch (error) {
    toast.error('Ocorreu uma falha ao tentar verificar os documentos do cliente.');
  }
}

export default all([
  takeLatest(Types.CADASTRO_CLIENTE, cadastroCliente),
  takeLatest(Types.LISTAGEM_CLIENTES, listagemCliente),
  takeLatest(Types.ALTERAR_STATUS_CLIENTE, alterarStatusCliente),
  takeLatest(Types.LISTAGEM_PRODUTOS_CLIENTES, listarProdutosCliente),
  takeLatest(Types.UPLOAD_DOCUMENTO_CLIENTE, uploadDocumentoCliente),
  takeLatest(Types.RETORNA_DOCUMENTO_CLIENTE, listaDocumentoCliente),
]);
