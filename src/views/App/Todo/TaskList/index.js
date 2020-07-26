/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Select from 'react-select';
import {Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {
    selectedProject,
    selectedCategory, getTasks
} from "../../../../store/selectors/todoSelector";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addTaskAction, closedTaskAction} from "../../../../store/actions/taskAction";
import {Formik} from "formik";
import * as Yup from "yup";
import uuid from 'react-uuid';

function mapStateToProps(state) {
    return {
        project: selectedProject(state),
        category: selectedCategory(state),
        tasks: getTasks(state)
    };
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            addTaskAction,
            closedTaskAction,
        },
        dispatch
    )
})

const taskUsers = [
    {
        value: '1',
        label: 'Andy Mabbett'
    },
    {
        value: '2',
        label: 'Nik John'
    },
    {
        value: '3',
        label: 'Ag Bro'
    }
];

const categories = [
    {
        value: '2',
        label: 'People'
    },
    {
        value: '3',
        label: 'Files'
    },
    {
        value: '4',
        label: 'Statistics'
    }
];

const priorities = [
    'Expiring', 'Ending', 'Urgent'
];


class Index extends React.Component {
    state = {
        searchTask: '',
        modal: false,
        task: []
    };

    toggleModal = () => {
        this.setState({modal: !this.state.modal});
    }

    componentDidMount () {
        console.log(this.props.tasks)
        this.setState({task: this.props.tasks });
    }

    render() {
        return (
            <Row>
                <Col lg={12}>
                    <Card className={"iq-card"}>
                        <CardBody className={"iq-card-body"}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="todo-date d-flex mr-3">
                                    <i className={'ri-calendar-2-line mr-2  text-' + this.props.category.color}></i>
                                    <span>{ this.props.project.name }</span>
                                </div>
                                <div className="todo-notification d-flex align-items-center">
                                    {this.props.category.taskNewCount > 0 ?
                                        <div className="notification-icon position-relative d-flex align-items-center mr-3">
                                        <a href="#"><i className="ri-notification-3-line font-size-16"></i></a>
                                        <span className="bg-danger text-white">{this.props.category.taskNewCount}</span>
                                        </div> : ''
                                    }
                                    <button type="button" className="btn iq-bg-primary iq-waves-effect btn-lg" onClick={this.toggleModal}>
                                        Add Task
                                    </button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className={"iq-card"}>
                        <form className="position-relative">
                            <div role="group" className="form-group mb-0">
                                <div className="bv-no-focus-ring">
                                    <input type="text" placeholder="Search" name="todoTaskSearch"
                                           className="todo-search bg-white form-control"
                                           onChange={ (e) =>
                                               this.setState({
                                                   searchTask: e.target.value,
                                                   task: this.props.tasks.filter(task => e.target.value !== '' ? task.title.toLowerCase().includes(e.target.value.toLowerCase()) : task )
                                                })
                                           }
                                            />
                                </div>
                              </div>
                            </form>
                    </Card>
                </Col>
                <Col lg={12}>
                    <Card className={"iq-card"}>
                        <CardBody className={'iq-card-body p-0'}>
                            <ul className="todo-task-lists m-0 p-0">
                                {
                                    this.state.task.length > 0 ?
                                        this.state.task.map((task, taskIndex) => {
                                                return <li key={taskIndex} className={'d-flex align-items-center p-3 ' + (task.status ? '' : 'active-task')}>
                                                    <div className="user-img img-fluid">
                                                        <img src={require('../../../../assets/images/user/1.jpg')} alt="story-img" className="rounded-circle avatar-40" />
                                                    </div>
                                                    <div className="media-support-info ml-3">
                                                        <h6 className="d-inline-block">
                                                            {task.status ?
                                                                <span> { task.title } for { this.props.project.name } </span> :
                                                                <del> { task.title } for { this.props.project.name } </del>
                                                            }
                                                        </h6>
                                                        {
                                                            task.priority === 'Expiring' ?
                                                                <span className="badge badge-danger ml-3 text-white">{ task.priority }</span> :
                                                                (task.priority === 'Urgent' ?
                                                                    <span className="badge badge-info ml-3 text-white">{ task.priority }</span> :
                                                                    <span className="badge badge-primary ml-3 text-white">{ task.priority }</span>
                                                                )
                                                        }
                                                        <p className="mb-0">by { 'test user' }</p>
                                                    </div>
                                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" name="todoCheck" className="custom-control-input" id={task.id}
                                                                checked={!task.status}
                                                                onChange={ () => {
                                                                    this.props.closedTaskAction(task.id);
                                                                } }
                                                                    />
                                                            <label className="custom-control-label" htmlFor={task.id}></label>
                                                        </div>
                                                    </div>
                                                </li>
                                            }) : 
                                            (
                                                <li className={'d-flex align-items-center p-3 '}>
                                                    <h6>No Task Found</h6>
                                                </li>
                                            )
                                }
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <Formik
                        initialValues={{ title: '', userId: 1, categoryId: 1, priority: ''  }}
                        onSubmit={async values => {
                            await new Promise(resolve => setTimeout(resolve, 500));
                            values.id = uuid();
                            this.props.addTaskAction(values);

                            this.toggleModal();
                        }}
                        validationSchema={
                            Yup.object().shape({
                                title: Yup.string().required("Required")
                            })
                        }
                    >
                        {({
                              values,
                              errors,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting
                          }) => (
                            <form noValidate onSubmit={handleSubmit}>
                                <ModalHeader>Add Task <span className="text-danger">*</span></ModalHeader>
                                <ModalBody>
                                    <div className='form-group'>
                                        <label className={'d-block'}>Task Title <span className="text-danger">*</span></label>
                                        <input id="title" type="text"
                                               className={'form-control '+
                                               (errors.title ? 'is-invalid' : '')}
                                               required
                                               placeholder="Enter Task Title"
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.title} />
                                        <div className="invalid-feedback">
                                            <span>Task title is required.</span>
                                        </div>
                                    </div>

                                    <div className='form-group'>
                                        <label className={'d-block'}>Assigned To <span className="text-danger">*</span></label>
                                        <Select
                                            options={taskUsers}
                                            name={'userId'}
                                            value={values.userId}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <label className={'d-block'}>Category <span className="text-danger">*</span></label>
                                        <Select
                                            options={categories}
                                            name={'categoryId'}
                                            value={values.categoryId}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <label className={'d-block'}>Priority <span className="text-danger">*</span></label>
                                        {priorities.map((priority, priorityIndex) => {
                                            return <div className="custom-control custom-control-inline custom-radio">
                                                <input type="radio" name="priority" className="custom-control-input"
                                                       id={'radio_'+priorityIndex }
                                                       onChange={handleChange}
                                                       value={values.priority}
                                                />
                                                <label className="custom-control-label" htmlFor={'radio_'+priorityIndex }>
                                                    { priority }
                                                </label>
                                            </div>
                                        })}
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" disabled={isSubmitting}>Add Task</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                                </ModalFooter>
                            </form>
                        )}
                    </Formik>

                </Modal>
            </Row>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
