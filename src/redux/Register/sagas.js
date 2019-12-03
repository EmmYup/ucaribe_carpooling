/* eslint-disable */
import { put, call, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import api from '../../config/api';
import filterParams from '../../config/filterParams';

function* registerSaga({ payload }) {
    const { name, lastName, email, phone, password, type } = payload;

    try {
        const { data } = yield call(api.session.signup, {
            name,
            lastName,
            email,
            phone,
            password,
            type,
        });
    } catch {
        alert(`Error en los datos`);
    }
}

export default function* registerSagas() {
    yield takeLatest(actions.register.type, registerSaga);
}
