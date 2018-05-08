import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const rootUrl = 'http://localhost:7777/api';

export function* userAuthSaga(action) {
	console.log(' user auth fetch sagas!' + action.values);
	const type = action.type
	try {
		// mock request below
		//  const payload = yield call (axios.post, 'https://jsonplaceholder.typicode.com/posts', action.values)

		const payload = yield call(axios.post, `${rootUrl}/user/${type}`, action.values)
		yield put({ type: `${type}done`, payload })
	} catch (error) {
		yield put({ type: "error", error })
	}
}

export function* watchSignUpAction() {
	yield takeLatest('signup', userAuthSaga)
	yield takeLatest('login', userAuthSaga)
}
