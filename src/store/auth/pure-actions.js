import * as type from "./action-types";


export const loginSuccessful = (user) => (
    {type: type.LOGIN_SUCCESSFUL, payload: {user: user}}
);

export const logoutSuccessful = () => (
    {type: type.LOGOUT, payload: {}}
);