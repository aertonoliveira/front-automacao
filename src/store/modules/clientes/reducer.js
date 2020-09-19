import * as Types from './types';

const INITIAL_STATE = {
  data: null,
  loading: false,
  listagemClientes:null,
};

export default function cliente(store = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CADASTRO_CLIENTE:
      return {
        ...store,
        loading: true,
      };

    case Types.CADASTRO_CLIENTE_SUCCESS:
      return {
        ...store,
        loading: false,
        data: action.payload,
      };

    case Types.CADASTRO_CLIENTE_FAILURE:
      return { ...store, loading: false };

    case Types.LISTAGEM_CLIENTES:
      return {
        ...store,
        loading: true,
      };

    case Types.LISTAGEM_CLIENTES_SUCCESS:
      return {
        ...store,
        loading: false,
        listagemClientes: action.payload,
      };

    case Types.LISTAGEM_CLIENTES_FAILURE:
      return { ...store, loading: false };  

    default:
      return store;
  }
}
