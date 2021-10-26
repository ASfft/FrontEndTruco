import APIHelper from "./APIHelper";

export default class QueueAPI {

    static queue = (gameMode) => {
        return APIHelper.post('/queue/', {game_mode: gameMode})
    };
}