import * as Types from './types';

const INITIAL_STATE = {
  profile: null,
};

export default function user(store = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.AUTH_LOGIN_SUCCESS:
      return {
        ...store,
        profile: action.payload.data,
      };

    default:
      return store;
  }
}
