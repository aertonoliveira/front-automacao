import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { index } from '../../../config/pluginsInit';
import { Button } from 'reactstrap';

import { useSelector } from 'react-redux';

const Index = (props) => {
  const email = useSelector((state) => state.auth.email);

  useEffect(() => {
    index();

    console.log('o email carregado: ', email);
  });

  return (
    <>
      <div className={'sign-in-from'}>
        <img
          src={require('../../../assets/images/login/mail.png')}
          alt="Mail Icon"
        />
        <h1 className="mt-3 mb-0">Sucesso !</h1>
        <p>
          O e-mail foi enviando para {email ? email : 'youremail@domain.com'}.
          Por favor, verifique a sua caixa de e-mail e clique no link para
          resetar a sua senha.
        </p>
        <div className={'d-inline-block w-100'}>
          <Link to="/auth/login" color={'primary'} className={'mt-3'}>
            Voltar
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
