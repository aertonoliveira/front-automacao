/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

    return (
        <>
            <h1 className="mb-0">Cadastro</h1>
            <p>Preencha as informações abaixo para criar uma conta em nosso sistema</p>
            <div id="pills-tabContent-1" className="tab-content mt-0">
                <form name="form">
                    <div className='form-group has-error'>
                        <label htmlFor="firstName">Nome</label>
                        <input type="text" className="form-control" name="firstName" placeholder="Enter First name" />
                        <div className="help-block">O nome é obrigatório</div>
                    </div>
                    <div className='form-group has-error'>
                        <label htmlFor="lastName">Sobrenome</label>
                        <input type="text" className="form-control" name="lastName" placeholder="Enter Last Name" />
                        <div className="help-block">O sobrenome é obrigatório</div>
                    </div>
                    <div className='form-group has-error'>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter Email" />
                        <div className="help-block">O e-mail é obrigatório</div>
                    </div>
                    <div className='form-group has-error'>
                        <label htmlFor="password">Senha</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter Password" />
                        <div className="help-block">A senha é obrigatória</div>
                    </div>
                    <div className="d-inline-block w-100">
                        <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1" >Eu aceito os <a href="#">Termos e Condições</a></label>
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Cadastrar</button>
                    </div>
                    <div className="sign-info">
                        <span className="dark-color d-inline-block line-height-2">Já possui uma conta?  <Link to="/auth/login" className="btn btn-link">Log In</Link></span>
                    </div>
                </form>
            </div>
        </>
    );
}

export default RegisterPage;