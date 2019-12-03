import createActions from '../../config/createActions';

const prefix = '@ucaribe_carpooling/login';

const types = ['LOGIN'];

const { login } = createActions(prefix, types);

export default { login };
