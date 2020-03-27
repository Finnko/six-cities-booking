import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from '../api/api';
import rootReducer from './reducers/root-reducer';

const api = createAPI(() => {});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

export {store};
