
import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import {
  listaProdutosRequest,
} from '../../store/modules/clientes/actions';

const VisualizarCliente = ({ clienteId, open, setOpen, getProduto }) => {

  const dispatch = useDispatch();
  const produtos = useSelector((state) => state.cliente.listagemProdutosCliente);
  console.log(produtos);
  const listarProdutos = () => {
    const data = {
      type: '',
      page: 1,
      clienteId
    };
    dispatch(listaProdutosRequest(data));
  };

  let i =  0;
  if (setOpen == true) {
    i++;
    console.log(i);
      listarProdutos();
  }

  // useEffect(() => {
  //   const data = {
  //     type: '',
  //     page: 1,
  //     clienteId
  //   };

  //   dispatch(listaProdutosRequest(data));
  // }, [dispatch]);

  return (
    <Modal isOpen={open}>
      <ModalHeader>Visualizar Cliente</ModalHeader>
      <ModalBody>
        <Row>
          <Col>
            <h5>teste</h5>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={() => setOpen(false)}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default VisualizarCliente;
