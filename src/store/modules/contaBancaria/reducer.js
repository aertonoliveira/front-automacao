import * as Types from './types';

const INITIAL_STATE = {
  data: null,
  loading: false,
  bancos:null,
};

export default function contaBancaria(store = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CONTA_BANCARIA:
      return {
        ...store,
        loading: true,
      };

    case Types.CONTA_BANCARIA_SUCCESS:
      return {
        ...store,
        loading: false,
        data: action.payload,
      };

    case Types.CONTA_BANCARIA_FAILURE:
      return { ...store, loading: false };


      case Types.BUSCAR_BANCOS:
        return {
          ...store,
        };

      case Types.BUSCAR_BANCOS_SUCCESS:
        return {
          ...store,
          bancos: action.payload,
        };

      case Types.BUSCAR_BANCOS_FAILURE:
        return { ...store };

      default:
      return store;

}
}
