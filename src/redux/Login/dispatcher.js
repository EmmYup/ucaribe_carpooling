import actions from './actions';

const dispatcher = dispatch => ({
    onLogin: params => dispatch(actions.login(params)),
    setAlert: () => dispatch(actions.setAlert()),
});

export default dispatcher;
