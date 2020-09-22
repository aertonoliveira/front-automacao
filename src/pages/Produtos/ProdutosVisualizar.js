import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Card, CardTitle, CardBody, Form } from 'reactstrap';

const ProdutosVisualizar = () => {
  const produtoId = useParams().id;
  return (
    <>
      <div className="row">
        <Col sm="12" lg="12">
          <Card className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <CardTitle className="card-title">
                <h4>Visualizando o produto de id: {produtoId}</h4>
              </CardTitle>

              <Link className="btn btn-primary float-right" to="/produtos">
                Voltar
              </Link>
            </div>
            <Form>
              <CardBody className="iq-card-body">
                <Row>
                  <Col sm={12}></Col>
                </Row>
              </CardBody>
            </Form>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default ProdutosVisualizar;
