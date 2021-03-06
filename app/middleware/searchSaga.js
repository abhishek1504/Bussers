import {put, takeLatest} from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';
import {GET_DATA} from '../redux/actions/constants';

function* getItemsCall() {}

export default function* getItemsSagas() {
  yield takeLatest(GET_DATA, getItemsCall);
}
