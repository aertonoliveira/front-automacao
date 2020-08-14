import {
    AUTH_LOADING,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FUNCIONARIO,
    AUTH_LOGIN_FUNCIONARIO_SUCCESS,
    AUTH_LOGIN_FUNCIONARIO_FAILURE,
    AUTH_SET_ERROR,
    AUTH_CHANGED,
    AUTH_RESET,
    AUTH_FIREBASE_READY,
    AUTH_PASSWORD_RESET,
    AUTH_CREATE_USER,
    AUTH_PASSWORD_RECOVER,
    AUTH_CHANGE_TOKEN
} from "./authTypes";

export const login = (email, password) => ({
    type: AUTH_LOGIN,
    payload: {
        email,
        password
    }
});

export const loginFuncionario = (email, password) => ({
    type: AUTH_LOGIN_FUNCIONARIO,
    payload: {
        email,
        password
    }
});

export const isLoading = isLoading => ({
    type: AUTH_LOADING,
    payload: {
        isLoading
    }
});

export const loginFailure = error => ({
    type: AUTH_LOGIN_FAILURE,
    payload: {
        error
    }
});

export const loginFuncionarioFailure = error => ({
    type: AUTH_LOGIN_FUNCIONARIO_FAILURE,
    payload: {
        error
    }
});

export const loginFuncionarioSuccess = (userAuth, scope, email) => ({
    type: AUTH_LOGIN_FUNCIONARIO_SUCCESS,
    payload: {
        userAuth,
        scope,
        email
    }
});

export const loginSuccess = (userAuth, scope, cnpj) => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: {
        userAuth,
        scope,
        cnpj
    }
});

export const setError = error => ({
    type: AUTH_SET_ERROR,
    payload: {
        error
    }
});

export const reset = () => ({
    type: AUTH_RESET
});

export const changed = (user, scope, cnpj) => ({
    type: AUTH_CHANGED,
    payload: {
        user,
        scope,
        cnpj
    }
});

export const firebaseReady = user => ({
    type: AUTH_FIREBASE_READY,
    payload: {
        user
    }
});

export const passwordRecover = cnpj => ({
    type: AUTH_PASSWORD_RECOVER,
    payload: {
        cnpj
    }
});

export const passwordReset = (payload) => ({
    type: AUTH_PASSWORD_RESET,
    payload
});

export const createUser = (email, password) => ({
    type: AUTH_CREATE_USER,
    payload: {
        email,
        password
    }
});

export const changeToken = (data) => ({
    type: AUTH_CHANGE_TOKEN,
    payload: data
});