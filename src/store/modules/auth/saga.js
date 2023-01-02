import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import * as Actions from './actions';
import * as Types from './types';

import { toast } from 'react-toastify';
import _ from 'lodash';

function* login({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, '/auth/login', { email, password });

    const { token, data } = response.data;

    yield put(Actions.loginSuccess(token, data));
    if (data.ativo) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      yield call(history.push, '/dashboard');
    } else {
      // yield call(history.push, '/pagamento');

      console.table('bateu no usuario inválido');
    }
  } catch (error) {
    // console.log(error.response)
    toast.error('Ocorreu um erro ao tentar realizar o login!');
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
      toast.success(error.response.data.error.email[0]);
    }
    yield put(Actions.recuperarSenhaFailure(error));
  }
}

function* logout() {
  yield call(history.push, '/');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(Types.AUTH_LOGIN, login),
  takeLatest(Types.AUTH_RECUPERAR_SENHA_REQUEST, recuperarSenha),
  takeLatest(Types.AUTH_LOGOUT, logout),
]);
