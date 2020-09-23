/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Row, Col, Card, CardTitle, CardBody, Form } from 'reactstrap';
import { formatPrice } from '../../utils/FormatPrice';

// import CadastrarProduto from './CadastrarProduto';
import { listagemProdutosRequest } from '../../store/modules/produtos/actions';
import { useDispatch, useSelector } from 'react-redux';

const Produtos = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  const produtos = useSelector((state) => state.produto.listagemProdutos);
  const loading = useSelector((state) => state.produto.loading);
  const dispatch = useDispatch();

  // const toggleModal = () => {
  //   setModalOpen(!modalOpen);
  // };

  useEffect(() => {
    dispatch(listagemProdutosRequest());
  }, [dispatch]);

  return (
    <>
      <div className="row">
        <Col sm="12" lg="12">
          <Card className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <CardTitle className="card-title">
                <h4>Listagem de produtos</h4>
              </CardTitle>

              {/* <button
                type="button"
                className="btn btn-primary float-right"
                onClick={() => toggleModal(true)}
              >
                Cadastrar
              </button>
              <CadastrarProduto open={modalOpen} setOpen={toggleModal} /> */}
            </div>
            {loading ? (
              <img
                width="100"
                height="100"
                src={require('../../assets/images/loading.gif')}
                alt="Carregando..."
              />
            ) : (
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
                        </tr>
                      </thead>
                      <tbody>
                        {produtos &&
                          produtos.data.map((produto, index) => (
                            <tr key={index}>
                              <th scope="row">{produto.id}</th>
                              <td>{produto.user.name}</td>
                              <td>{formatPrice(produto.valor)}</td>
                              <td>{formatPrice(produto.valor_atualizado)}</td>
                              <td>{produto.porcentagem} %</td>
                              <td>{produto.tipo_contrato}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </Col>
                </Row>
              </CardBody>
            )}
          </Card>
        </Col>
      </div>
    </>
  );
};

export default Produtos;
