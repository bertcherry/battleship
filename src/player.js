import { playerOneBoard, playerTwoBoard } from "./gameboard";

const Player = (opponentBoard) => {
    const attack = (coordinate) => {
        opponentBoard.receiveAttack(coordinate);
    };

    return { attack };
}

const playerOne = Player(playerTwoBoard);
const playerTwo = Player(playerOneBoard);

export { playerOne, playerTwo };