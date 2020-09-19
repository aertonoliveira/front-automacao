/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from '../../hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Card,
  div,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';

import { cadastroClienteRequest } from '../../store/modules/clientes/actions';

const Clientes = () => {
  // Validação
  let validationSchema = useMemo(
    () =>
      yup.object({
        nome: yup.string().required('Por favor, informe seu nome'),





      }),
    []
  );

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, errors } = useForm({ resolver });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.cliente.loading);

  const cadastrarCliente = (data) => {
    console.log(data);
    dispatch(cadastroClienteRequest(data));
  };

  return (
    <>
      <div className="row">
        <Col sm={12} lg={12}>
          <Card className={'iq-card'}>
            <div className={'iq-card-header d-flex justify-content-between'}>
              <CardTitle className={'card-title'}>
                <h4>Listagem de clientes</h4>
              </CardTitle>

              <Link className="btn btn-primary float-right"  to="/cadastro-clientes">
                  Cadastrar
              </Link>
            </div>
            <Form onSubmit={handleSubmit(cadastrarCliente)}>
              <CardBody className={'iq-card-body'}>
                <Row>
                  <Col sm={12} lg={4}>
                    <div
                      className={
                        'form-group ' + (errors.nome ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="nome">Nome Completo</Label>
                      <input
                        type="text"
                        placeholder="Nome completo"
                        name="nome"
                        className="form-control"
                        ref={register}
                      />
                      {errors.nome && (
                        <div className="help-block">{errors.nome.message}</div>
                      )}
                    </div>
                  </Col>


                <Col sm={12} lg={4} className="mt-4">
                 <button
                  type="submit"
                  color="primary"
                  className="btn btn-primary mt-3"
                >
                  {isLoading ? 'Carregando...' : 'Pesquisar'}
                </button>

                  </Col>
                </Row>





                <Row>
                  <Col sm={12}>
                  <table responsive className="table">
   <thead>
      <tr>
         <th scope="col">ID</th>
         <th scope="col">Nome</th>
         <th scope="col">CPF</th>
         <th scope="col">Email</th>
         <th scope="col">Celular</th>
         <th scope="col">Status</th>
         <th scope="col">Cargo</th>
         <th scope="col">Saldo</th>
         <th scope="col">Gerente</th>
         <th scope="col">Ação</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
   </tbody>
</table>


                  </Col>
                </Row>

              </CardBody>
            </Form>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default Clientes;
