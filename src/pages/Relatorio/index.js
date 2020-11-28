/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from '../../hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, CardTitle, CardBody, Form, Button } from 'reactstrap';
import Dropdown from '../../components/custom/dropdown';

import {
  listagemExtratoRequest,
} from '../../store/modules/extrato/actions';
import Pagination from 'react-js-pagination';

const Extratos = () => {
  // Validação
  let validationSchema = useMemo(
    () =>
      yup.object({
        type: yup.string().required('Por favor, informe seu nome'),
      }),
    []
  );

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register } = useForm({ resolver });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cliente.loading);
  const userProfile = useSelector((state) => state.user.profile);
  const listagem = useSelector((state) => state.cliente.listagemExtratos);

  const listagemExtratos = (data) => {
    dispatch(listagemExtratoRequest(data));
  };

  useEffect(() => {

    const data = {
      type: [],
      page: 1,
      userProfile,
    };

    dispatch(listagemExtratoRequest(data));
  }, [dispatch]);

  const realizarPaginacao = (numeroPagina) => {
    dispatch(listagemExtratoRequest(numeroPagina));
  };

  // const ativarDesativarCliente = (id) => {
  //   const response = window.confirm('Você desaja alterar o status?');
  //   if (response) {
  //     dispatch(alterarStatusClienteRequest(id));
  //   }
  // };

  return (
    <>
      <div className="row">
        <Col sm="12" lg="12">
          <Card className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <CardTitle className="card-title">
                <h4>Extrato do cliente</h4>
              </CardTitle>

              <Link
                className="btn btn-primary float-right"
                to="/cadastro-clientes"
              >
                Cadastrar
              </Link>
            </div>
            <Form onSubmit={handleSubmit(listagemExtratos)}>
              {loading ? (
                <img
                  width="100"
                  height="100"
                  src={require('../../assets/images/loading.gif')}
                  alt="Carregando..."
                />
              ) : (
                <CardBody className="iq-card-body">
                  <Row className="mb-4">
                    <Col sm="12" md="6" lg="4">
                      <select
                        className="form-control"
                        name="type"
                        ref={register}
                      >
                        <option value="Analista Senior">Analista Senior</option>
                        <option value="Gestor de analista">Gestor de analista</option>
                        <option value="Analista pleno">Analista pleno</option>
                        <option value="Cliente">Cliente</option>
                        <option value="Parceiro">Parceiro</option>
                        <option value="Trader">Trader</option>
                      </select>
                    </Col>

                    <Col sm="12" md="6" lg="4">
                      <button
                        type="submit"
                        color="primary"
                        className="btn btn-primary btn-lg"
                      >
                        {loading ? 'Carregando...' : 'Pesquisar'}
                      </button>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12">
                    ['nome',  'cpf',  'status', 'mes', 'diasCalculado', 'porcentagemCalculada', 'valorApagar','numeroContrato','tipoContrato', 'acoes']
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">cpf</th>
                            <th scope="col">status</th>
                            <th scope="col">mes</th>
                            <th scope="col">diasCalculado</th>
                            <th scope="col">porcentagemCalculada</th>
                            <th scope="col">valorApagar</th>
                            <th scope="col">numeroContrato</th>
                            <th scope="col">tipoContrato</th>
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
                                <td>{cliente.roles[0].name}</td>
                                <td>{cliente.saldo_conta[0].valor}</td>
                                <td>{cliente.saldo_conta[0].valor}</td>
                                <td>
                                  <Dropdown clienteId={cliente.id} />
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                      {listagem && (
                        <Pagination
                          activePage={listagem.current_page}
                          totalItemsCount={listagem.total}
                          itemsCountPerPage={listagem.per_page}
                          onChange={(numeroPagina) =>
                            realizarPaginacao(numeroPagina)
                          }
                          itemClass="page-item"
                          linkClass="page-link"
                          firstPageText="Início"
                          lastPageText="Fim"
                        />
                      )}
                    </Col>
                  </Row>
                </CardBody>
              )}
            </Form>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default Extratos;
