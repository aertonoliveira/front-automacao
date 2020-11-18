
import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../utils/FormatPrice';

import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardBody,
} from 'reactstrap';

const VisualizarCliente = ({ open, setOpen }) => {

  const loading = useSelector((state) => state.cliente.loading);
  const produtos = useSelector((state) => state.cliente.listagemProdutosCliente);

  return (
    <Modal isOpen={open}>
      <ModalHeader><strong>Produtos</strong></ModalHeader>
      {loading ? (
            <img
              width="100"
              height="100"
              src={require('../../assets/images/loading.gif')}
              alt="Carregando..."
            />
          ) : (
        <ModalBody>
          {produtos &&
            produtos.conta_bancaria.map((contas, index) => (
              <Row key={index}>
                <Col>
                  <h5><strong>Agência</strong></h5>
                  <label>{contas.agencia}</label>
                </Col>
                <Col>
                  <h5><strong>Nº da Conta</strong></h5>
                  <label>{contas.numero_conta}</label>
                </Col>
                <Col>
                  <h5><strong>Banco</strong></h5>
                  <label>{contas.banco.nome_banco}</label>
                </Col>
              </Row>
            ))
          }
          {produtos &&
            <Row>
              <Col>
                <h5><strong>E-mail: </strong>{produtos.email}</h5>
                <label></label>
              </Col>
            </Row>
          }
          <CardBody className="iq-card-body">
            <Row>
              <Col sm="12">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Valor</th>
                      <th scope="col">Porcentagem</th>
                      <th scope="col">Número</th>
                    </tr>
                  </thead>
                  <tbody>
                    {produtos &&
                      produtos.contrato_mutuo.map((produto, index) => (
                        <tr key={index}>
                          <th scope="row">{produto.id}</th>
                          <td>{formatPrice(produto.valor)}</td>
                          <td>{produto.porcentagem} %</td>
                          <td>{produto.numero_contrato}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </Col>
            </Row>
          </CardBody>
        </ModalBody>
      )}
      <ModalFooter>
        <Button color="secondary" onClick={() => setOpen(false)}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default VisualizarCliente;
