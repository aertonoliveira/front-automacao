import * as Types from './types';

const INITIAL_STATE = {
  data: null,
  loading: false,
  listagemClientes: null,
  alterarStatus: null,
};

console.log(INITIAL_STATE);
export default function cliente(store = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LISTAGEM_EXTRATOS:
      return {
        ...store,
        loading: true,
      };

    case Types.LISTAGEM_EXTRATOS_SUCCESS:
      return {
        ...store,
        loading: false,
        listagemExtratos: action.payload,
      };

    case Types.LISTAGEM_EXTRATOS_FAILURE:
      return { ...store, loading: false };

    default:
      return store;
  }
}
