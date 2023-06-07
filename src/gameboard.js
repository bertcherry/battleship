import { createShip } from './ship';

const createGameboard = () => {
    let gameboard = {};
    let shotList = [];

    const placeShip = (name, ...args) => {
        const coordinates = [...args];
        const length = coordinates.length;
        const newShip = createShip(name, length).ship;
        coordinates.forEach(coordinate => {
            gameboard[coordinate] = newShip;
        });
    }

    function receiveAttack(coordinate) {
        shotList.push(coordinate);
        if (gameboard.coordinate === undefined) {
            //report the shot as a miss
        } else {
            gameboard.coordinate.hit();
        }
    }

    return { placeShip, receiveAttack, gameboard, shotList };
}

export { createGameboard };