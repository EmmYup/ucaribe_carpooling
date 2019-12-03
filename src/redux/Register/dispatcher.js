import actions from './actions';

const dispatcher = dispatch => ({
    onRegister: params => dispatch(actions.register(params)),
});

export default dispatcher;
