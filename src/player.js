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
        const xOptions = 'abcdefg';
        let newAttack;
        console.log(enemyBoard.getLastHit());
        //from the last hit, generate an attack against one of the adjacent cells
        if (enemyBoard.getLastHit() !== undefined) {
            let i = 0;
            while (newAttack === undefined || enemyBoard.shotList.includes(newAttack)) {
                if (i < 50) {
                    i++;
                    const xCoord = enemyBoard.getLastHit().slice(0,1);
                    const yCoord = enemyBoard.getLastHit().slice(1);
                    const direction = Math.floor(Math.random() * 4);
                    if (direction === 0) {
                        const newXNum = xOptions.search(xCoord) - 1;
                        if (newXNum < 0) {
                            continue;
                        } else {
                            newAttack = xOptions[newXNum] + yCoord;
                        }
                    } else if (direction === 1) {
                        const newXNum = xOptions.search(xCoord) + 1;
                        if (newXNum > 6) {
                            continue;
                        } else {
                            newAttack = xOptions[newXNum] + yCoord;
                        }
                    } else if (direction === 2) {
                        const newYCoord = yCoord - 1;
                        if (newYCoord < 0) {
                            continue;
                        } else {
                            newAttack = xCoord + newYCoord;
                        }
                    } else if (direction === 3) {
                        const newYCoord = yCoord + 1;
                        if (newYCoord > 6) {
                            continue;
                        } else {
                            newAttack = xCoord + newYCoord;
                        }
                    }
                } else {
                    randomAttack();
                }
            }
        } else {
            randomAttack();
        }

        function randomAttack() {
            //generate a random number 1-7 twice, one translates to a-g, concatenate with the number
            //called with xOptions length so changes in board size happen in both dimensions
            //check the enemy board's shotList, then attack, otherwise loop again
            for (let i = 0; i < 1000; i++) {
                const xCoord = xOptions[Math.floor(Math.random() * xOptions.length)];
                const yCoord = Math.floor(Math.random() * xOptions.length);
                newAttack = xCoord + yCoord;
                if (!enemyBoard.shotList.includes(newAttack)) {
                    break;
                }
            }
        }

        return newAttack;
    };

    return { playerName, playerArgs, selfBoard, enemyBoard, isComputer, isFirstTurn, attack, generateAttack, populatePlayerBoard };
}



export { Player };