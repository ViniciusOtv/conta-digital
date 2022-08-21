import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:5000/rewards/api',
});

export { api };