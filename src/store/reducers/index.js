import { combineReducers } from 'redux';
import  todoReducer  from './todoReducer';
import { authentication } from './authReducer/authentication.reducer';
import { registration } from './authReducer/registration.reducer';
import { users } from './authReducer/users.reducer';
import { alert } from './authReducer/alert.reducer';
import auth from './fireAuth/auth'

const rootReducer = combineReducers({
    todo: todoReducer,
    authentication,
    registration,
    users: users,
    alert,
    auth

});

export default rootReducer;