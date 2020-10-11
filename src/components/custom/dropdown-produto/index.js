import React, { useState, useEffect } from 'react';

import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import CadastrarProduto from '../../../pages/Produtos/CadastrarProduto';
import VisualizarCliente from '../../../pages/Clientes/VisualizarCliente';

export default function DropdownProduto({ produtoId, cliente }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpenAdicionarProduto, setModalOpenAdicionarProduto] = useState(
    false
  );

  const [modalOpenVisualizarCliente, setModalOpenVisualizarCliente] = useState(
    false
  );

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // const toggleModalAdicionarProduto = () => {
  //   setModalOpenAdicionarProduto(!modalOpenAdicionarProduto);
  // };

  // const toggleModalVisualizarProduto = () => {
  //   setModalOpenVisualizarCliente(!modalOpenVisualizarCliente);
  // };

  useEffect(() => {
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
          
          >
            Visualizar
          </button>
        </DropdownMenu>
      </ButtonDropdown>

      {/* <CadastrarProduto
        produtoId={produtoId}
        open={modalOpenAdicionarProduto}
        setOpen={setModalOpenAdicionarProduto}
      />

      <VisualizarCliente
        produtoId={produtoId}
        open={modalOpenVisualizarCliente}
        setOpen={setModalOpenVisualizarCliente}
      /> */}
    </>
  );
}
