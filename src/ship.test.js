import { createShip } from './ship';

test('Ship factory creates an object that includes length, #/hits, and if sunk', () => {
    expect(createShip(3)).toStrictEqual({length: 3, hits: 0, sunk: false});
})