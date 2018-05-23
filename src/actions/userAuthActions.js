import axios from 'axios';
import { actionCreator } from '../utils';
export const SIGNUP = 'signup2';
export const LOGIN = 'login';
// export const signup = actionCreator(SIGNUP,"values");
export const login = actionCreator(LOGIN,"values");

const rootUrl = 'http://localhost:7777/api';
export function signup(values, callBack){
	// const payload = axios.post(`${rootUrl}/user/signup`, values)
	const payload = axios.post('https://jsonplaceholder.typicode.com/posts', values)
		.then((res)=>callBack(res))
		.catch((err)=>{
			console.log(err)
		});
    return {
        type :SIGNUP,
        payload : payload
    }
}
