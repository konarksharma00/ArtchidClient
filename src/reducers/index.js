import { combineReducers } from 'redux';
import  SampleReducer from './sampleReducer';

const rootReducer = combineReducers({
  sampleData:SampleReducer
});    

export default rootReducer;
