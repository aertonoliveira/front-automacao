import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import * as Actions from './actions';
import * as Types from './types';

function* login({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, '/auth/login', { email, password });

    const { token } = response.data;
    api.defaults.headers.Authorization = `Beader ${token}`;

    yield put(Actions.loginSuccess(token));

    window.location.href = '/dashboard';
  } catch (error) {
    yield put(Actions.loginFailure(error));
  }
}

export function logout() {
  window.location.href = '/auth/login';
}

export default all([
  takeLatest(Types.AUTH_LOGIN, login),
  takeLatest(Types.AUTH_LOGOUT, logout),
]);
