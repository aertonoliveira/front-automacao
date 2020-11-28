import * as Types from './types';

const INITIAL_STATE = {
  data: null,
  loading: false,
  listRelatorios:null,
};

export default function relatorio(store = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LIST_RELATORIO:
      return {
        ...store,
        loading: true,
      };

    case Types.LIST_RELATORIO_SUCCESS:
      return {
        ...store,
        loading: false,
        listRelatorios: action.payload,
      };

    case Types.LIST_RELATORIO_FAILURE:
      return { ...store, loading: false };


      case Types.PAGAR_RELATORIO:
        return {
          ...store,
        };

      case Types.PAGAR_RELATORIO_SUCCESS:
        return {
          ...store,
          bancos: action.payload,
        };

      case Types.PAGAR_RELATORIO_FAILURE:
        return { ...store };

      default:
      return store;

}
}
