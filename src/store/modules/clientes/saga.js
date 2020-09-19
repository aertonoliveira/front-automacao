import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import * as Actions from './actions';
import * as Types from './types';

function* cadastroCliente(action) {
  try {
    const data = action.payload;

    const response = yield call(api.post, '/cliente', data);

    yield put(Actions.cadastroClienteSuccess(response.data));
  } catch (error) {
    yield put(Actions.cadastroClienteFailure());
  }
}

function* listagemCliente(action) {
  try {
    const data = action.payload;

    const response = yield call(api.get, '/cliente/'+data.type+"?page="+data.page);
    
    yield put(Actions.listagemClienteSuccess(response.data));
  } catch (error) {
    yield put(Actions.listagemClienteFailure());
  }
}

export default all([
  takeLatest(Types.CADASTRO_CLIENTE, cadastroCliente),
  takeLatest(Types.LISTAGEM_CLIENTES, listagemCliente)
]);
