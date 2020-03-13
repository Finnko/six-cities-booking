import {combineReducers} from 'redux';
import dataReducer from './data/data-reducer';

const rootReducer = combineReducers({
  data: dataReducer
});

export default rootReducer;
