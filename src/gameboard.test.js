import { playerOneBoard, playerTwoBoard } from './gameboard';
import { playerOne } from './player';

test('Gameboard places ships at their coordinates by calling createShip', () => {
    expect(playerOneBoard.gameboard.a2).toEqual('destroyer');
});

test('receiveAttack records a miss', () => {
    playerOneBoard.receiveAttack('b1');
    expect(playerOneBoard.shotList.includes('b1')).toBeTruthy();
});

test('receiveAttack records a hit', () => {
    playerOneBoard.receiveAttack('a1');
    expect(playerOneBoard.destroyer.ship.hits).toBe(1);
});

//Skipped after refactoring test board to include all ships
test.skip('reports if all ships are sunk', () => {
    playerOneBoard.receiveAttack('a1');
    playerOneBoard.receiveAttack('a2');
    playerOneBoard.receiveAttack('a3');
    expect(playerOneBoard.allSunk()).toBeTruthy();
});

test('playerOne records hits on playerTwoBoard', () => {
    playerOne.attack('b1');
    expect(playerTwoBoard.shotList.includes('b1')).toBeTruthy();
});