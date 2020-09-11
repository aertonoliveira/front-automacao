import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import * as Actions from './actions';
import * as Types from './types';

import _ from 'lodash';

function* login({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, '/auth/login', { email, password });

    const { token, data } = response.data;
    api.defaults.headers.Authorization = `Beader ${token}`;

    yield put(Actions.loginSuccess(token, data));

    yield call(history.push, '/dashboard');
  } catch (error) {
    yield put(Actions.loginFailure(error));
  }
}

function* recuperarSenha({ payload }) {
  try {
    yield call(api.post, '/auth/recovery', { email: payload });
    yield put(Actions.recuperarSenhaSuccess(payload));

    yield call(history.push, '/confirmar-solicitacao');
  } catch (error) {
    if (_.has(error, 'response.data.error.email[0]')) {
      console.log('Error: ', error.response.data.error.email[0]);
    }
    yield put(Actions.recuperarSenhaFailure(error));
  }
}

function* logout() {
  yield call(history.push, '/');
}

export default all([
  takeLatest(Types.AUTH_LOGIN, login),
  takeLatest(Types.AUTH_RECUPERAR_SENHA_REQUEST, recuperarSenha),
  takeLatest(Types.AUTH_LOGOUT, logout),
]);
