import * as Types from './types';

export const contaBancariaRequest = (data) => ({
  type: Types.CONTA_BANCARIA,
  payload: data,
});

export const contaBancariaSuccess = (data) => ({
  type: Types.CONTA_BANCARIA_SUCCESS,
  payload: data,
});

export const contaBancariaFailure = (data) => ({
  type: Types.CONTA_BANCARIA_FAILURE,
  payload: data,
});

export const buscarBancosRequest = (data) => ({
  type: Types.BUSCAR_BANCOS,
  payload: data,
});

export const buscarBancosSuccess = (data) => ({
  type: Types.BUSCAR_BANCOS_SUCCESS,
  payload: data,
});

export const buscarBancosFailure = (data) => ({
  type: Types.BUSCAR_BANCOS_FAILURE,
  payload: data,
});
