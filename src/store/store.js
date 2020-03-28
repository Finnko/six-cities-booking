import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from '../api/api';
import {Operation as DataOperation} from './reducers/data/data-reducer';
import rootReducer from './reducers/root-reducer';

const api = createAPI(() => {});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadOffers());

export {store};
