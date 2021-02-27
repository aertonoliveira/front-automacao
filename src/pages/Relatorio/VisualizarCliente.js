import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { HeaderBaixa } from './styled';

const VisualizarCliente = ({ clienteId, open, setOpen }) => {
  const { register } = useForm('');
  return (
    <Modal isOpen={open}>
      <HeaderBaixa>
        <ModalHeader>Conta Bancária</ModalHeader>
      </HeaderBaixa>
      <ModalBody>
        <table className="table mb-0 table-borderless">
          <thead>
            <tr>
              <th scope="col">Banco:</th>
              <th scope="col">070 - Inter SA</th>
            </tr>
            <tr>
              <th scope="col">Agência:</th>
              <th scope="col">000-1</th>
            </tr>
            <tr>
              <th scope="col">Conta:</th>
              <th scope="col">1609803-1</th>
            </tr>
            <tr>
              <th scope="col">Tipo de Conta:</th>
              <th scope="col">1</th>
            </tr>
            <tr>
              <th scope="col">Nome:</th>
              <th scope="col">Bruno Henrique Gabi Sem Gol</th>
            </tr>
            <tr>
              <th scope="col">CPF:</th>
              <th scope="col">020-980-125-25</th>
            </tr>
            <tr>
              <th scope="col">E-mail:</th>
              <th scope="col">BHGSG@gmail.com</th>
            </tr>
            <tr>
              <th scope="col">Status do Pagamento</th>
            </tr>
            <tr>
              <select
                className="form-control"
                name="tipo_contrato"
                ref={register}
              >
                <option value=''>Selecione</option>
                <option value="Simples">Pago</option>
                <option value="aguardando">Aguardando</option>
              </select>
            </tr>
          </thead>
        
        </table>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" type="submit">
          Atualizar
        </Button>
        <Button color="secondary" onClick={() => setOpen(false)}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default VisualizarCliente;
