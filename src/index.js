import './style.css';
import { Player } from './player.js';
import { createGameboard, playerOneArgs, playerTwoArgs } from './gameboard.js';

const playGame = () => {
    //reverse initiation of players and boards once ship placement is in control of players
    const playerOneBoard = createGameboard(playerOneArgs);
    const playerTwoBoard = createGameboard(playerTwoArgs);
    const playerOne = Player(playerOneBoard, playerTwoBoard, false);
    const playerTwo = Player(playerTwoBoard, playerOneBoard, true);
    for (let i = 0; i < 49; i++) {
        playerOne.controlTurn();
        //need to await the result of the attack before moving on to the next step
        if (playerTwoBoard.allSunk()) {
            //end game
            break;
        }
        playerTwo.controlTurn();
        if (playerOneBoard.allSunk()) {
            //end game
            break;
        }
    } 

    return { playerOneBoard, playerTwoBoard, playerOne, playerTwo };
}

const testGame = playGame();

export { testGame };