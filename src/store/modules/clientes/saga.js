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

export default all([
  takeLatest(Types.CADASTRO_CLIENTE, cadastroCliente),
  takeLatest(Types.LISTAGEM_CLIENTES, listagemCliente),
  takeLatest(Types.ALTERAR_STATUS_CLIENTE, alterarStatusCliente),
]);
