import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  setVisibilityFilter
} from "../actions/actionCreator";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../actions/actionsTypes";
import { bindActionCreators } from "redux";
import {Container,Row, CardBody,Col,Card,Form,FormGroup,Input,Button} from 'reactstrap';

class Table extends Component {
  render() {
    return (
      <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12">
         <Col sm={12}>
            <div className="iq-card">
                <div className="iq-card-body p-0">
                    <ul className="todo-task-lists m-0 p-0">
                   
                    {this.props.todos.map(todo => (
                       <li key={todo.id} className="d-flex align-items-center p-3">
                          <div className="user-img img-fluid"><img src={ require("../../src/assets/images/user/02.jpg") } alt="story-img" className="rounded-circle avatar-40" /></div>
                            <div className="media-support-info ml-3">
                                <h6 className="d-inline-block" style={{ textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}{todo.completed === true ? "(completed)" : ""}</h6><span className="badge badge-warning ml-3 text-white">{todo.radio}</span>
                                <p className="mb-0">{todo.usertext}</p>
                            </div>
                       
                       <div className="iq-card-header-toolbar d-flex align-items-center">
                            <input type="checkbox"
                              className="fas fa-check-circle"
                              onClick={() => this.props.toggleTodo(todo.id)}
                              style={{ color: "white", fontSize: "20pt" }}
                            />
                       </div>
                     </li>
                    ))}
                     
                    </ul>
                </div>
            </div>
          </Col>
      </div>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
 };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTodo,
      toggleTodo,
      setVisibilityFilter
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
