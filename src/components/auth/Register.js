import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import AuthAPI from "../../api/AuthAPI";
import {store} from "../../store";
import {login} from "../../store/auth/actions";
import {useHistory} from "react-router-dom";

export default function Register() {

    const history = useHistory()

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const onSubmit = (event) => {
        event.preventDefault();
        AuthAPI.register(username, password)
            .then(response => {
                store['dispatch'](login(response.user))
                history.push("/")
            })
            .catch(response => {
                alert(response.msg)
            })
    };

    return (
        <>
            <Helmet>
                <title>Truco | Registro</title>
            </Helmet>
            <form className="login-box" onSubmit={onSubmit}>
                <label>Username</label>
                <input type="text" onChange={(event) => setUsername(event.target.value)} required/>
                <label>Senha</label>
                <input type="text" onChange={(event) => setPassword(event.target.value)} required/>
                <div className="row">
                    <div className="col-lg-7">
                        <button type="submit" className="btn btn-danger float-right">
                            Registrar-se
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}