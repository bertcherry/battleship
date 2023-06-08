import { createShip } from './ship';

const createGameboard = () => {
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

    let args = ['a1', 'a2', 'a3'];
    const destroyer = placeShip('destroyer', ...args);
    gameboardShips.push(destroyer);

    function receiveAttack(coordinate) {
        shotList.push(coordinate);
        if (gameboard[coordinate] === undefined) {
            //report the shot as a miss
        } else {
            const hitShip = gameboardShips.find(item => item.ship.name === gameboard[coordinate]);
            hitShip.hit();
            //report the shot as a hit on hitShip name
        }
    }

    return { placeShip, receiveAttack, gameboard, gameboardShips, shotList, destroyer };
}

const testBoard = createGameboard();

export { createGameboard, testBoard };