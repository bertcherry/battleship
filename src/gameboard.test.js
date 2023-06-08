import { testBoard } from './gameboard';

test('Gameboard places ships at their coordinates by calling createShip', () => {
    expect(testBoard.gameboard.a2).toEqual('destroyer');
});

test('receiveAttack records a miss', () => {
    testBoard.receiveAttack('b1');
    expect(testBoard.shotList.includes('b1')).toBeTruthy();
});

test('receiveAttack records a hit', () => {
    testBoard.receiveAttack('a1');
    expect(testBoard.destroyer.ship.hits).toBe(1);
});

test('reports if all ships are sunk', () => {
    testBoard.receiveAttack('a1');
    testBoard.receiveAttack('a2');
    testBoard.receiveAttack('a3');
    expect(testBoard.allSunk()).toBeTruthy();
});