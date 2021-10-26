import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers/index"

export const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware
    )
);
