import {Helmet} from "react-helmet";
import "../../styles/Home.module.css";
import {useState} from "react";
import GameModesModal from "./GameModesModal";

export default function Home() {

    const [modesModal, setModesModal] = useState(false)

return (
    <>
        <Helmet>
            <title>Truco | Home </title>
        </Helmet>

        <div className="container">
            <button onClick={() => setModesModal(true)}>Jogar</button>
            <GameModesModal show={modesModal} close={() => setModesModal(false)}/>
        </div>
    </>
)
}
