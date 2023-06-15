//when it is playerX's turn, populate board with left side playerXBoard (non-interactable), self-a1 etc for display hook
import { testGame } from './index.js';

//self- and enemy- are coded in so that the board is flexible to reclassing if playerTwo becomes a human
function populateBoard(selfBoard, enemyBoard) {
    //reset board to show new player's ships, hits, misses
    function clearBoard(designation, board) {
        board.shotList.forEach(shot => {
            const cellDiv = document.getElementById(`${designation}-${shot}`);
            cellDiv.className = '';
        });
    }

    const enemyCells = document.getElementById('enemy-cells');
    const handleAttack = (e) => {
        enemyBoard.receiveAttack(e.currentTarget.id.slice(6));
        markAttacks('enemy', enemyBoard);
        for (const cell of enemyCells.children) {
            cell.removeEventListener('click', handleAttack);
        }
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

    function intializeBoard() {
        
        
        clearBoard('self', selfBoard);
        clearBoard('enemy', enemyBoard);

        //for cell properties in gameboard object - if they exist (have designated ship), give matching id on selfBoard class has-ship
        for (const cell in selfBoard.gameboard) {
            const cellDiv = document.getElementById(`self-${cell}`);
            cellDiv.classList.add('has-ship');
        }

        markAttacks('self', selfBoard);
        markAttacks('enemy', enemyBoard);
        
        //add listeners to enemyBoard to call the player's attack function
        for (const cell of enemyCells.children) {
            if (!enemyBoard.shotList.includes(cell.id.slice(6))) {
                cell.addEventListener('click', handleAttack);
            }
        }
    }
    
    return { handleAttack, markAttacks, intializeBoard }
}

//Modal for game prompts
const modalContainer = document.getElementById('modal-container');
const modalText = document.getElementById('modal-text');
const modalBtn = document.getElementById('modal-btn');
function hideModal() {
    modalContainer.style.display = 'none';
}
modalBtn.addEventListener('click', hideModal);

//Controls modal action once game has started
function buildGameModal() { 
    modalBtn.addEventListener('click', () => testGame.gameController());

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

    function reportEnd(coordinate, shipName) {
        modalText.textContent = `${testGame.players.at(testGame.playerTurn).playerName} hit ${shipName} at ${coordinate} and has won the game!`
        modalBtn.textContent = 'Play Again';
        //Reset the game conditions
        //modalBtn.addEventListener('click', playGame);
        modalContainer.style.display = 'block';
    }

    return { reportMiss, reportHit, reportSunk, reportEnd }
}

//Controls initialization of game
function buildSetupPrompts() {
    //Prompt for game mode: vs computer or 2 player mode
    let versus;
    let currentPlayer;
    const modal = document.getElementById('modal');
    const modalBtnTwo = document.createElement('button');
    const nameInput = document.createElement('input');
    
    function askGameMode() {
        modalText.textContent = 'Welcome to battleship, a classic warfare strategy game. What mode do you want to play?'
        modalBtn.textContent = 'vs. Computer'
        modalBtnTwo.textContent = '2 Player';
        modal.appendChild(modalBtnTwo);
        modalContainer.style.display = 'block';
        modalBtn.addEventListener('click', storeGameMode);
    }

    function storeGameMode(e) {
        modalBtn.removeEventListener('click', storeGameMode);
        let playerDisplay;
        if (e.currentTarget.id === 'modal-btn') {
            versus = false;
            currentPlayer = testGame.playerOne;
            playerDisplay = 'your';
        } else {
            versus = true;
            currentPlayer = testGame.playerOne;
            playerDisplay = `Player One's`;
        }
        modal.removeChild(modalBtn);
        modal.removeChild(modalBtnTwo);
        namePrompt(playerDisplay);
    }

    //Prompt for player name for each human player
    function namePrompt(player) {
        modalText.textContent = `Enter ${player} name`
        modalBtn.textContent = 'Submit'
        modal.appendChild(nameInput);
        modal.appendChild(modalBtn);
        modalContainer.style.display = 'block';
        modalBtn.addEventListener('click', storePlayerName);
    }

    function storePlayerName(e) {
        modalBtn.removeEventListener('click', storePlayerName);
        e.preventDefault();
        currentPlayer.name = nameInput.value;
        modal.removeChild(nameInput);
    } 

    //Prompt to place each ship in descending order of size. Ship length feeds into drag event loop

    //Event listeners placed on self gameboard cells (display none on enemy board while this is happening)
    //Drag and drop starting from dragenter to adjacent 9 cells, then once in another cell only to the cell in the next line
    //Event listener terminates once a loop the length of the specified ship is dragged into, then dragout event sends placeShip to the player's board

}

//2 player pass screen prompt -- needs new modal for pass screen since event listeners are called on the standard one in gameModal

export { populateBoard, buildGameModal, buildSetupPrompts };