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

    gameStart.askGameMode();

    return { playerOneBoard, playerTwoBoard, playerOne, playerTwo, players, playerTurn };
}

const game = playGame();

export { game, playGame };