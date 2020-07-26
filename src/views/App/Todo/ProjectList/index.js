/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {connect} from "react-redux";
import {
    getCategories,
    getProjects,
    selectedCategoryIndex,
    selectedProjectIndex
} from "../../../../store/selectors/todoSelector";
import { Formik } from 'formik';
import * as Yup from "yup";
import uuid from 'react-uuid';
import { bindActionCreators } from 'redux'
import { addProjectAction, selectedProjectAction, selectedCategoryAction } from "../../../../store/actions/projectAction";

function mapStateToProps(state) {
    return {
        selectedProject: selectedProjectIndex(state),
        projects: getProjects(state),
        selectedCategory: selectedCategoryIndex(state),
        categories: getCategories(state)
    };
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            addProjectAction,
            selectedProjectAction,
            selectedCategoryAction
        },
        dispatch
    )
})

class Index extends React.Component {

    state = {
        searchProject: '',
        modal: false
    };

    toggleModal = () => {
        this.setState({modal: !this.state.modal});
    }

    render() {
        return (
            <Card className={'iq-card'}>
                <CardBody className={'iq-card-body'}>
                    <div className="iq-todo-page">
                        <form className="form-group position-relative">
                            <div className="mb-0">
                                <input type="text"
                                        className="form-control todo-search"  placeholder="Search"
                                        onChange={ (e) =>
                                            this.setState({searchProject: e.target.value})
                                        } />
                                <a className="search-link" href="#">
                                    <i className="ri-search-line"></i>
                                </a>
                            </div>
                        </form>
                        <div className="add-new-project mt-3 mb-3">
                            <a href='#' className="d-block nrw-project" onClick={this.toggleModal}>
                                <i className="ri-add-line mr-2"></i> Add Project
                            </a>
                        </div>
                        <ul className="todo-task-list p-0 m-0">
                            {this.props.projects.filter(project => project.name.toLowerCase().includes(this.state.searchProject.toLowerCase()))
                                .map((project, projectIndex) => {
                                return <li key={projectIndex}>
                                    <a href='#' onClick={ () => this.props.selectedProjectAction(projectIndex) }>
                                        <i className="ri-stack-fill mr-2"></i> { project.name }
                                    </a>
                                    <ul className={'sub-task mt-2 p-0 '+
                                        (this.props.selectedProject === projectIndex ? 'show' : '')}>

                                        {this.props.categories.map((category, categoryIndex) => {
                                            return <li key={categoryIndex} className={
                                                (this.props.selectedCategory === categoryIndex ? 'active' : '')
                                            }>
                                                <a href='#' onClick={ () => this.props.selectedCategoryAction(categoryIndex) }>
                                                    <i className={ 'ri-checkbox-blank-circle-fill text-'+category.color }></i>
                                                    { ' ' + category.name }
                                                    <span className={'badge ml-2 float-right badge-'+category.color}>
                                                        { category.taskNewCount }
                                                    </span>
                                                </a>
                                            </li>
                                        })}



                                    </ul>
                                </li>
                            })}
                        </ul>
                    </div>
                </CardBody>
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <Formik
                        initialValues={{ name: '' }}
                        onSubmit={async values => {
                            await new Promise(resolve => setTimeout(resolve, 500));
                            values.id = uuid();
                            this.props.addProjectAction(values);

                            this.toggleModal();
                        }}
                        validationSchema={
                            Yup.object().shape({
                                name: Yup.string().required("Required")
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
                                <ModalHeader>Add Project <span className="text-danger">*</span></ModalHeader>
                                <ModalBody>
                                    <div className="position-relative">
                                        <div className='form-group' >
                                            <input id="name" type="text"
                                                   className={'form-control '+
                                                    (errors.name ? 'is-invalid' : '')}
                                                   required
                                                   placeholder="Enter Project Name"
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                                   value={values.name} />
                                            <div className="invalid-feedback">
                                                <span>Project name is required.</span>
                                            </div>
                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" disabled={isSubmitting}>Save Project</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                                </ModalFooter>
                            </form>
                        )}
                    </Formik>

                </Modal>
            </Card>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
