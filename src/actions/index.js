import axios from 'axios';

export const CONN_TEST = 'connTest';
export const SIGNUP = 'signup';
export const LOGIN = 'login';

const rootUrl = 'http://localhost:7777/api';

export function connTest(){
    event.stopPropagation()
    const request = axios.get(`${rootUrl}/connTest`);
    return {
        type :CONN_TEST,
        payload : request
    }
}

export function signup(values, cb){
    event.stopPropagation()
    const request = axios.post(`${rootUrl}/user/signup`, values).then(
        (response)=>{
            if (response.status == 200){
                cb(response)
            }
        }
    ).catch((e)=>{
        cb(e)
    });

    return {
        type :SIGNUP,
        payload : request
    }
}

export function login(values, cb){
    event.stopPropagation()
    const request = axios.post(`${rootUrl}/user/login`, values).then(
        ()=>cb()
    ).catch((e)=>{
        cb(e)
    })
    return {
        type :LOGIN,
        payload : request
    }
}

// Reliable API testing source in your local server is not set yet

// const rootUrl = 'http://reduxblog.herokuapp.com/api';
// const apiKey = '?key=thetest1243'


// export function connTest() {
//     const request = axios.get(`${rootUrl}/posts${apiKey}`)
//     return {
//         type :CONN_TEST,
//         payload: request
//     };
// }

