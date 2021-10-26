import {Link} from "react-router-dom";
import router from "../../routes";
import {store} from "../../store";
import {login} from "../../store/auth/actions";
import AuthAPI from "../../api/AuthAPI";

export default function Auth({history}) {
    const on_click_anon = () => {
        AuthAPI.anonLogin().then(response => {
            store['dispatch'](login(response.user))
            history.push("/")
        }).catch(error => {
            alert(error.msg)
        })
    }
    return (
        <div>
            <Link to={router.auth.login()}><button>Login</button></Link>
            <Link to={router.auth.register()}><button>Register</button></Link>
            <button onClick={on_click_anon}>Continue as anon</button>
        </div>
    )
}