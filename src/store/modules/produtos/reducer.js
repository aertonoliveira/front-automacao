import * as Types from './types';

const INITIAL_STATE = {
  data: null,
  loading: false,
  listagemProdutos: null,
};

export default function produto(store = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CADASTRO_PRODUTO:
      return {
        ...store,
        loading: true,
      };

    case Types.CADASTRO_PRODUTO_SUCCESS:
      return {
        ...store,
        loading: false,
        data: action.payload,
      };

    case Types.CADASTRO_PRODUTO_FAILURE:
      return { ...store, loading: false };

    case Types.LISTAGEM_PRODUTOS:
      return {
        ...store,
        loading: true,
      };

    case Types.LISTAGEM_PRODUTOS_SUCCESS:
      return {
        ...store,
        loading: false,
        listagemProdutos: action.payload,
      };

    case Types.LISTAGEM_PRODUTOS_FAILURE:
      return { ...store, loading: false };

    default:
      return store;
  }
}
