import './style.css';
import { Player } from './player.js';
import { createGameboard, playerOneArgs, playerTwoArgs } from './gameboard.js';
import { buildGameModal } from './interface.js';

const playGame = () => {
    //reverse initiation of players and boards once ship placement is in control of players
    const playerOneBoard = createGameboard(playerOneArgs);
    const playerTwoBoard = createGameboard(playerTwoArgs);
    const playerOne = Player('Player One', playerOneBoard, playerTwoBoard, false);
    const playerTwo = Player('Player Two', playerTwoBoard, playerOneBoard, true);
    const gameModal = buildGameModal();
    const players = [ playerOne, playerTwo ];
    let playerTurn = 0;
    players.at(playerTurn).controlTurn();

    const gameController = () => {
        if (playerOneBoard.gameboardShips.every(item => item.ship.sunk === true) || playerTwoBoard.gameboardShips.every(item => item.ship.sunk === true)) {
            console.log('end');
            return;
        } else {
            if (playerTurn === 0) {
                playerTurn = 1;
            } else {
                playerTurn = 0;
            }
            players.at(playerTurn).controlTurn();
        }
    }

    return { gameController, playerOneBoard, playerTwoBoard, playerOne, playerTwo, players, playerTurn, gameModal };
}

const testGame = playGame();

export { testGame, playGame };