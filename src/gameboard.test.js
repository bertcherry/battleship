import { createGameboard } from './gameboard';
import { createShip } from './ship';

test('Gameboard places ships at their coordinates by calling createShip', () => {
    let args = ['a1', 'a2', 'a3'];
    const testBoard = createGameboard();
    testBoard.placeShip('destroyer', ...args);
    const destroyer = createShip('destroyer', 3).ship;
    //expect(testBoard.gameboard).toEqual({a1: 'destroyer', a2: 'destroyer', a3: 'destroyer'});
    expect(testBoard.gameboard.a2).toMatchObject(destroyer);
});