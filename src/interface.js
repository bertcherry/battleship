//when it is playerX's turn, populate board with left side playerXBoard (non-interactable), self-a1 etc for display hook
import { game } from './index.js';

//self- and enemy- are coded in so that the board is flexible to reclassing if playerTwo becomes a human
const enemyCells = document.getElementById('enemy-cells');
const selfCells = document.getElementById('self-cells');

//reset board to show new player's ships, hits, misses
function clearBoard() {
    clearCells(enemyCells);
    clearCells(selfCells);
}

function clearCells(boardDisplay) {
    for (const cell of boardDisplay.children) {
        cell.className = '';
    }
}

function populateBoard(selfBoard, enemyBoard) {
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
        clearBoard();

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
let playerTurn = 1;
function controller() {
    if (game.playerOneBoard.gameboardShips.every(item => item.ship.sunk === true) || game.playerTwoBoard.gameboardShips.every(item => item.ship.sunk === true)) {
        return;
    } else {
        if (playerTurn === 0) {
            playerTurn = 1;
        } else {
            playerTurn = 0;
        }
        game.players.at(playerTurn).controlTurn();
    }
}

function reportMiss(coordinate) {
    modalBtn.removeEventListener('click', controller);
    modalText.textContent = `${game.players.at(playerTurn).playerName} missed at ${coordinate}.`;
    modalBtn.textContent = 'Continue';
    modalContainer.style.display = 'block';
    modalBtn.addEventListener('click', displayPassDevice);
}

function reportHit(coordinate) {
    modalBtn.removeEventListener('click', controller);
    modalText.textContent = `${game.players.at(playerTurn).playerName} hit at ${coordinate}.`;
    modalBtn.textContent = 'Continue';
    modalContainer.style.display = 'block';
    modalBtn.addEventListener('click', displayPassDevice);
}

function reportSunk(coordinate, shipName) {
    modalBtn.removeEventListener('click', controller);
    let opponent;
    if (playerTurn === 0) {
        opponent = game.players.at(1);
    } else {
        opponent = game.players.at(0);
    }
    modalText.textContent = `With a hit at ${coordinate}, ${game.players.at(playerTurn).playerName} sunk ${opponent.playerName}'s ${shipName}.`
    modalBtn.textContent = 'Continue'
    modalContainer.style.display = 'block';
    modalBtn.addEventListener('click', displayPassDevice);
}

function reportEnd(coordinate, shipName) {
    modalBtn.removeEventListener('click', controller);
    modalText.textContent = `${game.players.at(playerTurn).playerName} hit ${shipName} at ${coordinate} and has won the game!`
    modalBtn.textContent = 'Play Again';
    modalContainer.style.display = 'block';
    //Reset the game conditions
    //modalBtn.addEventListener('click', playGame);
}

function displayPassDevice() {
    modalBtn.removeEventListener('click', displayPassDevice);
    if (game.playerTwo.isComputer === false) {
        clearBoard();
        modalText.textContent = 'Pass the device';
        modalBtn.textContent = 'Done';
        modalContainer.style.display = 'block';
        if (game.players.at(playerTurn).isFirstTurn === true) {
            game.players.at(playerTurn).isFirstTurn = false;
            modalBtn.addEventListener('click', promptGameplay);
        } else {
            modalBtn.addEventListener('click', controller);
        }
    } else {
        controller();
    }
}

function promptGameplay() {
    modalBtn.removeEventListener('click', promptGameplay);
    modalText.textContent = 'Make attacks by clicking on a cell on the enemy board. Good luck!'
    modalBtn.textContent = 'Begin'
    modalContainer.style.display = 'block';
    modalBtn.addEventListener('click', controller);
}

//Controls initialization of game
function buildSetupPrompts() {
    //Prompt for game mode: vs computer or 2 player mode
    let currentPlayer;
    const modal = document.getElementById('modal');
    const modalBtnTwo = document.createElement('button');
    const nameInput = document.createElement('input');
    
    function askGameMode() {
        modalText.textContent = 'Welcome to Battleship, a classic warfare strategy game. What mode do you want to play?'
        modalBtn.textContent = 'vs. Computer'
        modalBtnTwo.textContent = '2 Player';
        modal.appendChild(modalBtnTwo);
        modalContainer.style.display = 'block';
        modalBtn.addEventListener('click', storeGameMode);
        modalBtnTwo.addEventListener('click', storeGameMode);
    }

    function storeGameMode(e) {
        modalBtn.removeEventListener('click', storeGameMode);
        modalBtnTwo.removeEventListener('click', storeGameMode);
        let playerDisplay;
        currentPlayer = game.playerOne;
        if (e.currentTarget.id === 'modal-btn') {
            game.playerTwo.isComputer = true;
            playerDisplay = 'your';
        } else {
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
        currentPlayer.playerName = nameInput.value;
        nameInput.value = '';
        modal.removeChild(nameInput);
        promptPlaceShips();
    } 

    //Prompt to place each ship in descending order of size. Ship length feeds into drag event loop
    function promptPlaceShips() {
        let s = 0;
        let ship;
        let shipLength;
        let shipName;
        let shipIds;
        placeEach();

        function placeEach() {
            ship = Object.entries(currentPlayer.playerArgs).at(s).at(0);
            shipLength = ship.slice(-1);
            shipName = ship.substring(0,ship.length - 1);
            modalText.textContent = `Place your ${shipName} by dragging and dropping on your board. The ${shipName} takes up ${shipLength} squares on the grid.`;
            modalBtn.textContent = 'Ready';
            modalContainer.style.display = 'block';
            modalBtn.addEventListener('click', dragPlacement);

            function dragPlacement() {
                modalBtn.removeEventListener('click', dragPlacement);
                shipIds = [];
                let i = 0;
                //Event listeners placed on self gameboard cells
                for (const cell of selfCells.children) {
                    cell.setAttribute('draggable', 'true');
                    cell.addEventListener('dragstart', dragStart);
                }

                function dragStart(e) {
                    for (const cell of selfCells.children) {
                        cell.removeEventListener('dragstart', dragStart);
                    }
                    i++;
                    const firstCellId = e.currentTarget.id.slice(5);
                    shipIds.push(firstCellId);
                    e.currentTarget.classList.add('sunk-ship');
                    //Remove ghost image while dragged
                    const img = new Image();
                    e.dataTransfer.setDragImage(img, 0, 0);
                    //Set next options for ship placement as perpendicular adjacent cells
                    const xOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
                    const xIndex = parseInt(xOptions.indexOf(firstCellId.slice(0,1)));
                    const yCoord = parseInt(firstCellId.slice(1));
                    let nextCells = [];
                    if (yCoord !== 0) {
                        nextCells.push('self-' + xOptions.at(xIndex) + (yCoord - 1));
                    }
                    if (yCoord !== 6) {
                        nextCells.push('self-' + xOptions.at(xIndex) + (yCoord + 1));
                    }
                    if (xIndex !== 0) {
                        nextCells.push('self-' + xOptions.at(xIndex - 1) + yCoord);
                    }
                    if (xIndex !== 6) {
                        nextCells.push('self-' + xOptions.at(xIndex + 1) + yCoord);
                    }

                    for (const item of nextCells) {
                        if (!item.includes(undefined) && currentPlayer.selfBoard.gameboard[item.slice(5)] === undefined) {
                            const cell = document.getElementById(item);
                            if (shipLength > 2) {
                                cell.addEventListener('dragenter', dragContinue);
                            } else {
                                cell.addEventListener('dragover', dragFinish);
                                cell.addEventListener('drop', placeDragged);
                            }
                        }
                    }

                    function dragContinue(e) {
                        for (const item of nextCells) {
                            const cell = document.getElementById(item);
                            cell.removeEventListener('dragenter', dragContinue);
                        }
                        e.currentTarget.removeEventListener('dragenter', dragContinue);
                        i++;
                        const currentCellId = e.currentTarget.id.slice(5);
                        e.currentTarget.classList.add('sunk-ship');
                        shipIds.push(currentCellId);
                        //compare the firstCellId with currentCellId
                        //if their letter is the same, check to see if the number increments or decrements
                        if (firstCellId.slice(0,1) === currentCellId.slice(0,1)) {
                            //if it decrements, add a listener to the cell minus one
                            if (firstCellId.slice(1) > currentCellId.slice(1)) {
                                const nextCellY = parseInt(currentCellId.slice(1)) - 1;
                                if (nextCellY < 0) {
                                    //if that's a negative number, go to the interruptDrag function that reports ship won't fit there
                                } else {
                                    const nextCell = document.getElementById('self-' + currentCellId.slice(0,1) + nextCellY);
                                    listenNextCell(nextCell);
                                }
                            } else {
                                //if it increments, add a listener to the cell plus one
                                const nextCellY = parseInt(currentCellId.slice(1)) + 1;
                                if (nextCellY > 6) {
                                    //if that's greater than 6, go to interruptDrag
                                } else {
                                    const nextCell = document.getElementById('self-' + currentCellId.slice(0,1) + nextCellY);
                                    listenNextCell(nextCell);
                                }
                            }
                        } else {
                            //if their number is the same, check to see if the letter increments or decrements vs the xOptions array
                            //if it decrements, add a listener to the cell minus a letter in the xOptions array
                            if(xOptions.indexOf(firstCellId.slice(0,1)) > xOptions.indexOf(currentCellId.slice(0,1))) {
                                const nextCellXIndex = xOptions.indexOf(currentCellId.slice(0,1)) - 1;
                                if (nextCellXIndex < 0) {
                                    interruptDrag();
                                } else {
                                    const nextCell = document.getElementById('self-' + xOptions.at(nextCellXIndex) + currentCellId.slice(1));
                                    listenNextCell(nextCell);
                                }
                            } else {
                                //if it increments, add a listener to the cell plus 1 index in the xOptions array
                                const nextCellXIndex = xOptions.indexOf(currentCellId.slice(0,1)) + 1;
                                if (nextCellXIndex > 6) {
                                    interruptDrag();
                                } else {
                                    const nextCell = document.getElementById('self-' + xOptions.at(nextCellXIndex) + currentCellId.slice(1));
                                    listenNextCell(nextCell);
                                }
                            }
                        }

                        function listenNextCell(nextCell) {
                            if (currentPlayer.selfBoard.gameboard[nextCell.id.slice(5)] === undefined) {
                                if (i < (shipLength - 1)) {
                                    nextCell.addEventListener('dragenter', dragContinue);
                                } else {
                                    nextCell.addEventListener('dragover', dragFinish);
                                    nextCell.addEventListener('drop', placeDragged);
                                }
                            } else {
                                interruptDrag();
                            }
                        }
                    }

                    function dragFinish(e) {
                        //highlight this and other cells green to indicate the ship can be placed
                        e.currentTarget.classList.add('has-ship');
                        for (const item of shipIds) {
                            const shipCell = document.getElementById('self-' + item);
                            shipCell.classList.remove('sunk-ship');
                            shipCell.classList.add('has-ship');
                        }
                        e.preventDefault();
                    }

                    function placeDragged(e) {
                        e.currentTarget.removeEventListener('dragover', dragFinish);
                        for (const item of nextCells) {
                            const cell = document.getElementById(item);
                            cell.removeEventListener('dragover', dragFinish);
                        }
                        e.currentTarget.removeEventListener('drop', placeDragged);
                        e.preventDefault();
                        const lastCellId = e.currentTarget.id.slice(5);
                        shipIds.push(lastCellId);
                        //Add the ship to the selfBoard
                        const placedShip = currentPlayer.selfBoard.placeShip(`${shipName}`, shipIds);
                        currentPlayer.selfBoard.gameboardShips.push(placedShip);
                        //increment s, if s is less than or equal to playerArgs.entries.length, placeEach again. 
                        //otherwise, remove draggable cells and start game/move to next player selection
                        s++;
                        if (s < Object.entries(currentPlayer.playerArgs).length) {
                            placeEach();
                        } else {
                            if (currentPlayer === game.playerOne && game.playerTwo.isComputer === false) {
                                for (const cell of selfCells.children) {
                                    cell.classList.remove('has-ship');
                                }
                                currentPlayer = game.playerTwo;
                                namePrompt(`Player Two's`);
                            } else if (game.playerTwo.isComputer === true) {
                                currentPlayer = game.playerTwo;
                                generateShips();
                            } else {
                                for (const cell of selfCells.children) {
                                    cell.setAttribute('draggable', 'false');
                                }
                                displayPassDevice();
                            }
                        }
                        
                    }

                    function interruptDrag() {
                        for (const item of shipIds) {
                            const shipCell = document.getElementById('self-' + item);
                            shipCell.classList.remove('sunk-ship');
                        }                        
                        dragPlacement();
                    }
                }
            }
        }
    }

    function generateShips() {
        let s = 0;
        let ship;
        let shipLength;
        let shipName;
        generateEach();

        function generateEach() {
            let shipCoords = [];
            ship = Object.entries(currentPlayer.playerArgs).at(s).at(0);
            shipLength = ship.slice(-1);
            shipName = ship.substring(0,ship.length - 1);

            while (shipCoords.length < shipLength) {
                shipCoords = [];
                const xOptions = 'abcdefg';
                const xNum = Math.floor(Math.random() * xOptions.length);
                const xCoord = xOptions[xNum];
                const yCoord = Math.floor(Math.random() * xOptions.length);
                const randomCoord = xCoord + yCoord;
                if (!currentPlayer.selfBoard.gameboard[randomCoord]) {
                    shipCoords.push(randomCoord);
                    //generate a random number 0 or 1 to determine vertical or horizontal ship placement
                    const direction = Math.floor(Math.random() * 2);
                    if (direction === 0) {
                        //take randomCoord and increase the yCoord of the string shipLength - 1 times
                        for (let n = 0; n < (shipLength - 1); n++) {
                            const newY = yCoord + (n + 1);
                            //if the yCoord of any becomes greater than 6, break the loop
                            if (newY > 6) { break; } else {
                                const newCoord = xCoord + newY;
                                if (!currentPlayer.selfBoard.gameboard[newCoord]) {
                                    shipCoords.push(newCoord);
                                }
                            }
                        }
                    } else {
                        //take randomCoord and increase the xCoord of the string shipLength - 1 times
                        for (let n = 0; n < (shipLength - 1); n++) {
                            const newXNum = xNum + (n + 1);
                            //before converting to a letter and concatenating, if the xCoord pre-number becomes greate than 6, break
                            if (newXNum > 6) { break; } else {
                                const newCoord = xOptions[newXNum] + yCoord;
                                if (!currentPlayer.selfBoard.gameboard[newCoord]) {
                                    shipCoords.push(newCoord);
                                }
                            }
                        }
                    }
                }
            }

            const placedShip = currentPlayer.selfBoard.placeShip(`${shipName}`, shipCoords);
            currentPlayer.selfBoard.gameboardShips.push(placedShip);
            s++;
            if (s < Object.entries(currentPlayer.playerArgs).length) {
                generateEach();
            } else {
                promptGameplay();
            }
        }
    }

    return { askGameMode }
}

export { populateBoard, reportMiss, reportHit, reportSunk, reportEnd, buildSetupPrompts };