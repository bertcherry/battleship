import './style.css';
import { Player } from './player.js';
import { createGameboard, playerOneArgs, playerTwoArgs } from './gameboard.js';

const playGame = () => {
    //reverse initiation of players and boards once ship placement is in control of players
    const playerOneBoard = createGameboard(playerOneArgs);
    const playerTwoBoard = createGameboard(playerTwoArgs);
    const playerOne = Player(playerOneBoard, playerTwoBoard, false);
    const playerTwo = Player(playerTwoBoard, playerOneBoard, true);
    const players = [ playerOne, playerTwo ];
    let playerTurn = 0;
    players.at(playerTurn).controlTurn();

    const gameController = () => {
        if (playerTurn === 0) {
            playerTurn = 1;
        } else {
            playerTurn = 0;
        }
        players.at(playerTurn).controlTurn();
    }

    return { gameController, playerOneBoard, playerTwoBoard, playerOne, playerTwo };
}

const testGame = playGame();

export { testGame, playGame };