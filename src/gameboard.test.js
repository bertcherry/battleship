import { createGameboard } from './gameboard';
import { createShip } from './ship';


let args = ['a1', 'a2', 'a3'];
const testBoard = createGameboard();
testBoard.placeShip('destroyer', ...args);
const destroyer = createShip('destroyer', 3).ship;

test('Gameboard places ships at their coordinates by calling createShip', () => {
    expect(testBoard.gameboard.a2).toMatchObject(destroyer);
});

test('receiveAttack records a miss', () => {
    testBoard.receiveAttack('b1');
    expect(testBoard.shotList.includes('b1')).toBeTruthy();
})