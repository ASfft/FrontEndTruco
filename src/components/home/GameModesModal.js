import {Modal} from "react-bootstrap";
import router from "../../routes";
import {Link, useHistory} from "react-router-dom";
import QueueAPI from "../../api/QueueAPI";

export default function GameModesModal({show, close}) {

    const history = useHistory()

    const ia_mode_on_click = () => {
        QueueAPI.queue("ia").then(response => {
            history.push(router.ia_mode(response.game_id))
        }).catch(error => {
            alert(error.msg)
            if (error.game_id) {
                history.push(router.ia_mode(error.game_id))
            }
        })
    }

    return (
        <Modal show={show} onHide={close}>
            <button onClick={ia_mode_on_click}>Computador</button>
            <Link to={router.online()}><button>Online</button></Link>
        </Modal>
    )
}