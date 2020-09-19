/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from '../../hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';

import { loginRequest } from '../../store/modules/auth/actions';

const LoginPage = () => {
  // Validação
  let validationSchema = useMemo(
    () =>
      yup.object({
        email: yup
          .string()
          .email('Por favor, informe um endereço de e-mail válido')
          .required('Por favor, informe seu e-mail'),
        password: yup
          .string()
          .min(4, 'Sua senha deve ter pelo menos 4 caracteres')
          .required('Por favor, informe sua senha'),
      }),
    []
  );

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, errors } = useForm({ resolver });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);

  

  const handleLogin = ({ email, password }) => {
    dispatch(loginRequest(email, password));
  };

  return (
    <>
      <h1 className="mb-0">Login</h1>
      <p>Informe seu e-mail e senha para acessar o painel administrativo</p>
      <div id="pills-tabContent-1" className="tab-content mt-0">
        <form name="form" className="mt-4" onSubmit={handleSubmit(handleLogin)}>
          <div className={'form-group ' + (errors.email ? 'has-error' : '')}>
            <label htmlFor="email">E-mail</label>
            <input className="form-control mb-0" name="email" ref={register} />
            {errors.email && (
              <div className="help-block">{errors.email.message}</div>
            )}
          </div>
          <div className={'form-group ' + (errors.password ? 'has-error' : '')}>
            <label htmlFor="password">Senha</label>
            <Link to="/resetar-senha" className="float-right">
              Esqueceu sua senha?
            </Link>
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

export default LoginPage;
