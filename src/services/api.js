import axios from 'axios';
//reverse tcp:3333 tcp:3333
const api = axios.create({
    baseURL: 'http://10.10.2.2:3333',
});

export default api;