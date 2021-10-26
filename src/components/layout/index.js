import {Link} from "react-router-dom";
import router from "../../routes";
import {store} from "../../store";
import {getUser} from "../../store/helpers";
import {login} from "../../store/auth/actions";
import {shallowEqual, useSelector} from "react-redux";

const Layout = ({history, children}) => {

    const user = useSelector(state => {
        return state['user']
    }, shallowEqual)

    if (!user.id) {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user && user.id && !getUser().id) {
            store["dispatch"](login(user))
    }

    }

    return(
        <div className="content">
            <nav>
                <div className="logo">
                    <h1>Truco Omline</h1>
                </div>

                <ul className="links">
                  <li><Link to={router.home()}><button>Home</button></Link></li>
                  <li><Link to={router.about()}><button>Sobre</button></Link></li>
                  {user && user.id? <li><Link to={router.profile()}><button>Perfil</button></Link></li>:
                      <li><Link to={router.auth.auth()}><button>Login</button></Link></li>}
                </ul>
            </nav>
            {children}
            <footer>
                Copyright 2021 Renan, Augusto e Thiago.
            </footer>
        </div>
    );
}

export default Layout;