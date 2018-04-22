import { call, put } from 'redux-saga/effects';

const rootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = '?key=thetest1243'

import axios from 'axios';

export function* fetchData() {
  try {
     const response = yield axios.get(`${rootUrl}/posts${apiKey}`)
     console.log('fetch sagas!')
     yield put({type: "connTest", response})
  } catch (error) {
     yield put({type: "connTest", error})
  }
};