import { createShip } from './ship.js';
import { reportMiss, reportHit, reportSunk, reportEnd } from './interface.js';

const createGameboard = () => {
    let gameboard = {};
    let gameboardShips = [];
    let shotList = [];
    let lastHit;

    const placeShip = (name, coordinates) => {
        const length = coordinates.length;
        coordinates.forEach(coordinate => {
            gameboard[coordinate] = name;
        });
        return createShip(name, length);
    }

    const allSunk = (coordinate, shipName) => {
        if (gameboardShips.every(item => item.ship.sunk === true)) {
            reportEnd(coordinate, shipName);
        } else {
            reportSunk(coordinate, shipName);
        }
    }

    const receiveAttack = (coordinate) => {
        shotList.push(coordinate);
        if (gameboard[coordinate] === undefined) {
            reportMiss(coordinate);
        } else {
            const hitShip = gameboardShips.find(item => item.ship.name === gameboard[coordinate]);
            hitShip.hit();
            if (hitShip.ship.sunk === true) {
                lastHit = undefined;
                allSunk(coordinate, hitShip.ship.name);
                return lastHit;
            } else {
                lastHit = coordinate;
                reportHit(coordinate);
            }
        }
    }

    const getLastHit = () => lastHit;

    return { placeShip, receiveAttack, allSunk, gameboard, gameboardShips, shotList, getLastHit };
}   

export { createGameboard };