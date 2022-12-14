/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from '../../hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';

import { loginRequest } from '../../store/modules/auth/actions';
import { Form } from 'reactstrap';

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

  const handleLogin = (e) => {
    console.log(e);
    dispatch(loginRequest(e.email, e.password));
  };

  return (
    <>
      <div className="ContainerImagem">
        <img
          width="250"
          height="250"
          src={require('../../assets/images/logo-full.png')}
          alt="Carregando..."
        />
      </div>
      <h1 className="mb-0">Login</h1>
      <p>Informe seu e-mail e senha para acessar o painel administrativo</p>
      <div id="pills-tabContent-1" className="tab-content mt-0">
        <Form className="mt-4" onSubmit={handleSubmit(handleLogin)}>
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

          <div className={'button-alignment'}>
            <button
              type="submit"
              className="btn btn-primary float-right"
              disabled={isLoading ? true : false}
            >
              {isLoading ? 'Carregando...' : 'Entrar'}
            </button>

            <span>Ou</span>
            <Link to="/cadastro-colaborador">
              <button type="submit" className="btn btn-primary">
                Cadastrar
              </button>
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
