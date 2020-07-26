import React from 'react';
import { Container, CardTitle ,Row,Col,Card,CardBody,Modal,ModalHeader,Button,ModalFooter,ModalBody,Label,Input ,Form,FormGroup} from 'reactstrap';
const TaskList = (props) => {
    const { list } = props;
    return (
        <div>
          {list.map((i, index) => {
            return <Card>
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
            </Card>;
          })}
        </div>
      );
  };  
  export default TaskList;