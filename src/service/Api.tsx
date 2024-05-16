import axios from "axios"

const api = axios.create({
    baseURL: "https://api.homologation.cliqdrive.com.br",
    headers: {
        'Accept': 'application/json;version=v1_web',
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;