import { CONN_TEST } from '../actions';

export default function(state ={} ,action){
  switch (action.type){
    case CONN_TEST:
          return {
            ...state, 'msg':action.payload.data
          }
        break;
    default:
    return state;
  }
}