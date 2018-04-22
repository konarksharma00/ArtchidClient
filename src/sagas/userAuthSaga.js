import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const rootUrl = 'http://localhost:7777/api';

export function* userAuthSaga(action) {
	console.log(' user auth fetch sagas!' + action.payload);
	const type = action.type
	try {
		// mock request below
		//  const payload = yield call (axios.post, 'https://jsonplaceholder.typicode.com/posts', action.payload)

		const payload = yield call(axios.post, `${rootUrl}/user/${type}`, action.payload)
		yield put({ type: `${type}done`, payload })
	} catch (error) {
		yield put({ type: "error", error })
	}
}

export function* watchSignUpAction() {
	yield takeEvery('signup', userAuthSaga)
	yield takeEvery('login', userAuthSaga)
}
