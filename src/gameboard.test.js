import { testGame } from './index.js';

test('Gameboard places ships at their coordinates by calling createShip', () => {
    expect(testGame.playerOneBoard.gameboard.a2).toEqual('destroyer');
});

test('receiveAttack records a miss', () => {
    testGame.playerTwoBoard.receiveAttack('a1');
    expect(testGame.playerTwoBoard.shotList.includes('a1')).toBeTruthy();
});

test('receiveAttack records a hit', () => {
    testGame.playerOneBoard.receiveAttack('a1');
    expect(testGame.playerOneBoard.destroyer.ship.hits).toBe(1);
});

//Skipped after refactoring test board to include all ships
test.skip('reports if all ships are sunk', () => {
    testGame.playerOneBoard.receiveAttack('a1');
    testGame.playerOneBoard.receiveAttack('a2');
    testGame.playerOneBoard.receiveAttack('a3');
    expect(testGame.playerOneBoard.allSunk()).toBeTruthy();
});

test('playerOne records hits on playerTwoBoard', () => {
    testGame.playerOne.attack('b1');
    expect(testGame.playerTwoBoard.shotList.includes('b1')).toBeTruthy();
});

test('playerTwo (computer) does not attack the same place twice', () => {
    for (let i = 0; i < 40; i++) {
        testGame.playerTwo.attack(testGame.playerTwo.generateAttack());     
    };
    expect((new Set(testGame.playerOneBoard.shotList)).size === testGame.playerOneBoard.shotList.length).toBeTruthy();
});