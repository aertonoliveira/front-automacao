import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import * as Actions from './actions';
import * as Types from './types';
import { removeCurrencyMask } from '../../../utils/Functions';

function* pagarRelatorioRequest(action) {
  try {
    const data = action.payload;

    const response = yield call(api.post, '/cliente/', data);

    yield put(Actions.pagarRelatorioSuccess(response.data));
  } catch (error) {
    yield put(Actions.pagarRelatorioFailure());
  }
}

function* listRelatorioRequestPleSen(action) {
  try {
    const data = action.payload;
    let url = '';
    if (data.data !== '' && typeof(data.data) != 'undefined') {
      url += '&data=' + data.data;
    }
    console.log(data)
    if (data.numero_contrato !== '' && typeof(data.numero_contrato) != 'undefined') {
      url += '&numero_contrato=' + data.numero_contrato;
    }
    if (data.tipo_contrato !== '' && typeof(data.tipo_contrato) != 'undefined') {
      url += '&tipo_contrato=' + data.tipo_contrato;
    }
    if (data.cpf != '' && typeof(data.cpf) != 'undefined') {
      url += '&cpf=' + removeCurrencyMask(data.cpf);
    }

    const response = yield call(api.get, '/relatorio/mensal?page=' + data.numeroPagina+url);
    yield put(Actions.listRelatorioRequestPlSeSuccess(response.data));

  } catch (error) {
    yield put(Actions.listRelatorioRequestPlSeFailure());
  }
}

function* listRelatorioRequest(action) {
  try {
    const data = action.payload;
    let url = '';
    if(data.data != '' && typeof(data.data) != 'undefined'){
      url += '&data='+data.data;
    }
    if(data.cpf != ''  && typeof(data.cpf) != 'undefined'){
      url += '&cpf='+data.cpf;
    }
    if(data.numero_contrato != '' && typeof(data.numero_contrato) != 'undefined'){
      url += '&numero_contrato='+data.numero_contrato;
    }
    if(data.tipo_contrato != '' && typeof(data.tipo_contrato) != 'undefined'){
      url += '&tipo_contrato='+data.tipo_contrato;
    }

    const response = yield call(api.get, '/relatorio/mensal?page='+ data.numeroPagina+url);

    yield put(Actions.listRelatorioSuccess(response.data));
  } catch (error) {
    yield put(Actions.listRelatorioFailure());
  }
}


export default all([
  takeLatest(Types.PAGAR_RELATORIO, pagarRelatorioRequest),
  takeLatest(Types.LIST_RELATORIO, listRelatorioRequest),
  takeLatest(Types.LIST_RELATORIO_PLENO_SENIOR, listRelatorioRequestPleSen),

]);
