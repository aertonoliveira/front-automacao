/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {index} from '../../../config/pluginsInit';
import {Container,Row, CardBody,Col,Card,FormGroup,Input} from 'reactstrap';
import SideBar from './sidebar';
import AddTodo from './addTodo';
import Table from '../../../containers/Table';
class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            heading:[
                {
                    id:"todo-task1",
                    title:"Secrat Project",
                    class:"active",
                    list:[
                        'All Task',
                        'People',
                        'Files',
                        'Statistics'
                    ]
                },
                {
                    id:"todo-task2",
                    title:"Nike Mobile App",
                    class:'',
                    list:[
                        'All Task',
                        'People',
                        'Files',
                        'Statistics'
                    ]
                },
                {

                    id:"todo-task3",
                    title:"New Portfolio Site",
                    class:'',
                    list:[
                        'People',
                        'Files',
                        'Statistics'
                    ]
                }
            ],
            
        };
    }

    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
    }

    render() {
        return (
            <>
            <Container>
                <Row>
                    <Col lg={3}>
                        <Card className="iq-card"> 
                            <CardBody className="iq-card-body">
                                <div className="iq-todo-page">
                                    <form className="position-relative">
                                        <div className="form-group mb-0">
                                            <input type="text" className="form-control todo-search" id="exampleInputEmail002"  placeholder="Search" />
                                            <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                                        </div>
                                    </form>
                                    <div className="add-new-project mt-3 mb-3">
                                        <a href="!#;" className="d-block nrw-project"><i className="ri-add-line mr-2"></i>add Project</a>
                                    </div>
                                    <SideBar
                                            heading ={this.state.heading}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={9}>
                        <Row>
                            <Col sm={12}>
                                <Card className="iq-card">
                                    <CardBody className="iq-card-body ">
                                        <AddTodo 
                                        />
                                    </CardBody>
                                </Card>
                                <Card className="iq-card">
                                    <form className="position-relative">
                                        <FormGroup role="group" className="form-group mb-0" id="form">
                                            <div className="bv-no-focus-ring">
                                                <Input type="text" placeholder="Search" className="todo-search bg-white form-control" id="form" />
                                            </div>
                                        </FormGroup>
                                    </form>
                                </Card>
                            </Col>
                            <Col>
                                <Table />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}

export default Index;
