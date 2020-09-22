import { all } from 'redux-saga/effects';
import auth from './modules/auth/saga';
import user from './modules/user/saga';
import cliente from './modules/clientes/saga';
import produto from './modules/produtos/saga';

export default function* rootSaga() {
  return yield all([auth, user, cliente, produto]);
}
