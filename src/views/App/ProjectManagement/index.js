/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useEffect} from 'react';
import {index} from '../../../config/pluginsInit';
import { Container, Row,Col,Card,CardBody,Modal,ModalHeader,Button,ModalFooter,ModalBody,Label,Input ,Form,FormGroup} from 'reactstrap';

const Index = props => {

            useEffect(() => {
                index();
            });
            const [modal, setModal] = useState(false);
            const [modal1, setModal1] = useState(false);
            const[defaultBoard]= useState(
                {
                    id: 0,
                    title: '',
                    color: '',
                    list: [
                       
                    ]
                  },
            );
            const[defaultTask]= useState(
                {
                  id: 0,
                  name: '',
                  description: '',
                  status: 0
                }
              );
            const [boards] = useState([
                {
                  id: 1,
                  title: 'Todo',
                  color: 'bg-primary',
                  list: [
                    { id: 1, name: 'John', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s', status: 0, date: '2020-01-1' },
                    { id: 2, name: 'Joao', description: ' Lstandard dummy text ever since the 1500s dummy text of the printing and', status: 2, date: '2020-01-3' }
                  ]
                },
                {
                  id: 2,
                  title: 'Planing',
                  color: 'bg-success',
                  list: [
                    { id: 1, name: 'Juan', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', status: 1, date: '2020-01-5' }
                  ]
                },
                {
                  id: 3,
                  title: 'Working',
                  color: 'bg-info',
                  list: [
                    { id: 1, name: 'Juan', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', status: 0, date: '2020-01-6' },
                    { id: 2, name: 'Edgard', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', status: 0, date: '2020-01-7' }
                  ]
                },
                {
                  id: 4,
                  title: 'Testing',
                  color: 'bg-warning',
                  list: [
                    { id: 1, name: 'Juan', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', status: 0, date: '2020-01-8' }
        
                  ]
                },
                {
                  id: 5,
                  title: 'Complete',
                  color: 'bg-danger',
                  list: [
                    { id: 5, name: 'Juan', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', status: 0, date: '02 jan 2020' }
                  ]
                }
            ]);
            const[colors]= useState([
                'bg-primary',
                'bg-success',
                'bg-warning',
                'bg-info',
                'bg-danger'
              ]);
             
             
            const toggleModal = () => setModal(!modal);
            const toggleModal1 = () => setModal1(!modal1);

            const saveBoard = (item) => {
                let board = boards.findIndex(b => b.id === item.id)
                if (board === -1) {
                  item.id = boards.length
                  item.color = colors[Math.floor(Math.random() * colors.length)]
                  boards.push(item)
                }
                
              };
             const saveTask = (item) => {
                // let index = boards.list.findIndex(task => task.id === item.id)
                // if (index !== -1) {
                //   boards.list[index] = item
                // } else {
                //     boards.list.push(item)
                // }
                
              };
            return (
                <>
                    <Container fluid={true}>
                        <div className="row">
                            <div className="col-12">
                                <div className="iq-card ">
                                    <div className="row d-flex align-items-center mb-2">
                                        <div className="col-md-9"><div className="d-flex align-items-center">
                                            <h4 className="mb-0 p-3 ml-2">Project Management</h4>
                                           
                                        </div>
                                    </div>
                                    <div className="text-right col-md-3">
                                        <button type="button" className="btn text-primary btn-none">
                                            <i className="ri-star-line font-size-24"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Container>
            
                    <Container fluid={true}>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    <div className="col-12 text-right mb-4">
                                        <Button color="primary"  onClick={toggleModal}>
                                            New Board
                                        </Button>
                                        <Form onSubmit = {saveBoard(defaultBoard)}>
                                            <Modal isOpen={modal} fade={false} toggle={toggleModal}>
                                                <ModalHeader toggle={toggleModal} className={"border-0"}>
                                                    <h5 className={"text-primary card-title"}>
                                                        New Board
                                                    </h5>
                                                </ModalHeader>
                                                <ModalBody>
                                                    <Label>Title</Label>
                                                    <Input type="text" name="title" />
                                                </ModalBody>
                                                <ModalFooter>
                                                <Button color="secondary" onClick={toggleModal}>
                                                    Close
                                                </Button>
                                                <Button color="primary">
                                                    Save Changes
                                                </Button>
                                                </ModalFooter>
                                            </Modal>
                                        </Form>
                                    </div>
                                  
                                </Row>
                                <Row>
                                    <Col md={12} className="track">
                                        {
                                            boards.map((item,index)=>(
                                                <Card className="bg-transparent shadow-none mr-3 w-25 iq-card" >
                                                <div className={"iq-card-header d-flex justify-content-between " +item.color}>
                                                    <div className="iq-header-title">
                                                        <h5 className="text-white">{item.title}</h5>
                                                    </div>
                                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                                        <i className="ri-ball-pen-line mr-0 font-size-18" role="button" tabIndex="0">
                                                            </i>
                                                    </div>
                                                </div>
                                                <CardBody className="card-body iq-card-body pro-bg-card">
                                                    <div>
                                                        {
                                                            item.list.map((i,index)=>(
                                                                <Card className="iq-card">
                                                                <div className="iq-card-header d-flex justify-content-between pro-task-bg-card">
                                                                    <div className="iq-header-title">
                                                                        <h5 className="card-title text-muted">{i.name}</h5>
                                                                        <h6 className="text-muted">{i.date}</h6>
                                                                    </div>
                                                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                                                        <a href="#" className="badge iq-bg-primary mr-2 p-2">Low</a>
                                                                    </div>
                                                                </div>
                                                                <CardBody className="card-body iq-card-body pro-task-bg-card">
                                                                    <p className="font-size-12">{i.description}</p>
                                                                    <div className="d-flex justify-content-between">
                                                                        <div>
                                                                            <i className="ri-ball-pen-line font-size-18" role="button" tabIndex="0"></i>
                                                                            <i className="ri-attachment-line font-size-18 ml-2"></i>
                                                                            <i className="ri-eye-line font-size-18 ml-2"></i>
                                                                            <span>
                                                                                <small>54</small>
                                                                            </span>
                                                                            <i className="ri-chat-4-line font-size-18 ml-2"></i>
                                                                            <span>
                                                                                <small>36</small>
                                                                            </span>
                                                                            <i className="ri-close-circle-line font-size-18 ml-2"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-2 progress" style={{"height": "4px"}}>
                                                                        <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" className="progress-bar iq-border-radius-10 bg-success" style={{"width": "40%"}}>
                                                                            <span> </span>
                                                                        </div>
                                                                        <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80" className="progress-bar iq-border-radius-10 bg-warning" style={{"width": "80%"}}>
                                                                            <span> </span>
                                                                        </div>
                                                                        <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" className="progress-bar iq-border-radius-10 bg-danger" style={{"width": "50%"}}>
                                                                            <span> </span>
                                                                        </div>
                                                                    </div>
                                                                </CardBody>
                                                            </Card>
                                                            ))
                                                        }
                                                      
                                                    </div>
                                                    <Button color="primary" className="btn btn-lg btn-block"  onClick={toggleModal1}>
                                                        Add Item
                                                    </Button>
                                                </CardBody>
            
                                            </Card>
                                            ))
                                        }
                                      
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Form onSubmit = {saveTask(defaultTask)}>
                            <Modal isOpen={modal1} fade={false} toggle={toggleModal1}>
                                <ModalHeader toggle={toggleModal1} className={"border-0"}>
                                    <h5 className={"text-primary card-title"}>
                                        New Task
                                    </h5>
                                </ModalHeader>
                                <ModalBody>
                                    <FormGroup>
                                        <Label for="exampleEmail">Name</Label>
                                        <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Description</Label>
                                        <Input type="text" name="password" id="examplePassword" placeholder="password placeholder" />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                                Low
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                           High
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                           Critical
                                        </Label>
                                    </FormGroup>
                                </ModalBody>
                                <ModalFooter>
                                <Button color="secondary" onClick={toggleModal1}>
                                    Close
                                </Button>
                                <Button color="primary">
                                    Save Changes
                                </Button>
                                </ModalFooter>
                            </Modal>
                        </Form>
                    </Container>
                </>
            );
       
    }

export default Index;
