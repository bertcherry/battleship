const createShip = (length) => {
    const ship = {
        length: length,
        hits: 0,
        sunk: false
    };
    return ship;
}

export { createShip }