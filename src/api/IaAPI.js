import APIHelper from "./APIHelper";

export default class IaAPI {

    static getDetails = (gameId) => {
        return APIHelper.get("/game/ia/"+gameId+"/details")
    };

    static startRound = (gameId) => {
        return APIHelper.post("/game/ia/"+gameId+"/start")
    };

    static playCard = ({gameId, player, card}) => {
        return APIHelper.post("/game/ia/"+gameId+"/play-card", {player: player, card: card})
    };

    static truco = ({gameId, response}) => {
        return APIHelper.post("/game/ia/"+gameId+"/truco", {response: response})
    }
}