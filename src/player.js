import { populateBoard } from './interface.js';

const Player = (selfBoard, enemyBoard, isComputer) => {
    const attack = (coordinate) => {
        enemyBoard.receiveAttack(coordinate);
    }

    const generateAttack = () => {
        if (isComputer === true) {
            //generate a random number 1-7 twice, one translates to a-g, concatenate with the number
            //called with xOptions length so changes in board size happen in both dimensions
            //check the enemy board's shotList, then attack, otherwise loop again
            for (let i = 0; i < 49; i++) {
                const xOptions = 'abcdefg';
                const xCoord = xOptions[Math.floor(Math.random() * xOptions.length)];
                const yCoord = Math.floor(Math.random() * xOptions.length);
                const randomCoord = xCoord + yCoord;
                if (!enemyBoard.shotList.includes(randomCoord)) {
                    return randomCoord;
                }
            }
        }
    };

    const controlTurn = () => {
        if (isComputer === true) {
            attack(generateAttack());
        } else {
            populateBoard(selfBoard, enemyBoard);
        }
    };

    return { attack, controlTurn, generateAttack };
}



export { Player };