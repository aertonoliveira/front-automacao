import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import CadastrarProduto from '../../../pages/Produtos/CadastrarProduto';
import VisualizarCliente from '../../../pages/Relatorio/VisualizarCliente';

import {
  listaProdutosRequest
} from '../../../store/modules/clientes/actions';

export default function DropdownRel({ clienteId, cliente }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpenAdicionarProduto, setModalOpenAdicionarProduto] = useState(
    false
  );
  const dispatch = useDispatch();

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleModalAdicionarProduto = () => {
    setModalOpenAdicionarProduto(!modalOpenAdicionarProduto);
  };


  useEffect(() => {
    const data = {
      type: '',
      page: 1,
      clienteId
    };

  }, []);


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
            Baixa no Pagamento
          </button>
        </DropdownMenu>
      </ButtonDropdown>

      <VisualizarCliente
        clienteId={clienteId}
        open={modalOpenAdicionarProduto}
        setOpen={setModalOpenAdicionarProduto}
      />
    </>
  );
}
