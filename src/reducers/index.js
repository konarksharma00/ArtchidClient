import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import  SampleReducer from './sampleReducer';
import userAuthReducer from './userAuth';

const rootReducer = combineReducers({
  sampleData:SampleReducer,
  form:formReducer,
  userAuthData:userAuthReducer
});    

export default rootReducer;
