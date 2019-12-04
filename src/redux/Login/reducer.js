import actions from './actions';

const initialState = { showAlert: false };

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case actions.setAlert.type:
            return { ...state, showAlert: !state.showAlert };
        default:
            return state;
    }
}

export default reducer;
