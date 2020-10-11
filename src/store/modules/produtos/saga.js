import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import * as Actions from './actions';
import * as Types from './types';
import _ from 'lodash';

import { toast } from 'react-toastify';

function* cadastroProduto(action) {
  try {
    const response = yield call(api.post, '/produto', action.payload);

    yield call(listagemProdutos);
    toast.success('Produto cadastrado com sucesso!');
    yield put(Actions.cadastroProdutoSuccess(response.data));
  } catch (error) {
    toast.success('Ocorreu um erro ao tentar cadastrar o produto!');
    yield put(Actions.cadastroProdutoFailure());
  }
}

function* listagemProdutos(action) {
  try {
    
    const data = action.payload;
    console.log(data)
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
    const response = yield call(api.get, '/produto?page=' + data.numeroPagina+url);

    yield put(Actions.listagemProdutosSuccess(response.data));
  } catch (error) {
    yield put(Actions.listagemProdutosFailure());
  }
}

function* alterarStatusProduto(action) {
  try {
    const id = action.payload;

    const response = yield call(api.put, '/produto/'+id);

    yield put(Actions.alterarStatusProdutoSuccess(response.data));

    if (_.has(response.data, 'success')) {
      toast.success(response.data.success);
      yield call(Actions.listagemProdutosRequest);
    }
  } catch (error) {
    yield put(Actions.alterarStatusProdutoFailure(error));
    toast.error('Ocorreu um erro ao tentar alterar o status do cliente!');
  }
}

export default all([
  takeLatest(Types.CADASTRO_PRODUTO, cadastroProduto),
  takeLatest(Types.LISTAGEM_PRODUTOS, listagemProdutos),
  takeLatest(Types.ALTERAR_STATUS_PRODUTO, alterarStatusProduto),
]);
