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

export default all([takeLatest(Types.CADASTRO_CLIENTE, cadastroCliente)]);
