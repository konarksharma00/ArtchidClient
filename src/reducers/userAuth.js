import { SIGNUP, LOGIN } from '../actions';

export default function(state ={} ,action){
  switch (action.type){
    case 'signupdone':
          return {
            ...state, 'response':action.payload
          }
        break;
    case 'logindone':
          return{
            ...state, 'response':action.payload
          }
        break  
    default:
    return state;
  }
}