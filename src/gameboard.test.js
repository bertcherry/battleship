import { createGameboard } from './gameboard';

test('Gameboard places ships at their coordinates by calling createShip', () => {
    createGameboard().placeShip('destroyer', 'a1', 'a2', 'a3');
    expect(createGameboard().gameboard.a1).toBe('destroyer');
    expect(createGameboard().gameboard.a2).toBe('destroyer');
    expect(createGameboard().gameboard.a3).toBe('destroyer');
});