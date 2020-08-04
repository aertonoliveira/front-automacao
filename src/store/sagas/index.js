import { all, takeLatest } from 'redux-saga/effects';

import{ singIn1 } from './auth';
import { AuthTypes } from '../ducks/auth';


export default function* rootSaga() {
    return yield all([takeLatest(AuthTypes.SING_IN_REQUEST, singIn1)]);
}