import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import * as Actions from './actions';
import * as Types from './types';

import { toast } from 'react-toastify';
import _ from 'lodash';

function* listagemExtratos(action) {
  try {

    const data = action.payload;
    const response = yield call(
      api.get,
      '/cliente/buscarid/' + data.userProfile.id + '?page=' + data.page
    );

    yield put(Actions.listagemExtratoSuccess(response.data));
  } catch (error) {
    yield put(Actions.listagemExtratoFailure());
  }
}

export default all([
  takeLatest(Types.LISTAGEM_EXTRATOS, listagemExtratos),
]);
