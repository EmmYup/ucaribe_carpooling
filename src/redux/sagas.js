import { all } from 'redux-saga/effects';
import loginSagas from './Login/sagas';
import registerSagas from './Register/sagas';

export default function* rootSaga() {
    yield all([loginSagas(), registerSagas()]);
}
