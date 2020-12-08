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
  // const userProfile = useSelector((state) => state.user.profile);
  const listagem = useSelector((state) => state.extrato.listagemExtratos);
console.log(listagem)
  const listagemExtratos = (data) => {
    dispatch(listagemExtratoRequest(data));
  };

  useEffect(() => {

    const data = {
      type: [],
      page: 1,
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
                    {/* <Col sm="12" md="6" lg="4">
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
                    </Col> */}

                    {/* <Col sm="12" md="6" lg="4">
                      <button
                        type="submit"
                        color="primary"
                        className="btn btn-primary btn-lg"
                      >
                        {loading ? 'Carregando...' : 'Pesquisar'}
                      </button>
                    </Col> */}
                  </Row>
                  <Row>
                    <Col sm="12">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Número</th>
                            <th scope="col">Total Rentabilizado</th>
                            <th scope="col">Aporte</th>
                            <th scope="col">Juros (%)</th>
                            <th scope="col">Rentabilidade ($)</th>
                            <th scope="col">Tipo Contrato</th>
                            <th scope="col">Status</th>
                            <th scope="col">Comprovante</th>
                          </tr>
                        </thead>
                        <tbody>
                          {listagem &&
                            listagem.map((extrato, index) => (
                              <tr key={index}>
                                {/* <th scope="row">{extrato}</th>
                                <td>{extrato}</td>
                                <td>{extrato}</td>
                                <td>{extrato}</td>
                                <td>{extrato}</td> */}
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
