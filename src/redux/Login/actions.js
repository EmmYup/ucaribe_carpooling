import createActions from '../../config/createActions';

const prefix = '@ucaribe_carpooling/login';

const types = ['LOGIN', 'SET_ALERT'];

const { login, setAlert } = createActions(prefix, types);

export default { login, setAlert };
