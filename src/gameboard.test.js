import { game } from './index.js';

test('Gameboard places ships at their coordinates by calling createShip', () => {
    expect(game.playerOneBoard.gameboard.a2).toEqual('destroyer');
});

test('receiveAttack records a miss', () => {
    game.playerTwoBoard.receiveAttack('a1');
    expect(game.playerTwoBoard.shotList.includes('a1')).toBeTruthy();
});

test('receiveAttack records a hit', () => {
    game.playerOneBoard.receiveAttack('a1');
    expect(game.playerOneBoard.destroyer.ship.hits).toBe(1);
});

//Skipped after refactoring test board to include all ships
test.skip('reports if all ships are sunk', () => {
    game.playerOneBoard.receiveAttack('a1');
    game.playerOneBoard.receiveAttack('a2');
    game.playerOneBoard.receiveAttack('a3');
    expect(game.playerOneBoard.allSunk()).toBeTruthy();
});

test('playerOne records hits on playerTwoBoard', () => {
    game.playerOne.attack('b1');
    expect(game.playerTwoBoard.shotList.includes('b1')).toBeTruthy();
});

test('playerTwo (computer) does not attack the same place twice', () => {
    for (let i = 0; i < 40; i++) {
        game.playerTwo.attack(game.playerTwo.generateAttack());     
    };
    expect((new Set(game.playerOneBoard.shotList)).size === game.playerOneBoard.shotList.length).toBeTruthy();
});