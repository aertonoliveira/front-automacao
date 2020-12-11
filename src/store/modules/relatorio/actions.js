import * as Types from './types';

export const listRelatorioRequest = (data) => ({
  type: Types.LIST_RELATORIO,
  payload: data,
});

export const listRelatorioSuccess = (data) => ({
  type: Types.LIST_RELATORIO_SUCCESS,
  payload: data,
});

export const listRelatorioFailure = (data) => ({
  type: Types.LIST_RELATORIO_FAILURE,
  payload: data,
});

export const pagarRelatorioRequest = (data) => ({
  type: Types.PAGAR_RELATORIO,
  payload: data,
});

export const pagarRelatorioSuccess = (data) => ({
  type: Types.PAGAR_RELATORIO_SUCCESS,
  payload: data,
});

export const pagarRelatorioFailure = (data) => ({
  type: Types.PAGAR_RELATORIO_FAILURE,
  payload: data,
});

export const listRelatorioRequestPlSe = (data) => ({
  type: Types.LIST_RELATORIO_PLENO_SENIOR,
  payload: data,
});

export const listRelatorioRequestPlSeSuccess = (data) => ({
  type: Types.LIST_RELATORIO_PLENO_SENIOR_SUCCESS,
  payload: data,
});

export const listRelatorioRequestPlSeFailure = (data) => ({
  type: Types.LIST_RELATORIO_PLENO_SENIOR_SUCCESS,
  payload: data,
});
