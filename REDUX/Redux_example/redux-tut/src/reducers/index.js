import  changeNumber  from "./upDown";

import changeBackground from "./chanBack";

import changeName from "./ChangeName";

import {combineReducers} from 'redux';

const rootReducers = combineReducers({changeNumber,changeBackground,changeName}) 


export default rootReducers;
