import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <div>
        <h1 className="mb-0">Recuperar senha</h1>
        <p>
          Informe seu e-mail e nos iremos te enviar as instruções para recuperar
          a senha.
        </p>
        <form className="mt-4">
          <FormGroup>
            <Label for="exampleInputEmail1">E-mail</Label>
            <Input
              type="email"
              className="mb-0"
              id="exampleInputEmail1"
              placeholder="E-mail"
            />
          </FormGroup>
          <div className="d-inline-block w-100">
            <Link to="/" className="float-left btn btn-primary">
              Voltar
            </Link>
            <button className="float-right btn btn-primary">
              Recuperar senha
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Index;
