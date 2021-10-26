import {LOGIN_SUCCESSFUL, LOGOUT} from "./action-types";

const initialState = {
    id: null,
    name: null,
};


export default function reducer(state = initialState, action) {
    if (!action) {
        return state;
    }
    let newState;
    switch (action.type) {
        case LOGIN_SUCCESSFUL:
            newState = {...state, ...action.payload.user};
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            break;
        case LOGOUT:
            newState = {...state, id: null, user: null};
            localStorage.removeItem('user');
            break;
        default:
            newState = state;
            break;
    }
    return newState;
}