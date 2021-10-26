// import {isAuthorized} from "../../store/helpers";
import {Route} from "react-router-dom";
import NotAuthorized from "./NotAuthorized";
import React from "react";
import {getUser} from "../../store/helpers";
import Home from "../home";


export function AuthenticatedRoute(path, component, defaultProps) {
    const renderFunction = props => {
        const user = getUser().id
        if (user) {
            const ProvidedComponent = component;
            return <ProvidedComponent {...{...defaultProps, ...props}} />
        } else {
            return <NotAuthorized/>
        }
    };
    return <Route path={path} render={renderFunction} exact={true}/>
}

export function UnauthenticatedRoute(path, component, defaultProps) {
    const renderFunction = props => {
        const user = getUser().id
        if (user === null) {
            const ProvidedComponent = component;
            return <ProvidedComponent {...{...defaultProps, ...props}} />
        } else {
            return <Home/>
        }
    };
    return <Route path={path} render={renderFunction} exact={true}/>
}
