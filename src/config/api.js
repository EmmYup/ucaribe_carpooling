import axios from 'axios';

const API_URL = 'http://localhost:1337';

axios.defaults.baseUrl = API_URL;

const { post } = axios;

export default {
    session: {
        login: credential => post('/login', { ...credential }),
        signup: ({ type, ...params }) => post(`/user/${type}`, { ...params }),
    },
};
