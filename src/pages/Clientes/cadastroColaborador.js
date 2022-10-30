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
  Label,
} from 'reactstrap';
import { ContainerImagem } from './styles';

import { cadastroClienteRequest } from '../../store/modules/clientes/actions';
import { InputMask } from '../../components/custom/Inputs';

const CadastroColaborador = () => {
  // Validação
  let validationSchema = useMemo(
    () =>
      yup.object({
        name: yup.string().required('Por favor, informe seu nome'),
        cpf: yup.string().required('Por favor, informe seu CPF'),
        rg: yup.string().required('Por favor, informe seu rg'),
        data_emissao: yup
          .string()
          .required('Por favor, informe a data de emissão'),
        orgao_emissor: yup
          .string()
          .required('Por favor, informe o orgão emissor'),
        data_nascimento: yup
          .string()
          .required('Por favor, informe a data do seu nascimento'),
        estado_civil: yup
          .string()
          .required('Por favor, informe seu estado civil'),
        nome_mae: yup.string().required('Por favor, informe o nome de sua mãe'),
        genero: yup.string().required('Por favor, informe seu gênero'),
        cep: yup.string().required('Por favor, informe seu cep'),
        bairro: yup.string().required('Por favor, informe seu bairro'),
        password: yup.string().required('Por favor, informe seu senha'),
        confirm_password: yup
          .string()
          .required('Por favor, confirme sua senha'),
        endereco: yup.string().required('Por favor, informe seu endereço'),
        estado: yup.string().required('Por favor, informe seu estado'),
        numero: yup.string().required('Por favor, informe seu número'),
        profissao: yup.string().required('Por favor, informe seu profissão'),
        telefone: yup.string().required('Por favor, informe seu telefone'),
        celular: yup.string().required('Por favor, informe seu celular'),
        role_id: yup.string().required('Por favor, informe seu role_id'),

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
    console.log(data);
    dispatch(cadastroClienteRequest(data));
  };

  return (
    <>
      <ContainerImagem >
      <img
              width="250"
              height="250"
              src={require('../../assets/images/logo-full.png')}
              alt="Carregando..."
            />
      </ContainerImagem>
      <div className="row">
        <Col sm={12} lg={12}>
          <Card className={'iq-card'}>
            <div className={'iq-card-header d-flex justify-content-between'}>
              <CardTitle className={'card-title'}>
                <h4>Cadastro de Cliente</h4>
              </CardTitle>
            </div>
            <Form className="mt-4" onSubmit={handleSubmit(cadastrarCliente)}>
              <CardBody className={'iq-card-body'}>
                <Row>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' + (errors.name ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="name">Nome Completo</Label>
                      <input
                        type="text"
                        placeholder="Nome completo"
                        name="name"
                        className="form-control"
                        ref={register}
                      />
                      {errors.name && (
                        <div className="help-block">{errors.name.message}</div>
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
                    <div
                      className={
                        'form-group ' + (errors.cpf ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="cpf">CPF</Label>
                      <InputMask
                        type="text"
                        mask="999.999.999-99"
                        placeholder="CPF"
                        name="cpf"
                        className="form-control"
                        ref={register}
                      />
                      {errors.cpf && (
                        <div className="help-block">{errors.cpf.message}</div>
                      )}
                    </div>
                  </Col>
                  <Col sm={12} lg={3}>
                    <div
                      className={'form-group ' + (errors.rg ? 'has-error' : '')}
                    >
                      <Label htmlFor="rg">RG</Label>
                      <input
                        type="text"
                        placeholder="RG"
                        name="rg"
                        className="form-control"
                        ref={register}
                      />

                      {errors.rg && (
                        <div className="help-block">{errors.rg.message}</div>
                      )}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' + (errors.data_emissao ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="data_emissao">Data de Emissão</Label>
                      <input
                        type="date"
                        className="form-control"
                        name="data_emissao"
                        ref={register}
                      />
                      {errors.data_emissao && (
                        <div className="help-block">
                          {errors.data_emissao.message}
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' +
                        (errors.orgao_emissor ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="orgao_emissor">Orgão Emissor</Label>
                      <input
                        type="text"
                        placeholder="Orgão Emissor"
                        name="orgao_emissor"
                        className="form-control"
                        ref={register}
                      />
                      {errors.orgao_emissor && (
                        <div className="help-block">
                          {errors.orgao_emissor.message}
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' +
                        (errors.data_nascimento ? 'has-error' : '')
                      }
                    >
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
                      {errors.data_nascimento && (
                        <div className="help-block">
                          {errors.data_nascimento.message}
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' + (errors.estado_civil ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="estado_civil">Estado Civil</Label>
                      <select
                        className="form-control mb-3"
                        name="estado_civil"
                        ref={register}
                      >
                        <option defaultValue="/"></option>
                        <option defaultValue="Solteiro">Solteiro</option>
                        <option defaultValue="Casado">Casado</option>
                        <option defaultValue="Divorciado">Divorciado</option>
                        <option defaultValue="Viúvo">Viúvo</option>
                      </select>
                      {errors.estado_civil && (
                        <div className="help-block">
                          {errors.estado_civil.message}
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' + (errors.nome_mae ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="nome_mae">Nome da Mãe</Label>
                      <input
                        type="text"
                        placeholder="Nome da Mãe"
                        name="nome_mae"
                        className="form-control"
                        ref={register}
                      />
                      {errors.nome_mae && (
                        <div className="help-block">
                          {errors.nome_mae.message}
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' + (errors.genero ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="genero">Gênero</Label>
                      <input
                        type="text"
                        placeholder="Gênero"
                        name="genero"
                        className="form-control"
                        ref={register}
                      />
                      {errors.genero && (
                        <div className="help-block">
                          {errors.genero.message}
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' + (errors.telefone ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="telefone">Telefone</Label>
                      <InputMask
                        type="text"
                        mask="(99) 9999-9999"
                        placeholder="Telefone"
                        name="telefone"
                        className="form-control"
                        ref={register}
                      />
                      {errors.telefone && (
                        <div className="help-block">
                          {errors.telefone.message}
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' + (errors.celular ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="celular">Celular</Label>
                      <InputMask
                        type="text"
                        mask="(99) 9 9999-9999"
                        placeholder="Celular"
                        name="celular"
                        className="form-control"
                        ref={register}
                      />
                      {errors.celular && (
                        <div className="help-block">
                          {errors.celular.message}
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} lg={6}>
                    <div
                      className={
                        'form-group ' + (errors.password ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="password">Senha</Label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        ref={register}
                      />
                      {errors.password && (
                        <div className="help-block">
                          {errors.password.message}
                        </div>
                      )}
                    </div>
                  </Col>

                  <Col sm={12} lg={6}>
                    <div
                      className={
                        'form-group ' +
                        (errors.confirm_password ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="confirm_password">Confirme senha</Label>
                      <input
                        type="password"
                        name="confirm_password"
                        className="form-control"
                        ref={register}
                      />
                      {errors.confirm_password && (
                        <div className="help-block">
                          {errors.confirm_password.message}
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>

                <Row className={'registration-update'}>
                    {/* <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' + (errors.role_id ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="role_id">Cargo</Label>
                      <select
                        className="form-control mb-3"
                        name="role_id"
                        ref={register}
                      >
                        <option defaultValue="/"></option>
                        <option defaultValue="Analista Senior">
                          Analista Senior
                        </option>
                        <option defaultValue="Gestor de analista">
                          Gestor de analista
                        </option>
                        <option defaultValue="Analista pleno">
                          Analista pleno
                        </option>
                        <option defaultValue="Cliente">Cliente</option>
                        <option defaultValue="Parceiro">Parceiro</option>
                        <option defaultValue="Trader">Trader</option>
                      </select>
                      {errors.role_id && (
                        <div className="help-block">
                          {errors.role_id.message}
                        </div>
                      )}
                    </div>
                  </Col>   */}

                  <Col sm={12} lg={4}>
                    <div
                      className={
                        'form-group ' + (errors.profissao ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="profissao">Profissão</Label>
                      <input
                        type="text"
                        placeholder="Profissão"
                        name="profissao"
                        className="form-control"
                        ref={register}
                      />
                      {errors.profissao && (
                        <div className="help-block">
                          {errors.profissao.message}
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col sm={12} lg={4}>
                    <div
                      className={
                        'form-group ' + (errors.cep ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="cep">CEP</Label>
                      <InputMask
                        type="text"
                        mask="99999-999"
                        placeholder="CEP"
                        name="cep"
                        className="form-control"
                        ref={register}
                      />
                      {errors.cep && (
                        <div className="help-block">{errors.cep.message}</div>
                      )}
                    </div>
                  </Col>
                  <Col sm={12} lg={4}>
                    <div
                      className={
                        'form-group ' + (errors.endereco ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="endereco">Endereço</Label>
                      <input
                        type="text"
                        placeholder="Endereço"
                        name="endereco"
                        className="form-control"
                        ref={register}
                      />
                      {errors.endereco && (
                        <div className="help-block">
                          {errors.endereco.message}
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' + (errors.complemento ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="complemento">Complemento</Label>
                      <input
                        type="text"
                        placeholder="Complemento"
                        name="complemento"
                        className="form-control"
                        ref={register}
                      />
                      {errors.complemento && (
                        <div className="help-block">
                          {errors.complemento.message}
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' + (errors.numero ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="numero">Número</Label>
                      <input
                        type="text"
                        placeholder="Número"
                        name="numero"
                        className="form-control"
                        ref={register}
                      />
                      {errors.numero && (
                        <div className="help-block">
                          {errors.numero.message}
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' + (errors.bairro ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="bairro">Bairro</Label>
                      <input
                        type="text"
                        placeholder="Bairro"
                        name="bairro"
                        className="form-control"
                        ref={register}
                      />
                      {errors.bairro && (
                        <div className="help-block">
                          {errors.bairro.message}
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' + (errors.estado ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="estado">Estado</Label>
                      <input
                        type="text"
                        placeholder="Estado"
                        name="estado"
                        className="form-control"
                        ref={register}
                      />
                      {errors.estado && (
                        <div className="help-block">
                          {errors.estado.message}
                        </div>
                      )}
                    </div>
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

export default CadastroColaborador;
