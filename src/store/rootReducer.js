import { combineReducers } from 'redux';

import auth from './modules/auth/reducer';
import user from './modules/user/reducer';
import cliente from './modules/clientes/reducer';
import produto from './modules/produtos/reducer';
import contaBancaria from './modules/contaBancaria/reducer';

export default combineReducers({
  auth,
  user,
  cliente,
  produto,
  contaBancaria,
});
