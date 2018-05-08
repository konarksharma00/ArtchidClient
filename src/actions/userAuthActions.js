import { actionCreator } from '../utils';
export const SIGNUP = 'signup';
export const LOGIN = 'login';
export const signup = actionCreator(SIGNUP,"values");
export const login = actionCreator(LOGIN,"values");
