const createShip = (name, length) => {
    const ship = {
        name: name,
        length: length,
        hits: 0,
        sunk: false
    };

    const isSunk = () => {
        ship.sunk = true;
    }

    const hit = () => {
        ship.hits = ship.hits + 1;
        if (ship.hits === ship.length) {
            isSunk();
        }
        return ship;
    };

    return { ship, hit };
}

export { createShip }