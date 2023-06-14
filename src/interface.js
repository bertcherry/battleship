//when it is playerX's turn, populate board with left side playerXBoard (non-interactable), self-a1 etc for display hook
import { testGame } from './index.js';

//self- and enemy- are coded in so that the board is flexible to reclassing if playerTwo becomes a human
function populateBoard(selfBoard, enemyBoard) {
    const enemyCells = document.getElementById('enemy-cells');
    
    const handleAttack = (e) => {
        enemyBoard.receiveAttack(e.currentTarget.id.slice(6));
        markAttacks('enemy', enemyBoard);
        for (const cell of enemyCells.children) {
            cell.removeEventListener('click', handleAttack);
        }
    }

    //reset board to show new player's ships, hits, misses
    function clearBoard(designation, board) {
        board.shotList.forEach(shot => {
            const cellDiv = document.getElementById(`${designation}-${shot}`);
            cellDiv.className = '';
        });
    }

    clearBoard('self', selfBoard);
    clearBoard('enemy', enemyBoard);

    //for cell properties in gameboard object - if they exist (have designated ship), give matching id on selfBoard class has-ship
    for (const cell in selfBoard.gameboard) {
        const cellDiv = document.getElementById(`self-${cell}`);
        cellDiv.classList.add('has-ship');
    }

    //to populate hits and misses on each gameboard side using input of self vs enemy board
    function markAttacks(designation, board) {
        if (board.shotList === []) {
            return;
        } else {
            board.shotList.forEach(shot => {
                const cellDiv = document.getElementById(`${designation}-${shot}`);
                if (board.gameboard.hasOwnProperty(shot)) {
                    //if the attack logged in the attack history matches a property name in the gameboard, mark with class hit
                    cellDiv.classList.add('hit');
                    cellDiv.classList.add('has-ship');
                    //if the matching name ship in gameboardShips is sunk, mark the cell as sunk
                    const matchShip = board.gameboardShips.find(item => item.ship.name === board.gameboard[shot]);
                    if (matchShip.ship.sunk === true) {
                        cellDiv.classList.add('sunk-ship');
                    }
                } else {
                    //if the attack logged does not match a property name in the gameboard, mark with class miss
                    cellDiv.classList.add('miss');
                } 
            }); 
        }  
    }

    markAttacks('self', selfBoard);
    markAttacks('enemy', enemyBoard);

    //add listeners to enemyBoard to call the player's attack function
    for (const cell of enemyCells.children) {
        if (!enemyBoard.shotList.includes(cell.id.slice(6))) {
            cell.addEventListener('click', handleAttack);
        }
    }

    return { handleAttack, markAttacks }
}

const modalContainer = document.getElementById('modal-container');
const modalText = document.getElementById('modal-text');
const modalBtn = document.getElementById('modal-btn');
modalBtn.addEventListener('click', hideModal);
modalBtn.addEventListener('click', () => testGame.gameController())

function hideModal() {
    modalContainer.style.display = 'none';
}

function reportMiss(coordinate) {
    modalText.textContent = `${testGame.players.at(testGame.playerTurn).playerName} missed at ${coordinate}.`
    modalBtn.textContent = 'Continue'
    modalContainer.style.display = 'block';
}

function reportHit(coordinate) {
    modalText.textContent = `${testGame.players.at(testGame.playerTurn).playerName} hit at ${coordinate}.`
    modalBtn.textContent = 'Continue'
    modalContainer.style.display = 'block';
}

function reportSunk(coordinate, shipName) {
    let opponent;
    if (testGame.playerTurn === 0) {
        opponent = testGame.players.at(1);
    } else {
        opponent = testGame.players.at(0);
    }
    modalText.textContent = `With a hit at ${coordinate}, ${testGame.players.at(testGame.playerTurn).playerName} sunk ${opponent.playerName}'s ${shipName}.`
    modalBtn.textContent = 'Continue'
    modalContainer.style.display = 'block';
}

export { populateBoard, reportMiss, reportHit, reportSunk };