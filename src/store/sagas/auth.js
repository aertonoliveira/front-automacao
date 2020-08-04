import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import AuthActions from '../ducks/auth';

export function* sigIn1({ email, password }) {
    try {
        const response = yield call(api.post, 'sessions', { email, password })

        localStorage.setItem('@Omni:token', response.data.token); 

     yield put(AuthActions.signIn1Success(response.data.token))   
    } catch (err) {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
  }
}