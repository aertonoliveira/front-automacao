/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from 'react';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from '../../hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Card,
  div,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';

import { cadastroClienteRequest } from '../../store/modules/clientes/actions';

const Clientes = () => {
  // Validação
  let validationSchema = useMemo(
    () =>
      yup.object({
        nome: yup.string().required('Por favor, informe seu nome'),
        email: yup
          .string()
          .email('Por favor, informe um endereço de e-mail válido')
          .required('Por favor, informe seu e-mail'),
      }),
    []
  );

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, errors } = useForm({ resolver });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.cliente.loading);

  const cadastrarCliente = (data) => {
    dispatch(cadastroClienteRequest(data));
  };

  return (
    <>
      <div className="row">
        <Col sm={12} lg={12}>
          <Card className={'iq-card'}>
            <div className={'iq-card-header d-flex justify-content-between'}>
              <CardTitle className={'card-title'}>
                <h4>Basic Form</h4>
              </CardTitle>
            </div>
            <Form className="mt-4" onSubmit={handleSubmit(cadastrarCliente)}>
              <CardBody className={'iq-card-body'}>
                <Row>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' + (errors.nome ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="nome">Nome Completo</Label>
                      <input
                        type="text"
                        placeholder="Nome completo"
                        name="nome"
                        className="form-control"
                        ref={register}
                      />
                      {errors.nome && (
                        <div className="help-block">{errors.nome.message}</div>
                      )}
                    </div>
                  </Col>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' + (errors.email ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="email">Email</Label>
                      <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        ref={register}
                        className="form-control"
                      />
                      {errors.email && (
                        <div className="help-block">{errors.email.message}</div>
                      )}
                    </div>
                  </Col>
                  <Col sm={12} lg={3}>
                    <FormGroup>
                      <Label htmlFor="cpf">CPF</Label>
                      <input
                        type="string"
                        placeholder="CPF"
                        name="cpf"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12} lg={3}>
                    <FormGroup>
                      <Label htmlFor="rg">RG</Label>
                      <input
                        type="string"
                        placeholder="RG"
                        name="rg"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} lg={3}>
                    <FormGroup>
                      <Label htmlFor="data_emissao">Data de Emissão</Label>
                      <input
                        type="date"
                        className="form-control"
                        name="data_emissao"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12} lg={3}>
                    <FormGroup>
                      <Label htmlFor="orgao_emissor">Orgão Emissor</Label>
                      <input
                        type="text"
                        placeholder="Orgão Emissor"
                        name="orgao_emissor"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12} lg={3}>
                    <FormGroup>
                      <Label htmlFor="data_nascimento">
                        Data de Nascimento
                      </Label>
                      <input
                        type="date"
                        className="form-control"
                        id="exampleInputdate"
                        name="data_nascimento"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12} lg={3}>
                    <FormGroup>
                      <Label htmlFor="estado_civil">Estado Civil</Label>
                      <select
                        className="form-control mb-3"
                        name="estado_civil"
                        ref={register}
                      >
                        <option defaultValue="Solteiro">Solteiro</option>
                        <option defaultValue="Casado">Casado</option>
                        <option defaultValue="Divorciado">Divorciado</option>
                        <option defaultValue="Viúvo">Viúvo</option>
                      </select>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} lg={3}>
                    <FormGroup>
                      <Label htmlFor="nome_mae">Nome da Mãe</Label>
                      <input
                        type="text"
                        placeholder="Nome da Mãe"
                        name="nome_mae"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12} lg={3}>
                    <FormGroup>
                      <Label htmlFor="genero">Gênero</Label>
                      <input
                        type="text"
                        placeholder="Gênero"
                        name="genero"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12} lg={3}>
                    <FormGroup>
                      <Label htmlFor="telefone">Telefone</Label>
                      <input
                        type="number"
                        placeholder="(55)5555-5555"
                        name="telefone"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12} lg={3}>
                    <FormGroup>
                      <Label htmlFor="celular">Celular</Label>
                      <input
                        type="number"
                        placeholder="(55)5555-5555"
                        name="celular"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} lg={6}>
                    <FormGroup>
                      <Label htmlFor="password">Senha</Label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12} lg={6}>
                    <FormGroup>
                      <Label htmlFor="confirm_password">Confirme senha</Label>
                      <input
                        type="password"
                        name="confirm_password"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} lg={4}>
                    <FormGroup>
                      <Label htmlFor="profissao">Profissão</Label>
                      <input
                        type="string"
                        placeholder="Profissão"
                        name="profissao"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12} lg={4}>
                    <FormGroup>
                      <Label htmlFor="cep">CEP</Label>
                      <input
                        type="string"
                        placeholder="CEP"
                        name="cep"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12} lg={4}>
                    <FormGroup>
                      <Label htmlFor="endereco">Endereço</Label>
                      <input
                        type="text"
                        placeholder="Endereço"
                        name="endereco"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} lg={3}>
                    <FormGroup>
                      <Label htmlFor="complemento">Complemento</Label>
                      <input
                        type="text"
                        placeholder="Complemento"
                        name="complemento"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12} lg={3}>
                    <FormGroup>
                      <Label htmlFor="numero">Número</Label>
                      <input
                        type="string"
                        placeholder="Número"
                        name="numero"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12} lg={3}>
                    <FormGroup>
                      <Label htmlFor="bairro">Bairro</Label>
                      <input
                        type="text"
                        placeholder="Bairro"
                        name="bairro"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12} lg={3}>
                    <FormGroup>
                      <Label htmlFor="estado">Estado</Label>
                      <input
                        type="text"
                        placeholder="Estado"
                        name="estado"
                        className="form-control"
                        ref={register}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <button
                  type="submit"
                  color="primary"
                  className="btn btn-primary"
                >
                  {isLoading ? 'Carregando...' : 'Cadastrar'}
                </button>
              </CardBody>
            </Form>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default Clientes;
