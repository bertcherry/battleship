import { testBoard } from './gameboard';
import { createShip } from './ship';

const destroyer = createShip('destroyer', 3);

test('Gameboard places ships at their coordinates by calling createShip', () => {
    expect(JSON.stringify(testBoard.gameboard.a2)).toEqual(JSON.stringify(destroyer));
});

test('receiveAttack records a miss', () => {
    testBoard.receiveAttack('b1');
    expect(testBoard.shotList.includes('b1')).toBeTruthy();
});

test('receiveAttack records a hit', () => {
    testBoard.receiveAttack('a1');
    expect(testBoard.gameboard.a1.ship.hits).toBe(1);
    expect(testBoard.gameboard.a2.ship.hits).toBe(1);
});