import {combineReducers} from 'redux';
import simpleReducer from './simpleReducer';

const rootReducer = combineReducers({
    insurance: simpleReducer
});

export default rootReducer;