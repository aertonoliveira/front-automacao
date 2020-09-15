/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from '../../hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';

import { loginRequest } from '../../store/modules/auth/actions';

const NewPassword = () => {
  // Validação
  let validationSchema = useMemo(
    () =>
      yup.object({
        password: yup
          .string()
          .min(4, 'Sua senha deve ter pelo menos 4 caracteres')
          .required('Por favor, informe sua senha'),
        confirm_password: yup
          .string()
          .min(4, 'Sua senha deve ter pelo menos 4 caracteres')
          .required('Por favor, informe sua senha')
          .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
      }),
    []
  );

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, errors } = useForm({ resolver });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);

  const { token } = useParams();
  const handleNewPassword = ({ password, confirm_password }) => {
    // dispatch(newPasswordRequest(token, password, confirm_password));
  };

  return (
    <>
      <h1 className="mb-0">Nova Senha</h1>
      <p>Informe as senhas para prosseguir</p>
      <div id="pills-tabContent-1" className="tab-content mt-0">
        <form
          name="form"
          className="mt-4"
          onSubmit={handleSubmit(handleNewPassword)}
        >
          <div className={'form-group ' + (errors.password ? 'has-error' : '')}>
            <label htmlFor="password">Senha</label>
            <input
              className="form-control mb-0"
              type="password"
              name="password"
              ref={register}
            />
            {errors.password && (
              <div className="help-block">{errors.password.message}</div>
            )}
          </div>
          <div
            className={
              'form-group ' + (errors.confirm_password ? 'has-error' : '')
            }
          >
            <label htmlFor="password">Senha</label>
            <input
              className="form-control mb-0"
              type="password"
              name="confirm_password"
              ref={register}
            />
            {errors.confirm_password && (
              <div className="help-block">
                {errors.confirm_password.message}
              </div>
            )}
          </div>
          <div className="d-inline-block w-100">
            <button
              type="submit"
              className="btn btn-primary float-right"
              disabled={isLoading ? true : false}
            >
              {isLoading ? 'Carregando...' : 'Entrar'}
            </button>
          </div>
          {/* <div className="sign-info">
            <span className="dark-color d-inline-block line-height-2">
              Não tem uma conta?
              <Link to="/register" className="btn btn-link">
                Criar conta
              </Link>
            </span>
          </div> */}
        </form>
      </div>
    </>
  );
};

export default NewPassword;
