import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AuthenticatedRoute, UnauthenticatedRoute} from "./components/auth/Authorize";
import router from "./routes";
import Home from "./components/home";
import NotFound from "./components/layout/NotFound";
import About from "./components/about";
import Profile from "./components/profile";
import IA from "./components/ia";
import LoginLayout from "./components/auth/Login";
import Register from "./components/auth/Register";
import Auth from "./components/auth";

ReactDOM.render((
    <BrowserRouter>
        <App>
            <Switch>
                {/* Home */}
                <Route path={router.home()} component={Home} exact={true}/>

                {/* About */}
                <Route path={router.about()} component={About} exact={true}/>

                {/* Profile */}
                {AuthenticatedRoute(router.profile(), Profile)}

                {/* IA Games */}
                {AuthenticatedRoute(router.ia_mode(":gameId(.*)"), IA)}

                {/* {Auth} */}
                {UnauthenticatedRoute(router.auth.login(), LoginLayout)}
                {UnauthenticatedRoute(router.auth.register(), Register)}
                {UnauthenticatedRoute(router.auth.auth(), Auth)}

                <Route path="/" component={NotFound}/>
            </Switch>
        </App>
    </BrowserRouter>
    ), document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
