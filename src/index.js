import { Player } from './player';
import { createGameboard, playerOneArgs, playerTwoArgs } from './gameboard';

const playGame = () => {
    //reverse initiation of players and boards once ship placement is in control of players
    const playerOneBoard = createGameboard(playerOneArgs);
    const playerTwoBoard = createGameboard(playerTwoArgs);
    const playerOne = Player(playerTwoBoard, false);
    const playerTwo = Player(playerOneBoard, true);
    /* for (let i = 0; i < 49; i++) {
        playerOne.attack();
        playerTwo.attack();
        if (playerOneBoard.allSunk() || playerTwoBoard.allSunk()) {
            //end game
            break;
        }
    } */

    return { playerOneBoard, playerTwoBoard, playerOne, playerTwo };
}

const testGame = playGame();

export { testGame };