import { CONN_TEST } from '../actions';

export const sampleData = function(state ={} ,action){
  switch (action.type){
    case CONN_TEST:
          return {
            ...state, 'response':action.response
          }
        break;
    default:
    return state;
  }
}