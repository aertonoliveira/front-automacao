import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import { history } from "../index";
import {api} from "../../services/api";
import store from "../../store";
import errorApi  from "../../utils/errorApi";

import {
    AUTH_LOGIN,
    AUTH_LOGIN_FUNCIONARIO,
    AUTH_FIREBASE_READY,
    AUTH_PASSWORD_RESET,
    AUTH_PASSWORD_RECOVER
} from "./authTypes";

import {
    loginFailure,
    loginSuccess,
    loginFuncionarioSuccess,
    loginFuncionarioFailure,
    changed,
    reset,
    setError,
    isLoading
} from "./authActions";

import _ from "lodash";



function* login(action) {
    try {
        console.log(action.payload)
       const response = yield api.post("/auth/login", action.payload);

        yield call(setToken);
        // yield put(estabelecimentoEdit(info));
        yield toast.success("seja bem vindo");
        yield put(loginSuccess(response.data));
    } catch (error) {
        yield toast.error(error.response.data.error);
        yield put(loginFailure(error));
    }
}


function* passwordRecover(action) {
    try {
        const {
            payload: { cnpj }
        } = action;

        yield put(isLoading(true));
        yield call(api.post, "/api/v1/auth/parceiro/recover-password", {
            cnpj: cnpj.replace(/\D/g, "")
        });

        yield toast.info("E-mail de alteração de senha enviado!");
    } catch (error) {
        yield toast.error(error.response.data.message);
        yield put(setError(true));
    } finally {
        yield put(isLoading(false));
    }
}

function* passwordReset(action) {
    try {
        const {
            payload: { token, cnpj, senha, confirmarSenha }
        } = action;

        yield put(isLoading(true));

        yield call(
            api.post,
            "/api/v1/auth/parceiro/reset-password",
            {
                cnpj: cnpj.replace(/\D/g, ""),
                senha,
                confirmarSenha
            },
            {
                headers: { Authorization: "Bearer " + token }
            }
        );

        yield toast.info("Senha alterada com sucesso!");
        yield call(history.push, "/login");
    } catch (error) {
        yield toast.info(error.response.data.message);
        yield put(setError(true));
    } finally {
        yield put(isLoading(false));
    }
}

function setToken() {
    const token = store.getState().auth.token;
    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export const authSaga = [
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest(AUTH_LOGIN, login),
    takeLatest(AUTH_PASSWORD_RECOVER, passwordRecover),
    takeLatest(AUTH_PASSWORD_RESET, passwordReset)
];
