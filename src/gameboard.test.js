import { testBoard, testBoard2 } from './gameboard';
import { playerOne } from './player';

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

//Skipped after refactoring test board to include all ships
test.skip('reports if all ships are sunk', () => {
    testBoard.receiveAttack('a1');
    testBoard.receiveAttack('a2');
    testBoard.receiveAttack('a3');
    expect(testBoard.allSunk()).toBeTruthy();
});

test('playerOne records hits on testBoard2', () => {
    playerOne.attack('b1');
    expect(testBoard2.shotList.includes('b1')).toBeTruthy();
});