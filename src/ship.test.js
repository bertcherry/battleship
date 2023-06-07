import { createShip } from './ship';

test('Ship factory creates an object that includes length, #/hits, and if sunk', () => {
    expect(createShip(3).ship).toStrictEqual({length: 3, hits: 0, sunk: false});
});

test('hit function increases number of hits by one', () => {
    expect(createShip(3).hit()).toStrictEqual({length: 3, hits: 1, sunk: false});
});

test('isSunk function changes sunk to false when hits match length', () => {
    expect(createShip(1).hit()).toStrictEqual({length: 1, hits: 1, sunk: true});
});