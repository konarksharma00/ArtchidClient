import { createStore, combineReducers } from 'redux';
import  SampleReducer from './sampleReducer';

export default () => {
  const rootReducer = createStore(
    combineReducers({
        sampleData:SampleReducer
    })
  );

  return rootReducer;
};
