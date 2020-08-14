import {
    AUTH_LOGIN,
    AUTH_LOADING,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FUNCIONARIO,
    AUTH_LOGIN_FUNCIONARIO_SUCCESS,
    AUTH_LOGIN_FUNCIONARIO_FAILURE,
    AUTH_SET_ERROR,
    AUTH_RESET,
    AUTH_CHANGED,
    AUTH_CHANGE_TOKEN
} from "./authTypes";

const initialState = {
    error: false,
    isLoading: false,
    isFirebaseReady: false,
    user: null,
    scope: null,
    token: null
};

export const authReducer = (store = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...store,
                isLoading: true
            };

        case AUTH_LOGIN_SUCCESS:
            return {
                ...store,
                isLoading: false,
                error: false,
                user: action.payload.userAuth,
                scope: action.payload.scope,
                cnpj: action.payload.cnpj
            };

        case AUTH_LOGIN_FAILURE:
            return { ...store, isLoading: false, error: true };

        case AUTH_LOGIN_FUNCIONARIO:
            return {
                ...store,
                isLoading: true
            };

        case AUTH_LOGIN_FUNCIONARIO_SUCCESS:
            return {
                ...store,
                isLoading: false,
                error: false,
                user: action.payload.userAuth,
                scope: action.payload.scope,
                email: action.payload.email
            };

        case AUTH_LOGIN_FUNCIONARIO_FAILURE:
            return { ...store, isLoading: false, error: true };

        case AUTH_LOADING:
            return { ...store, isLoading: action.payload.isLoading };

        case AUTH_SET_ERROR:
            return { ...store, error: action.payload.error };

        case AUTH_RESET:
            return { ...initialState, isFirebaseReady: true };

        case AUTH_CHANGED:
            return {
                ...store,
                isFirebaseReady: true,
                user: action.payload.user,
                scope: action.payload.scope,
                cnpj: action.payload.cnpj,
            };

        case AUTH_CHANGE_TOKEN:
            return {
                ...store,
                token: action.payload
            }

        default:
            return store;
    }
};
