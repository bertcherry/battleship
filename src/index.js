import './style.css';
import { Player } from './player.js';
import { createGameboard } from './gameboard.js';
import { buildSetupPrompts } from './interface.js';

const playGame = () => {
    //reverse initiation of players and boards once ship placement is in control of players
    const playerOneBoard = createGameboard();
    const playerTwoBoard = createGameboard();
    const playerOne = Player(null, playerOneBoard, playerTwoBoard);
    const playerTwo = Player(null, playerTwoBoard, playerOneBoard);
    const gameStart = buildSetupPrompts();
    const players = [ playerOne, playerTwo ];
    let playerTurn = 1;
    
    const gameController = () => {
        if (playerOneBoard.gameboardShips.every(item => item.ship.sunk === true) || playerTwoBoard.gameboardShips.every(item => item.ship.sunk === true)) {
            return;
        } else {
            if (playerTurn === 0) {
                playerTurn = 1;
            } else {
                playerTurn = 0;
            }
            console.log('here');
            players.at(playerTurn).controlTurn();
        }
    }

    gameStart.askGameMode();

    return { gameController, playerOneBoard, playerTwoBoard, playerOne, playerTwo, players, playerTurn };
}

const game = playGame();

export { game, playGame };