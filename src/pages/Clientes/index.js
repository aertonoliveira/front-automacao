/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from '../../hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, CardTitle, CardBody, Form } from 'reactstrap';
import Dropdown from '../../components/custom/dropdown';

import { listagemClienteRequest } from '../../store/modules/clientes/actions';

const Clientes = () => {
  // Validação
  let validationSchema = useMemo(
    () =>
      yup.object({
        type: yup.string().required('Por favor, informe seu nome'),
      }),
    []
  );

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, errors } = useForm({ resolver });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.cliente.loading);
  const listagem = useSelector((state) => state.cliente.listagemClientes);

  const listagemClientes = (data) => {
    dispatch(listagemClienteRequest(data));
  };

  useEffect(() => {
    const data = {
      type: 'Analista Senior',
      page: 1,
    };
    dispatch(listagemClienteRequest(data));
  }, [dispatch]);

  return (
    <>
      <div className="row">
        <Col sm={12} lg={12}>
          <Card className={'iq-card'}>
            <div className={'iq-card-header d-flex justify-content-between'}>
              <CardTitle className={'card-title'}>
                <h4>Listagem de clientes</h4>
              </CardTitle>

              <Link
                className="btn btn-primary float-right"
                to="/cadastro-clientes"
              >
                Cadastrar
              </Link>
            </div>
            <Form onSubmit={handleSubmit(listagemClientes)}>
              <CardBody className={'iq-card-body'}>
                <Row>
                  <Col sm={12} lg={4}>
                    <select
                      className="form-control mb-3"
                      name="type"
                      ref={register}
                    >
                      <option defaultValue="Analista Senior">
                        Analista Senior
                      </option>
                      <option defaultValue="Gestor de analista">
                        Gestor de analista
                      </option>
                      <option defaultValue="Analista pleno">
                        Analista pleno
                      </option>
                      <option defaultValue="Cliente">Cliente</option>
                      <option defaultValue="Parceiro">Parceiro</option>
                      <option defaultValue="Trader">Trader</option>
                    </select>
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
                    {listagem == null ? 'chegou' : 'não chegou'}
                    <table className="table">
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
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {listagem &&
                          listagem.data.map((cliente, index) => (
                            <tr key={index}>
                              <th scope="row">{cliente.id}</th>
                              <td>{cliente.name}</td>
                              <td>{cliente.cpf}</td>
                              <td>{cliente.email}</td>
                              <td>{cliente.celular}</td>
                              <td>{cliente.ativo}</td>
                              <td>{cliente.parent.name}</td>
                              <td>{cliente.saldo_conta.valor}</td>
                              <td>
                                <Dropdown clienteId={cliente.id} options={[]} />
                              </td>
                            </tr>
                          ))}
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
