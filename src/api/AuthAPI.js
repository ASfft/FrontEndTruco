import APIHelper from "./APIHelper";

export default class AuthAPI {

    static login = (username, password) => {
        return APIHelper.post('/auth/login', {username: username, password: password})
    };

    static register = (username, password) => {
        return APIHelper.post('/auth/register', {username: username, password: password})
    };

    static anonLogin = () => {
        return APIHelper.get('/auth/anon')
    }
}