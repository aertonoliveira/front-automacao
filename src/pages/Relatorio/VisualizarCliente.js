import React from 'react';
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

const VisualizarCliente = ({ clienteId, open, setOpen }) => {
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
