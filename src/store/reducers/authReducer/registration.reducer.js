import { userConstants } from '../../auth/authTypes';

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {
        users: action.value
      };
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}