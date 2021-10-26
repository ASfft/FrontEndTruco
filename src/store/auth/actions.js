import * as actions from './pure-actions';


export function login(user) {
    return (dispatch) => {
        dispatch(actions.loginSuccessful(user));
    }
}


export function logout() {
    return (dispatch) => {
        dispatch(actions.logoutSuccessful());
    }
}
