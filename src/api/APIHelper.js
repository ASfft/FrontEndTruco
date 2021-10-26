import axios from 'axios';
import {store} from "../store";


const API = axios.create({
    baseURL: 'http://localhost:9000/',
    timeout: 60 * 1000,
    withCredentials: true,
});

API.interceptors.request.use((config) => {
    const userId = store.getState().user.id
    if (userId != null) {
        config.headers.Authorization = `Bearer ${userId}`;
    }
    return config;
}, function (err) {
    return Promise.reject(err);
});

export function handleAPIErrors(reject, error) {
    if (error.message === 'Network Error') {
        reject({msg: 'Verifique a sua conexão com a internet.', code: 1000})
    } else {
        if (!error.response || error.response.status >= 500) {
            reject({msg: "O servidor está em manutenção.", code: 500});
            return
        } else if (error.response.status === 401) {
            window.location.reload()
        }
        try {
            if (error.response.data.errors == null) {
                error.response.data.errors = {}
            }
            reject(error.response.data);
        } catch (e) {
            reject({msg: 'Erro inesperado. Por favor atualize a página.'})
        }
    }
}

export default class APIHelper {

    static get = (path, options) => {
        return new Promise((resolve, reject) => {
            API.get(path, options)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    handleAPIErrors(reject, error);
                })
        });
    };

    static post = (url, data, config) => {
        return new Promise((resolve, reject) => {
            API.post(url, data, config)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    handleAPIErrors(reject, error);
                })
        });
    };
}
