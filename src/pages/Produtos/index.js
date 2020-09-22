/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardTitle, CardBody, Form } from 'reactstrap';
import { formatPrice } from '../../utils/FormatPrice';

import produtos from './lista.json';
import Dropdown from '../../components/custom/dropdown';
import CadastrarProduto from './CadastrarProduto';

const Produtos = () => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const produtosTratados = produtos.data.map((produto) => ({
      id: produto.id,
      nome_cliente: produto.user.name,
      valor: parseFloat(produto.valor),
      valor_atualizado: parseFloat(produto.valor_atualizado),
      porcentagem: produto.porcentagem,
      tipo_contrato: produto.tipo_contrato,
    }));

    setListaProdutos(produtosTratados);
  }, []);

  return (
    <>
      <div className="row">
        <Col sm="12" lg="12">
          <Card className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <CardTitle className="card-title">
                <h4>Listagem de produtos</h4>
              </CardTitle>

              <button
                type="button"
                className="btn btn-primary float-right"
                onClick={() => toggleModal(true)}
              >
                Cadastrar
              </button>
              <CadastrarProduto open={modalOpen} setOpen={toggleModal} />
            </div>
            <Form>
              <CardBody className="iq-card-body">
                <Row>
                  <Col sm={12}>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Nome</th>
                          <th scope="col">Valor</th>
                          <th scope="col">Valor Atualizado</th>
                          <th scope="col">Procentagem</th>
                          <th scope="col">Tipo Contrato</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {listaProdutos &&
                          listaProdutos.map((produto, index) => (
                            <tr key={index}>
                              <th scope="row">{produto.id}</th>
                              <td>{produto.nome_cliente}</td>
                              <td>{formatPrice(produto.valor)}</td>
                              <td>{formatPrice(produto.valor_atualizado)}</td>
                              <td>{produto.porcentagem} %</td>
                              <td>{produto.tipo_contrato}</td>
                              <td>
                                <Dropdown
                                  options={[
                                    {
                                      title: 'Visualizar',
                                      link: `/produtos/visualizar/${produto.id}`,
                                    },
                                  ]}
                                />
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

export default Produtos;
