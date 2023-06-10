import { createShip } from './ship.js';

const createGameboard = (playerArgs) => {
    let gameboard = {};
    let gameboardShips = [];
    let shotList = [];

    const placeShip = (name, ...args) => {
        const coordinates = [...args];
        const length = coordinates.length;
        coordinates.forEach(coordinate => {
            gameboard[coordinate] = name;
        });
        return createShip(name, length);
    }

    const carrier = placeShip('carrier', ...playerArgs.carrier);
    const battleship = placeShip('battleship', ...playerArgs.battleship);
    const destroyer = placeShip('destroyer', ...playerArgs.destroyer);
    const submarine = placeShip('submarine', ...playerArgs.submarine);
    const patrolBoat = placeShip('patrol boat', ...playerArgs.patrolBoat);
    gameboardShips.push(carrier, battleship, destroyer, submarine, patrolBoat);

    function allSunk() {
        if (gameboardShips.every(item => item.ship.sunk === true)) {
            return true;
        } else {
            return false;
        }
    }

    function receiveAttack(coordinate) {
        shotList.push(coordinate);
        if (gameboard[coordinate] === undefined) {
            //report the shot as a miss
        } else {
            const hitShip = gameboardShips.find(item => item.ship.name === gameboard[coordinate]);
            hitShip.hit();
            allSunk();
            //report the shot as a hit
            //if it sunk the ship, report that they sunk hitShip.name
        }
    }

    return { placeShip, receiveAttack, allSunk, gameboard, gameboardShips, shotList, destroyer };
}

//carrier 5, battleship 4, destroyer 3, submarine 3, patrol boat 2
//default arguments to later be replaced by DOM manipulation or random
const playerOneArgs = {
    carrier: ['b1', 'b2', 'b3', 'b4', 'b5'],
    battleship: ['c2', 'c3', 'c4', 'c5'],
    destroyer: ['a1', 'a2', 'a3'],
    submarine: ['f5', 'f6', 'f7'],
    patrolBoat: ['g3', 'g2']
}

const playerTwoArgs = {
    carrier: ['f1', 'f2', 'f3', 'f4', 'f5'],
    battleship: ['e2', 'e3', 'e4', 'e5'],
    destroyer: ['b1', 'b2', 'b3'],
    submarine: ['b5', 'b6', 'b7'],
    patrolBoat: ['a3', 'a2']
}

export { createGameboard, playerOneArgs, playerTwoArgs };