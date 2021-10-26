import React from 'react';
import {useHistory} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from './store';
import './styles/App.css';
import Layout from "./components/layout";

export default function App(props) {

    const history = useHistory();

    return <Provider store={store}>
            <Layout history={history}>
                {props.children}
            </Layout>
    </Provider>;
}
