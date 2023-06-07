import { createShip } from './ship';

const createGameboard = () => {
    let gameboard = {};

    const placeShip = (name, ...args) => {
        const coordinates = [...args];
        const length = coordinates.length;
        const newShip = createShip(name, length).ship;
        coordinates.forEach(coordinate => {
            gameboard[coordinate] = newShip;
        });
    }

    return { placeShip, gameboard };
}

export { createGameboard };