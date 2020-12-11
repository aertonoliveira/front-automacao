/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { InputMask } from '../../components/custom/Inputs';
import useYupValidationResolver from '../../hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../utils/FormatPrice';
import { Row, Col, Card, CardTitle, CardBody, Form, Button } from 'reactstrap';
import Dropdown from '../../components/custom/dropdown';

import {
  listRelatorioRequestPlSe,
} from '../../store/modules/relatorio/actions';
import Pagination from 'react-js-pagination';

const RelatorioContratos = () => {
  // Validação
  let validationSchema = useMemo( () =>
      yup.object({

      }),
    []
  );

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register } = useForm({ resolver });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.relatorio.loading);
  const userProfile = useSelector((state) => state.user.profile);
  const listagem = useSelector((state) => state.relatorio.listagemRelatoriosPlenoSenior);

  const listagemRelatoriosPlSe = (data) => {
    const dados = {
      ...data,
      numeroPagina: 1
    }

    dispatch(listRelatorioRequestPlSe(dados));
  };

  useEffect(() => {
    const dados ={
      numeroPagina: 1
    }
    dispatch(listRelatorioRequestPlSe(dados));
  }, [dispatch]);

  const realizarPaginacao = (numeroPagina) => {
      const dados ={
        numeroPagina
      }
    dispatch(listRelatorioRequestPlSe(dados));
  };

  return (
    <>
      <div className="row">
        <Col sm="12" lg="12">
          <Card className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <CardTitle className="card-title">
                <h4>Relatório Analista Pleno e Senior</h4>
              </CardTitle>

              <Link
                className="btn btn-primary float-right"
                to="/cadastro-clientes"
              >
                Cadastrar
              </Link>
            </div>
            <Form onSubmit={handleSubmit(listagemRelatoriosPlSe)}>
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
                      <Col sm="12" md="6" lg="2">
                        <InputMask type="text" name="cpf" placeholder="___.___.___-__" mask="999.999.999-99" ref={register} className="form-control" />
                      </Col>
                      <Col sm="12" md="6" lg="2">
                        <input type="text" name="numero_contrato" placeholder="Número Contrato" ref={register} className="form-control" />
                      </Col>
                      <Col sm="12" md="6" lg="2">
                        <select
                          className="form-control"
                          name="data"
                          ref={register}
                        >
                          <option value=''>Selecione o Mês</option>
                          <option value="01" >Janeiro</option>
                          <option value="02" >Fevereiro</option>
                          <option value="03" >Março</option>
                          <option value="04" >Abril</option>
                          <option value="05" >Maio</option>
                          <option value="06" >Junho</option>
                          <option value="07" >Julho</option>
                          <option value="08" >Agosto</option>
                          <option value="09" >Setembro</option>
                          <option value="10" >Outubro</option>
                          <option value="11" >Novembro</option>
                          <option value="12" >Dezembro</option>
                        </select>
                      </Col>
                      <Col sm="12" md="6" lg="2">
                        <select
                          className="form-control"
                          name="tipo_contrato"
                          ref={register}
                        >
                          <option value=''>Selecione Contrato</option>
                          <option value="Simples">Simples</option>
                          <option value="Composto">Composto</option>
                        </select>
                      </Col>

                      <Col sm="12" md="6" lg="2">
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

                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">cpf</th>
                            <th scope="col">Status</th>
                            <th scope="col">Mês Referência</th>
                            <th scope="col">Dias Calculados</th>
                            <th scope="col">Porcentagem Calculada</th>
                            <th scope="col">Valor a Pagar</th>
                            <th scope="col">Nº Contrato</th>
                            <th scope="col">Contrato</th>
                            <th scope="col">Ação</th>
                          </tr>
                        </thead>
                        <tbody>
                          {listagem &&
                            listagem.data.map((RelPlenoSenior, index) => (
                              <tr key={index}>
                                <td>{RelPlenoSenior.user.name}</td>
                                <td>{RelPlenoSenior.user.cpf}</td>

                                {!!RelPlenoSenior.status ? (
                                <td>Ativo</td>
                                ) : (
                                  <td>Desativado</td>
                                )}

                                <td>{RelPlenoSenior.data_referencia}</td>
                                <td>{RelPlenoSenior.dias_calculados}</td>
                                <td>{RelPlenoSenior.porcentagem_calculada} %</td>
                                <td>{formatPrice(RelPlenoSenior.valor_contrato)}</td>
                                <td>{RelPlenoSenior.contrato.numero_contrato}</td>
                                <td>{RelPlenoSenior.contrato.tipo_contrato}</td>
                                <td>
                                  {/* <Dropdown clienteId={cliente.id} /> */}
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

export default RelatorioContratos;
