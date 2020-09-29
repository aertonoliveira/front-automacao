import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import * as Actions from './actions';
import * as Types from './types';

function* cadastroContaBancaria(action) {
  try {
    const data = action.payload;

    const response = yield call(api.post, '/cliente', data);

    yield put(Actions.contaBancariaSuccess(response.data));
  } catch (error) {
    yield put(Actions.contaBancariaFailure());
  }
}

function* buscarBancos(action) {
  try {
    const data = action.payload;

    const response = yield call(api.get, '/bancos', data);

    yield put(Actions.buscarBancosSuccess(response.data));
  } catch (error) {
    yield put(Actions.buscarBancosFailure());
  }
}


export default all([
  takeLatest(Types.CONTA_BANCARIA, cadastroContaBancaria),
  takeLatest(Types.BUSCAR_BANCOS, buscarBancos),

]);
