import * as Types from './types';

const INITIAL_STATE = {
  data: null,
  loading: false,
  listagemClientes: null,
  alterarStatus: null,
  progress: false,
  documentosCliente: false
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

    case Types.ALTERAR_STATUS_CLIENTE:
      return {
        ...store,
        loading: true,
      };
    case Types.LISTAGEM_PRODUTOS_CLIENTES:
      return {
        ...store,
        loading: false,
      };
    case Types.LISTAGEM_PRODUTOS_CLIENTES_SUCESSO:
      return {
        ...store,
        loading: false,
        listagemProdutosCliente: action.payload,
      };
    case Types.LISTAGEM_PRODUTOS_CLIENTES_FAILURE:
      return {
        ...store,
        loading: false
    };
    case Types.ALTERAR_STATUS_CLIENTE_SUCCESS:
      return {
        ...store,
        loading: false,
        alterarStatus: action.payload,
      };

    case Types.ALTERAR_STATUS_CLIENTE_FAILURE:
      return { ...store, loading: false };

    case Types.UPLOAD_DOCUMENTO_CLIENTE:
      return {
        ...store,
        loading: false,
      };
    case Types.PROGRESS_DOCUMENTO_CLIENTE:
      return {
        ...store,
        progress: true
      };
    case Types.PROGRESS_DOCUMENTO_CLIENTE_SUCESSO:
      return {
        ...store,
        progress: false
      };
    case Types.PROGRESS_DOCUMENTO_CLIENTE_FALHA:
      return {
        ...store,
        progress: false
      };
    case Types.LISTAGEM_DOCUMENTO_CLIENTE:
      return {
        ...store,
        documentosCliente: action.payload
      };
    case Types.RETORNA_DOCUMENTO_CLIENTE:
      return {
        ...store,
      };
    default:
      return store;
  }
}
