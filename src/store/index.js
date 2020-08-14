import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";

// import { persistStore } from "redux-persist";
// import persistReducers from "./persistReducers";

import createRootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
        typeof window === "object" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // console.tron.createEnhancer()
    // other store enhancers if any
);

const store = createStore(createRootReducer(history), enhancer);

// const store = createStore(persistReducers(createRootReducer(history)), enhancer);
// const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store ;
