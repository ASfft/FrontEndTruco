import {Helmet} from "react-helmet";
import {getUser} from "../../store/helpers";
import {store} from "../../store";
import {logout} from "../../store/auth/actions";
import {useHistory} from "react-router-dom";

export default function Profile() {
    const user = getUser()
    const history = useHistory()

    const onClick = () => {
        store['dispatch'](logout())
        history.push('/auth')
    }

    return (
    <>
    <Helmet>
        <title>Truco | Perfil</title>
    </Helmet>

        <div className="jogador">
            <ul>
                <h1>{ user.name }</h1>
                <p><li>{ user.id }</li></p>
            </ul>
        </div>
        <button onClick={onClick}>Logout</button>



    </>
     );
}
