import {store} from "./index";

export function getUser() {
    return store.getState().user
}
