import React, { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from '../../hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Form,
  Label,
} from 'reactstrap';

import { contaBancariaRequest,buscarBancosRequest } from '../../store/modules/contaBancaria/actions';

const ContaBancaria = () => {
  // Validação
  let validationSchema = useMemo(
    () =>
      yup.object({
        agencia: yup.string().required('Por favor, informe sua agência'),
        numero_conta: yup.string().required('Por favor, informe sua conta'),
        tipo_conta: yup.string().required('Por favor, informe o tipo da conta'),
        banco_id: yup.string().required('Por favor, informe o banco'),
      }),
    []
  );

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, errors } = useForm({ resolver });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contaBancaria.loading);
  const bancos = useSelector((state) => state.contaBancaria.bancos);
  const user_id = useSelector((state) => state.user.profile.id);

  const contaBancaria = (data) => {
    const dados = {
      ...data,
      user_id: user_id
    }
    console.log(dados)
    dispatch(contaBancariaRequest(dados));
  };

  useEffect(() => {

    dispatch(buscarBancosRequest());
  }, [])

  return (
    <>
      <div className="row">
        <Col sm={12} lg={12}>
          <Card className={'iq-card'}>
            <div className={'iq-card-header d-flex justify-content-between'}>
              <CardTitle className={'card-title'}>
                <h4>Cadastro conta bancaria</h4>
              </CardTitle>
              </div>
              <Form className="mt-4" onSubmit={handleSubmit(contaBancaria)}>
                <CardBody className={'iq-card-body'}>

                <Row>
                  <Col sm={12} lg={3}>
                    <div
                      className={
                        'form-group ' + (errors.agencia ? 'has-error' : '')
                      }
                    >
                      <Label htmlFor="agencia">Agencia</Label>
                      <input
                        type="text"
                        name="agencia"
                        className="form-control"
                        ref={register}
                      />
                      {errors.agencia && (
                        <div className="help-block">{errors.agencia.message}</div>
                      )}
                    </div>
                    </Col>
                  <Col sm={12} lg={3}>
                  <div
                   className={
                    'form-group ' + (errors.tipo_conta? 'has-error' : '')
                  }
                  >
                    <Label htmlFor="tipo_conta">Tipo de Conta</Label>
                      <input
                        type="text"
                        name="tipo_conta"
                        className="form-control"
                        ref={register}
                      />
                      {errors.tipo_conta && (
                        <div className="help-block">{errors.tipo_conta.message}</div>
                      )}
                    </div>
                    </Col>
                    <Col sm={12} lg={3}>
                  <div
                   className={
                    'form-group ' + (errors.numero_conta? 'has-error' : '')
                  }
                  >
                    <Label htmlFor="numero_conta">Numero da Conta</Label>
                      <input
                        type="text"
                        name="numero_conta"
                        className="form-control"
                        ref={register}
                      />
                      {errors.numero_conta && (
                        <div className="help-block">{errors.numero_conta.message}</div>
                      )}
                    </div>
                    </Col>
                    <Col sm={12} lg={3}>
                  <div
                   className={
                    'form-group ' + (errors.banco_id? 'has-error' : '')
                  }
                  >
                    <Label htmlFor="banco_id">Banco *</Label>
                    <select
                      className="form-control mb-3"
                      name="banco_id"
                      ref={register}
                    >
                           <option value="" >Selecione o banco</option>
                      {
                          bancos && bancos.data.map((banco, index) => (

                          <option value={banco.id}>{banco.nome_banco} {banco.numero_banco}</option>

                          ))
                        }

                    </select>



                      {errors.banco_id && (
                        <div className="help-block">{errors.banco_id.message}</div>
                      )}
                    </div>
                    </Col>
                    </Row>

                    <button
                  type="submit"
                  color="primary"
                  className="btn btn-primary"
                >
                  {isLoading ? 'Carregando...' : 'Adicionar Conta'}
                </button>
               </CardBody>
            </Form>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default ContaBancaria;
