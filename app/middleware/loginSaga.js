import { put, takeLatest } from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';
import {
  LOGIN_FALSE,
  LOGIN_PERFORM,
  LOGIN_TRUE,
} from '../redux/actions/constants';

function* loginCall(data) {
  const { payload } = data;
  try {
    const fbParam = { email: payload.email, password: payload.password };
    const response = auth().signInWithEmailAndPassword(
      fbParam.email,
      fbParam.password,
    );
    console.log(response);
    yield put({
      type: LOGIN_TRUE,
      response,
    });
  } catch (e) {
    console.log(JSON.stringify(e));
    yield put({
      type: LOGIN_FALSE,
      response: null,
    });
  }
  // auth()
  //   .signInWithEmailAndPassword(payload.email, payload.password)
  //   .then((data) => {
  //     console.log('Successful sign in', data);
  //     yield put({
  //       type: LOGIN_TRUE,
  //       response: data
  //     })
  //   })
  //   .catch(() => {
  //     yield put({
  //       type: LOGIN_FALSE,
  //       response: null
  //     })
  //   });
}

export default function* loginSaga() {
  yield takeLatest(LOGIN_PERFORM, loginCall);
}
