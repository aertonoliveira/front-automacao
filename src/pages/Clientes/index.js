/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from '../../hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import { recuperarSenhaRequest } from '../../store/modules/auth/actions';
import { Row, Col, Card, div, CardTitle, CardBody, CardText, Form, UncontrolledCollapse, FormGroup, Label, Input, Button } from 'reactstrap';

const Clientes = () => {
  // Validação
  let validationSchema = useMemo(
    () =>
      yup.object({
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
  const isLoading = useSelector((state) => state.auth.loading);

  const handleLogin = ({ email }) => {
    console.log(email)
    //dispatch(recuperarSenhaRequest(email));
  };




    return (
      <>
      <div className="row">

      <Col sm={12} lg={12}>
        <Card className={"iq-card"}>
            <div className={"iq-card-header d-flex justify-content-between"}>
                <CardTitle className={"card-title"}><h4>Basic Form</h4></CardTitle>
            </div>
            <Form className="mt-4" onSubmit={handleSubmit(handleLogin)}>
            <CardBody className={"iq-card-body"}>
            <Row>
              <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="exampleEmail">Nome Completo</Label>
                    <Input type="text" placeholder="Nome completo" name="email"  className={"form-control"} />
                </FormGroup>
              </Col>
              <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="examplePassword">Email</Label>
                    <Input type="text" placeholder="Email" name="password" ref={register}   className={"form-control"} />
                </FormGroup>
                </Col>
                <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="examplePassword">CPF</Label>
                    <Input type="string" placeholder="CPF" name="password"  className={"form-control"} />
                </FormGroup>
                </Col>
                <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="examplePassword">RG</Label>
                    <Input type="string" placeholder="RG" name="password" className={"form-control"} />
                </FormGroup>
                </Col>
                </Row>

                <Row>

                <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="exampleEmail">Data de Emissão</Label>
                    <Input type="date" className="form-control" />
                </FormGroup>
                </Col>
                <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="examplePassword">Orgão Emissor</Label>
                    <Input type="text" placeholder="Orgão Emissor" name="password"  className={"form-control"} />
                </FormGroup>
                </Col>
                <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="examplePassword">Data de Nascimento</Label>
                    <Input type="date" className="form-control" id="exampleInputdate"/>
                </FormGroup>
                </Col>
                <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="exampleEmail">Estado Civil</Label>
                    <Input type={"select"} className="form-control mb-3" bsSize="lg">
                    <option defaultValue="Solteiro">Solteiro</option>
                    <option defaultValue="Casado">Casado</option>
                    <option defaultValue="Divorciado">Divorciado</option>
                    <option defaultValue="Viúvo">Viúvo</option>
                    </Input>
                </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="examplePassword">Nome da Mãe</Label>
                    <Input type="text" placeholder="Nome da Mãe" name="password"  className={"form-control"} />
                </FormGroup>
                </Col>
                <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="examplePassword">Gênero</Label>
                    <Input type="text" placeholder="Gênero" name="password"  className={"form-control"} />
                </FormGroup>
                </Col>
                <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="exampleEmail">Telefone</Label>
                    <Input type="number" placeholder="(55)5555-5555" name="password"  className={"form-control"} />
                </FormGroup>
              </Col>
              <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="examplePassword">Celular</Label>
                    <Input type="number" placeholder="(55)5555-5555" name="password"  className={"form-control"}  />

                </FormGroup>
                </Col>
              </Row>


                <Row>
                <Col sm={12} lg={6}>
                <FormGroup>
                    <Label htmlFor="examplePassword">Senha</Label>
                    <Input type="password" name="password" className="form-control" />
                </FormGroup>
                </Col>
                <Col sm={12} lg={6}>
                <FormGroup>
                    <Label htmlFor="examplePassword">Confirme senha</Label>
                    <Input type="password" name="password" className="form-control"/>
                </FormGroup>
                </Col>
                </Row>


              <Row>
                <Col sm={12} lg={4}>
                <FormGroup>
                    <Label htmlFor="examplePassword">Profissão</Label>
                    <Input type="string" placeholder="Profissão" name="password" className={"form-control"} />
                </FormGroup>
                </Col>
                <Col sm={12} lg={4}>
                <FormGroup>
                    <Label htmlFor="exampleEmail">CEP</Label>
                    <Input type="string" placeholder="CEP" name="email"  className={"form-control"} />
                </FormGroup>
                </Col>
                <Col sm={12} lg={4}>
                <FormGroup>
                    <Label htmlFor="examplePassword">Endereço</Label>
                    <Input type="text" placeholder="Endereço" name="password"  className={"form-control"} />
                </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="examplePassword">Complemento</Label>
                    <Input type="text" placeholder="Complemento" name="complemento" className={"form-control"} />
                </FormGroup>
                </Col>
                <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="exampleEmail">Número</Label>
                    <Input type="string" placeholder="Número" name="Número"  className={"form-control"} />
                </FormGroup>
                </Col>
                <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="examplePassword">Bairro</Label>
                    <Input type="text" placeholder="Bairro" name="bairro"  className={"form-control"} />
                </FormGroup>
                </Col>
                <Col sm={12} lg={3}>
                <FormGroup>
                    <Label htmlFor="examplePassword">Estado</Label>
                    <Input type="text" placeholder="Estado" name="estado"  className={"form-control"} />
                </FormGroup>
                </Col>
              </Row>

              <button
              type="submit"
              className="btn btn-primary float-right"
              disabled={isLoading ? true : false}
            >
              {isLoading ? 'Carregando...' : 'Entrar'}
            </button>

                <button type="submit" color={"primary"}  className="btn btn-primary">Submit</button>
                <input type="submit" value="enviar"/>
                <button className={"iq-bg-danger"} color=" ">cancle</button>
            </CardBody>
           </Form>
            </Card>

        </Col>

      </div>
    </>
    );
    }



export default Clientes;
