import { populateBoard } from './interface.js';

const Player = (name, selfBoard, enemyBoard) => {
    const playerName = name;
    let isComputer = false;
    let isFirstTurn = true;
    const playerArgs = {
        carrier5: null,
        battleship4: null,
        destroyer3: null,
        submarine3: null,
        patrol2: null
    }
    selfBoard = selfBoard;
    enemyBoard = enemyBoard;
    
    const populatePlayerBoard = populateBoard(selfBoard, enemyBoard);
    const attack = (coordinate) => {
        enemyBoard.receiveAttack(coordinate);
    }

    const generateAttack = () => {
        if (isComputer === true) {
            //generate a random number 1-7 twice, one translates to a-g, concatenate with the number
            //called with xOptions length so changes in board size happen in both dimensions
            //check the enemy board's shotList, then attack, otherwise loop again
            for (let i = 0; i < 1000; i++) {
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
            populatePlayerBoard.markAttacks('self', enemyBoard);
        } else {
            populatePlayerBoard.intializeBoard();
        }
    };

    return { playerName, playerArgs, selfBoard, enemyBoard, isComputer, isFirstTurn, attack, controlTurn, generateAttack };
}



export { Player };