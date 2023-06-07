const createShip = (length) => {
    const ship = {
        length: length,
        hits: 0,
        sunk: false
    };

    function hit() {
        ship.hits = ship.hits + 1;
        return ship;
    };
    
    return { ship, hit };
}

export { createShip }