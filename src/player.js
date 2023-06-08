//import inputCoord from DOM control

const Player = (opponentBoard, isComputer) => {
    const attack = () => {
        if (isComputer === true) {
            //generate a random number 1-7 twice, one translates to a-j, concatenate with the number
            //called with xOptions length so changes in board size happen in both dimensions
            //check the opponent board's shotList, then attack, otherwise loop again
            for (let i = 0; i < 49; i++) {
                const xOptions = 'abcdefghij';
                const xCoord = xOptions[Math.floor(Math.random() * xOptions.length)];
                const yCoord = Math.floor(Math.random() * xOptions.length);
                const randomCoord = xCoord + yCoord;
                if (!opponentBoard.shotList.includes(randomCoord)) {
                    return opponentBoard.receiveAttack(randomCoord);
                }
            }
        } else {
            //opponentBoard.receiveAttack(inputCoord())
        }
    };

    return { attack };
}

export { Player };