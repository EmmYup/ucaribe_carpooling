/* eslint-disable */
import { put, call, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import api from '../../config/api';

function* loginSaga({ payload }) {
    const { email, password } = payload;
    try {
        const { data } = yield call(api.session.login, { email, password });
    } catch {
        alert(`Credenciales incorrectas`);
    }
}

export default function* loginSagas() {
    yield takeLatest(actions.login.type, loginSaga);
}
