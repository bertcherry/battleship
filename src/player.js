import { playerOneBoard, playerTwoBoard } from "./gameboard";

const Player = (opponentBoard, isComputer) => {
    const attack = (coordinate) => {
        opponentBoard.receiveAttack(coordinate);
    };

    const randomAttack = () => {
        if (isComputer === true) {
            //generate a random number 1-7 twice, one translates to a-j, concatenate with the number
            //called with xOptions length so changes in board size happen in both dimensions
            //check the opponent board's shotList, then attack, otherwise loop again
            for (let i = 0; i < 49; i++) {
                const xOptions = 'abcdefghij';
                const xCoord = xOptions[Math.floor(Math.random() * xOptions.length)];
                const yCoord = Math.floor(Math.random() * xOptions.length);
                const randomCoord = xCoord + yCoord;
                if (!opponentBoard.shotList.includes(randomCoord)) {
                    return randomCoord;
                }
            }
        }
    }

    return { attack, randomAttack };
}

const playerOne = Player(playerTwoBoard, false);
const playerTwo = Player(playerOneBoard, true);

export { playerOne, playerTwo };