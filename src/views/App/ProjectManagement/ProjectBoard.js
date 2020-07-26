/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import {index} from "../../../config/pluginsInit";
import { Container, Row,Col,Card,CardBody,Modal,ModalHeader,Button,ModalFooter,ModalBody,Label,Input ,FormGroup} from 'reactstrap';
class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            modal:false,
            setModal:false,
            setTaskModal:false,
            modalTask:false,
            addTeskIndex: 0,
            user: {
                title:'',
            },
            boards:[
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
                      { id: 1, name: 'Juan', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', status: 0, date: '02 jan 2020' }
                    ]
                  }
            ],
            colors:[
                'bg-primary',
                'bg-success',
                'bg-warning',
                'bg-info',
                'bg-danger'
            ],
            
        }
    }
    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
    }
    toggleModal = () => {
        const current = this.state.modal;
        this.setState({
                modal: !current
        });
    };
    toggleTaskModal = (index1) => {
        const current = this.state.modalTask;

        this.setState({
            modalTask: !current,
            addTeskIndex: index1
        });
    };
    addBoard = (evt) =>{
        evt.preventDefault();
        const board = this.state.boards;
        let addtask = this.state.addtask;
        let length = this.state.boards.length;
        let id = length + 1;
        var boards = board.push(
            {
                id: id,
                title:addtask,
                color:this.state.colors[Math.floor(Math.random() * this.state.colors.length)],
            }
        );
        this.setState({board:boards});
        this.state.modal = false;
    };
  
    updateInput = (evt) =>{
        this.setState({
            addtask: evt.target.value,
        });
    }

    addTask = (evt) =>{
        evt.preventDefault();
       
        let index = this.state.addTeskIndex;
        let task = this.state.task;
        let des = this.state.des;
        let checkbox = this.state.check;
        let date = this.state.date;

        let findData = this.state.boards.indexOf(index);
        if (findData !== -1) {
            this.state.boards.list[index] = task;
          } else {
            let length = this.state.boards[index].length;
            let id = length + 1;
            const board = this.state.boards[index].list;
            var boards = board.push(
                {
                    id: id,
                    name:task,
                    description:des,
                    status:checkbox,
                    date:date
                }
            );
            this.setState({board:boards});    
            this.state.modalTask = false;
          }
        
    }
    updateTaskInput = (evt) =>{
        this.setState({
            task: evt.target.value,
        });
    }
     descrption = (evt) =>{
        this.setState({
            des: evt.target.value,
        });
    }
    checkbox = (evt) =>{
        this.setState({
            check: evt.target.value,
        });
    }
    date = (evt) =>{
        this.setState({
            date: evt.target.value,
        });
    }
    onDragStart = (e, fromList) => {
        console.log(`what a drag!`)
        const dragInfo = {
          taskId: e.currentTarget.id,
          fromList: this.state.boards
        }
      console.log(dragInfo)
        localStorage.setItem('dragInfo', JSON.stringify(dragInfo));
      }
    onDrop = (e, listNum) => {
          console.log('s')
        //get the dropped task card from localStorage, 
        const droppedTask = localStorage.getItem('dragInfo');
        const parsedDragInfo = JSON.parse(droppedTask)
        const rawLS = localStorage.getItem('lists');
        const parsedLS = JSON.parse(rawLS);
        
        //get task cards array, get rid of moved card, and put a new card
        // in the list where it was dropped
        const cardsArray = parsedLS[parsedDragInfo.fromList].cards
        const taskCard = cardsArray.find(card => card.timeId === parsedDragInfo.taskId)
        const indexOfCard = cardsArray.findIndex(card => card.timeId === parsedDragInfo.taskId)
        parsedLS[parsedDragInfo.fromList].cards.splice(indexOfCard, 1)
        parsedLS[listNum].cards.push({...taskCard, listNumber: parseInt(listNum)})
       
        //sync the state and localStorage
        this.setState({
          boards: parsedLS
        });
        localStorage.setItem('boards', JSON.stringify(parsedLS)); 
      }
    render() {
        const { boards } = this.state;
    return (
    <>
        <Container fluid={true}>
            <div className="row">
                <div className="col-12">
                    <div className="iq-card">
                        <div className="row d-flex align-items-center mb-2">
                            <div className="col-md-9">
                                <div className="d-flex align-items-center">
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
                            <Button color="primary"  onClick={this.toggleModal}>
                                New Board
                            </Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                                <form noValidate >
                                    <ModalHeader>Add Project <span className="text-danger">*</span></ModalHeader>
                                    <ModalBody>
                                            <div className='form-group' >
                                                <label className="form-control-label">Name</label>
                                                <input id="title" type="text"
                                                    placeholder="Enter Project Name"
                                                    onChange={this.updateInput}
                                                    className="form-control"
                                                />
                                            </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.addBoard}>Save Project</Button>{' '}
                                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                                    </ModalFooter>
                                </form>
                            </Modal>
                        </div>
                    </Row>
                    <Row>
                        <Col md={12} className="track" >
                            {
                                boards.map((item,index1)=>(
                                    <Card className="bg-transparent shadow-none mr-3 w-25 iq-card"  key={index1}>
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
                                                        item.list ?  item.list.map((i,index)=>((
                                                        <Card className="iq-card" draggable="true" key={index} onDragStart={this.onDragStart} id={[i.id]}>
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
                                                        )) )
                                                        :
                                                        (<div></div>)

                                                    }
                                                </div>
                                            <Button color="primary" className="btn btn-lg btn-block" onClick={() => { this.toggleTaskModal(index1) } }>
                                                Add Item
                                            </Button>
                                            <Modal isOpen={this.state.modalTask} toggle={this.toggleTaskModal} >
                                                <form noValidate >
                                                    <ModalHeader>Add Project <span className="text-danger">*</span></ModalHeader>
                                                    <ModalBody>
                                                        <div className="position-relative">
                                                            <div className='form-group' >
                                                                <label className="form-control-label">Name</label>
                                                                <input id="title" type="text"
                                                                    placeholder="Enter Project Name"
                                                                    onChange={this.updateTaskInput}
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="position-relative">
                                                            <div className='form-group' >
                                                                <label className="form-control-label">Description</label>
                                                                <input id="description" type="text"
                                                                    placeholder="Enter Project Name"
                                                                    onChange={this.descrption}
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="position-relative">
                                                            <div className='form-group' >
                                                                <label className="form-control-label">Date</label>
                                                                <input id="date" type="date"
                                                                    placeholder="Enter Project Name"
                                                                    onChange={this.date}
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="position-relative">
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input type="radio" name="radio1" id="low" value="low"  onChange={this.checkbox}/>{' '}
                                                                        Low
                                                                </Label>
                                                            </FormGroup>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input type="radio" name="radio1" id="high" value="high"  onChange={this.updateTaskInput} />{' '}
                                                                High
                                                                </Label>
                                                            </FormGroup>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input type="radio" name="radio1" id="critical" value="critical"  onChange={this.updateTaskInput}  />{' '}
                                                                Critical
                                                                </Label>
                                                            </FormGroup>
                                                        </div>
                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <Button color="primary" onClick={this.addTask}>Save Project</Button>{' '}
                                                        <Button color="secondary" onClick={this.toggleTaskModal}>Cancel</Button>
                                                    </ModalFooter>
                                                </form>
                                            </Modal>
                                        </CardBody>
                                    </Card>
                                ))
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
        )
    }
}

export default Index;
