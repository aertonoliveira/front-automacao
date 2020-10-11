/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useMemo } from 'react';
import { Row, Col, Card, CardTitle, CardBody, Form,Button } from 'reactstrap';
import { formatPrice } from '../../utils/FormatPrice';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from '../../hooks/useYupValidationResolver';
import { InputMask } from '../../components/custom/Inputs';
import DropdownProduto from '../../components/custom/dropdown-produto';

import CadastrarProduto from './CadastrarProduto';
import { listagemProdutosRequest,alterarStatusProdutoRequest } from '../../store/modules/produtos/actions';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-js-pagination';


const Produtos = () => {

  let validationSchema = useMemo(
    () =>
      yup.object({
       
      }),
    []
  );

  const resolver = useYupValidationResolver(validationSchema);
  const [modalOpen, setModalOpen] = useState(false);
  const { handleSubmit, register } = useForm({ resolver });
  const produtos = useSelector((state) => state.produto.listagemProdutos);
  const loading = useSelector((state) => state.produto.loading);
  const tipoPerfil = useSelector((state) => state.user.profile.roles[0].name);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const listagemProdutos = (data) => {
    const dados ={
      ...data,
      numeroPagina: 1
    }
    dispatch(listagemProdutosRequest(dados));
  };

  const ativarDesativarCliente = (id) => {
    const response = window.confirm('Você desaja alterar o status?');
    if (response) {
      dispatch(alterarStatusProdutoRequest(id));
    }
  };

  useEffect(() => {
    const dados ={
      numeroPagina: 1
    }
    dispatch(listagemProdutosRequest(dados));
  }, [dispatch]);

  const realizarPaginacao = (numeroPagina) => {
    const dados ={
    
      numeroPagina
    }
    dispatch(listagemProdutosRequest(dados));
  };

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
            <Form onSubmit={handleSubmit(listagemProdutos)}>
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
                        <InputMask type="text" name="cpf"  mask="999.999.999-99" ref={register} className="form-control" />
                      </Col>
                      <Col sm="12" md="6" lg="2">
                        <input type="text" name="numero_contrato" ref={register} className="form-control" />
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
                      <Col sm={12}>
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Numero do Contrato</th>
                              <th scope="col">Nome</th>
                              <th scope="col">Valor</th>
                              <th scope="col">Valor Atualizado</th>
                              <th scope="col">Procentagem</th>
                              <th scope="col">Tipo Contrato</th>
                              <th scope="col">Status</th>
                              <th scope="col">Ações</th>
                            </tr>
                          </thead>
                          <tbody>
                            {produtos &&
                              produtos.data.map((produto, index) => (
                                <tr key={index}>
                                  <th scope="row">{produto.numero_contrato}</th>
                                  <td>{produto.user.name}</td>
                                  <td>{formatPrice(produto.valor)}</td>
                                  <td>{formatPrice(produto.valor_atualizado)}</td>
                                  <td>{produto.porcentagem} %</td>
                                  <td>{produto.tipo_contrato}</td>
                                  <td>
                                  {!!produto.ativo ? (
                                    <Button
                                      color="success"
                                      size="sm"
                                      id="ativarCliente"
                                      onClick={() =>
                                        ativarDesativarCliente(produto.id)
                                      }
                                    >
                                      Ativado
                                    </Button>
                                  ) : (
                                    <Button
                                      type="button"
                                      color="danger"
                                      size="sm"
                                      id="desativarCliente"
                                      onClick={() =>
                                        ativarDesativarCliente(produto.id)
                                      }
                                    >
                                      Desativado
                                    </Button>
                                  )}
                                  </td>
                                  <td> <DropdownProduto produtoId={produto.id} /></td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                        {produtos && (
                          <Pagination
                            activePage={produtos.current_page}
                            totalItemsCount={produtos.total}
                            itemsCountPerPage={produtos.per_page}
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

export default Produtos;
