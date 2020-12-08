import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import CadastrarProduto from '../../../pages/Produtos/CadastrarProduto';
import VisualizarCliente from '../../../pages/Clientes/VisualizarCliente';
import UploadDocumentos from '../../../pages/Clientes/UploadDocumentos';

import {
  listaProdutosRequest,
  documentosClienteRequest
} from '../../../store/modules/clientes/actions';

export default function Dropdown({ clienteId, cliente }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpenAdicionarProduto, setModalOpenAdicionarProduto] = useState(
    false
  );
  const dispatch = useDispatch();
  const documentoListagem = useSelector((state) => state.cliente.documentosCliente);
  const [modalOpenVisualizarCliente, setModalOpenVisualizarCliente] = useState(
    false
  );

  const [modalOpenUploadDocumentos, setModalOpenUploadDocumentos] = useState(
    false
  );

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleModalAdicionarProduto = () => {
    setModalOpenAdicionarProduto(!modalOpenAdicionarProduto);
  };

  const toggleModalVisualizarProduto = () => {
    setModalOpenVisualizarCliente(!modalOpenVisualizarCliente);
  };

  const toggleModalUploadDocumentos = () => {
    setModalOpenUploadDocumentos(!modalOpenUploadDocumentos);
  };

  useEffect(() => {
    const data = {
      type: '',
      page: 1,
      clienteId
    };

    if(modalOpenVisualizarCliente){
      dispatch(listaProdutosRequest(data));
    }
  }, [modalOpenVisualizarCliente]);

  useEffect(() => {
    const data = {
      clienteId
    }
    if (dropdownOpen) {
      dispatch(documentosClienteRequest(data));
    }
  }, [dropdownOpen]);

  return (
    <>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret color="primary">
          Ações
        </DropdownToggle>
        <DropdownMenu>
          <button
            type="button"
            className="dropdown-item"
            onClick={toggleModalAdicionarProduto}
          >
            Adicionar
          </button>
          { !documentoListagem.id ? (
            <button
              type="button"
              className="dropdown-item"
              onClick={toggleModalUploadDocumentos}
            >
              Enviar Documentos
            </button>
          ) : ("")}

          <button
            type="button"
            className="dropdown-item"
            onClick={toggleModalVisualizarProduto}
          >
            Visualizar
          </button>
        </DropdownMenu>
      </ButtonDropdown>

      <CadastrarProduto
        clienteId={clienteId}
        open={modalOpenAdicionarProduto}
        setOpen={setModalOpenAdicionarProduto}
      />

      <VisualizarCliente
        clienteId={clienteId}
        open={modalOpenVisualizarCliente}
        setOpen={setModalOpenVisualizarCliente}
      />

      <UploadDocumentos
        clienteId={clienteId}
        open={modalOpenUploadDocumentos}
        setOpen={setModalOpenUploadDocumentos}
      />
    </>
  );
}
