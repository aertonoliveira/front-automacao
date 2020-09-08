import * as Types from './types';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(store = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.AUTH_LOGIN:
      return {
        ...store,
        loading: true,
      };

    case Types.AUTH_LOGIN_SUCCESS:
      return {
        ...store,
        loading: false,
        signed: true,
        token: action.payload,
      };

    case Types.AUTH_LOGIN_FAILURE:
      return { ...store, loading: false };

    case Types.AUTH_LOGOUT:
      return {
        ...store,
        loading: false,
        signed: false,
        token: null,
      };

    default:
      return store;
  }
}
