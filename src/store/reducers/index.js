import { combineReducers } from 'redux';
import  todoReducer  from './todoReducer';
import { authentication } from './authReducer/authentication.reducer';
import { registration } from './authReducer/registration.reducer';
import { users } from './authReducer/users.reducer';
import { alert } from './authReducer/alert.reducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    authentication,
    registration,
    users: users,
    alert

});

export default rootReducer;