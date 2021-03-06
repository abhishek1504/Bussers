import {LOGIN_PERFORM, LOGIN_TRUE} from './constants';

export function loginSaga(payload) {
  return {
    type: LOGIN_PERFORM,
    payload,
  };
}

export function loginSuccessAction(payload) {
  return {
    type: LOGIN_TRUE,
    response: payload,
  };
}
