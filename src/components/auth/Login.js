import {useEffect, useReducer, useState} from 'react'
import {store} from "../../store";
import AuthAPI from "../../api/AuthAPI";
import {login} from "../../store/auth/actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {Helmet} from "react-helmet";
import {useHistory} from "react-router-dom";

const initialAuthState = {
    username: null,
    password: null,
    completed: false,
    user: null
}

function authReducer(state, action) {
    switch (action.type) {
        case 'loginSuccessful':
            return {
                user: action.payload.user,
                completed: true,
            }
        default:
            throw new Error();
    }
}



export default function LoginLayout() {

    const history = useHistory()

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const [authState, dispatchAuth] = useReducer(authReducer, initialAuthState, (state) => {
        return {...state}
    })

    const onSubmit = (event) => {
        event.preventDefault();
        AuthAPI.login(username, password)
            .then(response => {
                dispatchAuth({type: "loginSuccessful", payload: response})
            })
            .catch(response => {
                alert(response.msg)
            })
    };

    useEffect(() => {
        if (authState.completed) {
            store['dispatch'](login(authState.user))
            history.push("/")
        }
    }, [authState.completed, authState.user])

    return (
        <>
            <Helmet>
                <title>Truco | Login</title>
            </Helmet>
            <form className="login-box" onSubmit={onSubmit}>
                <label>Username</label>
                <input type="text" onChange={(event) => setUsername(event.target.value)} required/>
                <label>Senha</label>
                <input type="password" onChange={(event) => setPassword(event.target.value)} required/>
                <div className="row">
                    <div className="col-lg-7">
                        <button type="submit" className="btn btn-danger float-right">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </>
     );
}
