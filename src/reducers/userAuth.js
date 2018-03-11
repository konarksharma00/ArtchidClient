import { SIGNUP, LOGIN } from '../actions';

export default function(state ={} ,action){
  switch (action.type){
    case SIGNUP:
          return {
            ...state, 'response':action.payload
          }
        break;
    case LOGIN:
          return{
            ...state, 'response':action.payload
          }
        break  
    default:
    return state;
  }
}