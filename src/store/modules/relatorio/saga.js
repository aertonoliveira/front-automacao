import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import * as Actions from './actions';
import * as Types from './types';

function* pagarRelatorioRequest(action) {
  try {
    const data = action.payload;

    const response = yield call(api.post, '/cliente/', data);

    yield put(Actions.pagarRelatorioSuccess(response.data));
  } catch (error) {
    yield put(Actions.pagarRelatorioFailure());
  }
}

function* listRelatorioRequest(action) {
  try {
    const data = action.payload;

    const response = yield call(api.get, '/bancos', data);

    yield put(Actions.listRelatorioSuccess(response.data));
  } catch (error) {
    yield put(Actions.listRelatorioFailure());
  }
}


export default all([
  takeLatest(Types.PAGAR_RELATORIO, pagarRelatorioRequest),
  takeLatest(Types.LIST_RELATORIO, listRelatorioRequest),

]);
