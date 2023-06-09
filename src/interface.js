//when it is playerX's turn, populate board with left side playerXBoard (non-interactable), self-a1 etc for display hook
//self- and enemy- are coded in so that the board is flexible to reclassing if playerTwo becomes a human
function populateBoard (selfBoard, enemyBoard) {
    //reset the board - all children of #self-cells and #enemy-cells remove all classes

    //for cell properties in gameboard object - if they exist (have designated ship), give matching id on selfBoard class has-ship
    for (const cell in selfBoard.gameboard) {
        const cellDiv = document.getElementById(`self-${cell}`);
        cellDiv.classList.add('has-ship');
    }

    //to populate hits and misses on each gameboard side using input of self vs enemy board
    function markAttacks(designation, board) {
        board.shotList.forEach(shot => {
            const cellDiv = document.getElementById(`${designation}-${shot}`);
            if (board.gameboard.hasOwnProperty(shot)) {
                //if the attack logged in the attack history matches a property name in the gameboard, mark with class hit
                cellDiv.classList.add('hit');
            } else {
                //if the attack logged does not match a property name in the gameboard, mark with class miss
                cellDiv.classList.add('miss');
            }
        });   
    }

    markAttacks('self', selfBoard);
    markAttacks('enemy', enemyBoard);

    function handleAttack(e) {
        const cellId = 'enemy-' + e.currentTarget.id;
        attack(cellId);
    }

    //add listeners to enemyBoard to call the player's attack function
    document.getElementById('enemy-cells').children.forEach(cell => {
        cell.addEventListener('click', handleAttack);
    });
}

export { populateBoard };