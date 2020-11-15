import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import CadastrarProduto from '../../../pages/Produtos/CadastrarProduto';
import VisualizarCliente from '../../../pages/Clientes/VisualizarCliente';
import {
  listaProdutosRequest,
} from '../../../store/modules/clientes/actions';

export default function Dropdown({ clienteId, cliente }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpenAdicionarProduto, setModalOpenAdicionarProduto] = useState(
    false
  );
  const dispatch = useDispatch();

  const [modalOpenVisualizarCliente, setModalOpenVisualizarCliente] = useState(
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

  useEffect(() => {
    const data = {
      type: '',
      page: 1,
      clienteId
    };
  
    if(modalOpenVisualizarCliente){
      dispatch(listaProdutosRequest(data));
    }
    console.log('RETORNO: ', modalOpenVisualizarCliente);
  }, [modalOpenVisualizarCliente]);

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
    </>
  );
}
