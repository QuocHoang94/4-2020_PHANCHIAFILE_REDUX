import myvalue from './myvalue';
import {combineReducers} from 'redux';

const myReducer = combineReducers({
    needy :myvalue
})
export default myReducer;