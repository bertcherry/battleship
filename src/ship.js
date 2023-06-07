const createShip = (length) => {
    const ship = {
        length: length,
        hits: 0,
        sunk: false
    };

    function isSunk() {
        ship.sunk = true;
    }

    function hit() {
        ship.hits = ship.hits + 1;
        if (ship.hits === ship.length) {
            isSunk();
        }
        return ship;
    };

    return { ship, hit };
}

export { createShip }