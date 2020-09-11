import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from '../../hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';

import { recuperarSenhaRequest } from '../../store/modules/auth/actions';

const ResetPassword = () => {
  // Validação
  let validationSchema = useMemo(
    () =>
      yup.object({
        email: yup
          .string()
          .email('Por favor, informe um endereço de e-mail válido')
          .required('Por favor, informe seu e-mail'),
      }),
    []
  );

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, errors } = useForm({ resolver });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);

  const handleLogin = ({ email }) => {
    dispatch(recuperarSenhaRequest(email));
  };

  return (
    <>
      <div>
        <h1 className="mb-0">Recuperar senha</h1>
        <p>
          Informe seu e-mail e nos iremos te enviar as instruções para recuperar
          a senha.
        </p>
        <form className="mt-4" onSubmit={handleSubmit(handleLogin)}>
          <div className={'form-group ' + (errors.email ? 'has-error' : '')}>
            <label htmlFor="email">E-mail</label>
            <input className="form-control mb-0" name="email" ref={register} />
            {errors.email && (
              <div className="help-block">{errors.email.message}</div>
            )}
          </div>
          <div className="d-inline-block w-100">
            <Link to="/" className="float-left btn btn-primary">
              Voltar
            </Link>
            <button
              type="submit"
              className="float-right btn btn-primary"
              disabled={isLoading ? true : false}
            >
              {isLoading ? 'Carregando...' : 'Recuperar senha'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
