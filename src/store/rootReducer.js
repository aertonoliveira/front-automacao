import { combineReducers } from 'redux';

import auth from './modules/auth/reducer';
import user from './modules/user/reducer';
import cliente from './modules/clientes/reducer';
import produto from './modules/produtos/reducer';
import contaBancaria from './modules/contaBancaria/reducer';
import extrato from './modules/extrato/reducer';
import relatorio from './modules/relatorio/reducer';

export default combineReducers({
  auth,
  user,
  cliente,
  produto,
  contaBancaria,
  relatorio,
  extrato
});
