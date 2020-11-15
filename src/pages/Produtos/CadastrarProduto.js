import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import useYupValidationResolver from '../../hooks/useYupValidationResolver';
import { cadastroProdutoRequest } from '../../store/modules/produtos/actions';
import { useSelector } from 'react-redux';
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { CurrencyMask } from '../../components/custom/Inputs';
import { removeCurrencyMask } from '../../utils/Functions';

const CadastrarProduto = ({ clienteId, open, setOpen }) => {
  let validationSchema = useMemo(
    () =>
      yup.object({
        valor: yup.string().required('Informe o valor'),
        porcentagem: yup.string().required('Informe a porcentagem'),
        tempo_contrato: yup
          .string()
          .required('Informe a qtd. de meses contratados'),
        tipo_contrato: yup.string().required('Informe o tipo de contrato'),
      }),
    []
  );

  const dispatch = useDispatch();
  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, errors } = useForm({ resolver });
  const loading = useSelector((state) => state.produto.loading);
  console.log('aqui')    
  const handleCadastrarProduto = (data) => {
    data.user_id = clienteId;
    data.valor = removeCurrencyMask(data.valor);

    dispatch(cadastroProdutoRequest(data));
  };

  return (
    <Modal isOpen={open}>
      <form
        name="form"
        id="form-adicionar-produto"
        onSubmit={handleSubmit(handleCadastrarProduto)}
      >
        <ModalHeader>Cadastrar Produto</ModalHeader>
        <ModalBody>
          {loading ? (
            <img
              width="100"
              height="100"
              src={require('../../assets/images/loading.gif')}
              alt="Carregando..."
            />
          ) : (
            <Row>
              <Col xs="12" md="6" lg="6">
                <div
                  className={'form-group ' + (errors.valor ? 'has-error' : '')}
                >
                  <label htmlFor="valor">Valor do Investimento</label>
                  <CurrencyMask
                    ref={register}
                    type="text"
                    name="valor"
                    className="form-control"
                  />

                  {errors.valor && (
                    <div className="help-block">{errors.valor.message}</div>
                  )}
                </div>
              </Col>

              <Col xs="12" md="6" lg="6">
                <div
                  className={
                    'form-group ' + (errors.porcentagem ? 'has-error' : '')
                  }
                >
                  <label htmlFor="porcentagem">Porcentagem</label>
                  <input
                    id="porcentagem"
                    ref={register}
                    type="text"
                    name="porcentagem"
                    className="form-control"
                  />

                  {errors.porcentagem && (
                    <div className="help-block">
                      {errors.porcentagem.message}
                    </div>
                  )}
                </div>
              </Col>

              <Col xs="12" md="6" lg="6">
                <div
                  className={
                    'form-group ' + (errors.tempo_contrato ? 'has-error' : '')
                  }
                >
                  <label htmlFor="tempo_contrato">
                    Qtd. meses de contrato?
                  </label>
                  <select
                    name="tempo_contrato"
                    id="tempo_contrato"
                    className="form-control"
                    ref={register}
                  >
                    <option value="">Selecione</option>
                    <option value="6">6 meses</option>
                    <option value="12">12 meses</option>
                  </select>

                  {errors.tempo_contrato && (
                    <div className="help-block">
                      {errors.tempo_contrato.message}
                    </div>
                  )}
                </div>
              </Col>

              <Col xs="12" md="6" lg="6">
                <div
                  className={
                    'form-group ' + (errors.tipo_contrato ? 'has-error' : '')
                  }
                >
                  <label htmlFor="tipo_contrato">Tipo de contrato</label>
                  <select
                    name="tipo_contrato"
                    id="tipo_contrato"
                    className="form-control"
                    ref={register}
                  >
                    <option value="">Selecione</option>
                    <option value="simples">Simples</option>
                    <option value="composto">Composto</option>
                  </select>

                  {errors.tipo_contrato && (
                    <div className="help-block">
                      {errors.tipo_contrato.message}
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          )}
        </ModalBody>
        <ModalFooter>
          {loading ? (
            ''
          ) : (
            <Button color="primary" type="submit">
              Adicionar
            </Button>
          )}
          <Button color="secondary" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default CadastrarProduto;
