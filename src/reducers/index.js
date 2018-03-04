import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import  SampleReducer from './sampleReducer';
import SignUpReducer from './signupReducer';

const rootReducer = combineReducers({
  sampleData:SampleReducer,
  form:formReducer,
  signupData:SignUpReducer
});    

export default rootReducer;
