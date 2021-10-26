import React from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";


export default function NotAuthorized() {

    return (
        <>
            <Helmet>
                <title>Não autorizado</title>
            </Helmet>
            <div className="not-found-margin">

                <img className="center" src="/gatinho.png" alt="gatinho"/>
                <div className="not-found">
                    <p>Usuário não autorizado !</p>
                </div>
            </div>
        </>
    )
}
