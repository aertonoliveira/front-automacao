import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from 'redux-thunk';

export * from '../helpers';
export default createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);