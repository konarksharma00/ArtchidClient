export const CONN_TEST = 'connTest';

export { signup , SIGNUP, login, LOGIN } from './userAuth'; 


export function connTest(){
    event.stopPropagation()
    const request = axios.get(`${rootUrl}/connTest`);
    return {
        type :CONN_TEST,
        payload : request
    }
}
