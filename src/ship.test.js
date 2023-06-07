import { createShip } from './ship';

test('Ship factory creates an object that includes length, #/hits, and if sunk', () => {
    expect(createShip('destroyer', 3).ship).toStrictEqual({name: 'destroyer', length: 3, hits: 0, sunk: false});
});

test('hit function increases number of hits by one', () => {
    expect(createShip('destroyer', 3).hit()).toStrictEqual({name: 'destroyer', length: 3, hits: 1, sunk: false});
});

test('isSunk function changes sunk to false when hits match length', () => {
    expect(createShip(null, 1).hit()).toStrictEqual({name: null, length: 1, hits: 1, sunk: true});
});