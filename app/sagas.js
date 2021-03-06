import { fork, all } from 'redux-saga/effects';
import loginSaga from './middleware/loginSaga';
// import contentSaga from './middleware/contentSagas';
// import loadInitialAppConfigSaga from './middleware/appStateSagas';
// import OrderservSaga from './middleware/orderServSaga';
// import marketConfigSaga from './middleware/marketConfigSagas';
// import moreSaga from './middleware/moreSaga';
// //import loadInitialAppConfigSaga from './middleware/appStateSagas';

export default function* root() {
  yield all([
    fork(loginSaga),
    // fork(contentSaga),
    // fork(loadInitialAppConfigSaga),
    // fork(OrderservSaga),
    // fork(marketConfigSaga),
    // fork(moreSaga),
    // fork(loadInitialAppConfigSaga),
  ]);
}
