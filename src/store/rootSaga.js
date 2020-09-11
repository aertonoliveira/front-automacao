import { all } from 'redux-saga/effects';
import auth from './modules/auth/saga';
import user from './modules/auth/saga';

export default function* rootSaga() {
  return yield all([auth, user]);
}
