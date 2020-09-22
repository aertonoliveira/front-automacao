import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import * as Actions from './actions';
import * as Types from './types';

function* cadastroProduto(action) {
  try {
    const response = yield call(api.post, '/produto', action.payload);

    yield put(Actions.cadastroProdutoSuccess(response.data));
  } catch (error) {
    yield put(Actions.cadastroProdutoFailure());
  }
}

function* listagemProdutos(action) {
  try {
    const response = yield call(api.get, '/produto');

    yield put(Actions.listagemProdutosSuccess(response.data));
  } catch (error) {
    yield put(Actions.listagemProdutosFailure());
  }
}

export default all([
  takeLatest(Types.CADASTRO_PRODUTO, cadastroProduto),
  takeLatest(Types.LISTAGEM_PRODUTOS, listagemProdutos),
]);
