import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import CadastrarProduto from '../../../pages/Produtos/CadastrarProduto';

export default function Dropdown({ clienteId, options }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret color="primary">
          Ações
        </DropdownToggle>
        <DropdownMenu>
          <button type="button" className="dropdown-item" onClick={toggleModal}>
            Adicionar
          </button>
          {options &&
            options.map((option, index) => (
              <Link className="dropdown-item" key={index} to={option.link}>
                {option.title}
              </Link>
            ))}
        </DropdownMenu>
      </ButtonDropdown>

      <CadastrarProduto
        clienteId={clienteId}
        open={modalOpen}
        setOpen={setModalOpen}
      />
    </>
  );
}
