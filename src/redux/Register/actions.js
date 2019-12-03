import createActions from '../../config/createActions';

const prefix = '@ucaribe_carpooling/register';

const types = ['REGISTER'];

const { register } = createActions(prefix, types);

export default { register };
