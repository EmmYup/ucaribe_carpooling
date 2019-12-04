/* eslint-disable */
import { put, call, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import api from '../../config/api';
import Alert from '../../components/Alert/index';

function* loginSaga({ payload }) {
    const { email, password } = payload;
    try {
        const { data } = yield call(api.session.login, { email, password });
    } catch {
        yield put(actions.setAlert());
    }
}

export default function* loginSagas() {
    yield takeLatest(actions.login.type, loginSaga);
}
