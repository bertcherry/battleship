/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGameboard: () => (/* binding */ createGameboard),
/* harmony export */   playerOneArgs: () => (/* binding */ playerOneArgs),
/* harmony export */   playerTwoArgs: () => (/* binding */ playerTwoArgs)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");


const createGameboard = (playerArgs) => {
    let gameboard = {};
    let gameboardShips = [];
    let shotList = [];

    const placeShip = (name, ...args) => {
        const coordinates = [...args];
        const length = coordinates.length;
        coordinates.forEach(coordinate => {
            gameboard[coordinate] = name;
        });
        return (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.createShip)(name, length);
    }

    const carrier = placeShip('carrier', ...playerArgs.carrier);
    const battleship = placeShip('battleship', ...playerArgs.battleship);
    const destroyer = placeShip('destroyer', ...playerArgs.destroyer);
    const submarine = placeShip('submarine', ...playerArgs.submarine);
    const patrolBoat = placeShip('patrol boat', ...playerArgs.patrolBoat);
    gameboardShips.push(carrier, battleship, destroyer, submarine, patrolBoat);

    function allSunk() {
        if (gameboardShips.every(item => item.ship.sunk === true)) {
            return true;
        } else {
            return false;
        }
    }

    function receiveAttack(coordinate) {
        shotList.push(coordinate);
        if (gameboard[coordinate] === undefined) {
            //report the shot as a miss
        } else {
            const hitShip = gameboardShips.find(item => item.ship.name === gameboard[coordinate]);
            hitShip.hit();
            allSunk();
            //report the shot as a hit
            //if it sunk the ship, report that they sunk hitShip.name
        }
    }

    return { placeShip, receiveAttack, allSunk, gameboard, gameboardShips, shotList, destroyer };
}

//carrier 5, battleship 4, destroyer 3, submarine 3, patrol boat 2
//default arguments to later be replaced by DOM manipulation or random
const playerOneArgs = {
    carrier: ['b1', 'b2', 'b3', 'b4', 'b5'],
    battleship: ['c2', 'c3', 'c4', 'c5'],
    destroyer: ['a1', 'a2', 'a3'],
    submarine: ['f5', 'f6', 'f7'],
    patrolBoat: ['j3', 'j2']
}

const playerTwoArgs = {
    carrier: ['h1', 'h2', 'h3', 'h4', 'h5'],
    battleship: ['e2', 'e3', 'e4', 'e5'],
    destroyer: ['b1', 'b2', 'b3'],
    submarine: ['i5', 'i6', 'i7'],
    patrolBoat: ['a3', 'a2']
}



/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateBoard: () => (/* binding */ populateBoard)
/* harmony export */ });
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



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface.js */ "./src/interface.js");


const Player = (selfBoard, enemyBoard, isComputer) => {
    const attack = (coordinate) => {
        enemyBoard.receiveAttack(coordinate);
    }

    const generateAttack = () => {
        if (isComputer === true) {
            //generate a random number 1-7 twice, one translates to a-j, concatenate with the number
            //called with xOptions length so changes in board size happen in both dimensions
            //check the enemy board's shotList, then attack, otherwise loop again
            for (let i = 0; i < 49; i++) {
                const xOptions = 'abcdefghij';
                const xCoord = xOptions[Math.floor(Math.random() * xOptions.length)];
                const yCoord = Math.floor(Math.random() * xOptions.length);
                const randomCoord = xCoord + yCoord;
                if (!enemyBoard.shotList.includes(randomCoord)) {
                    return randomCoord;
                }
            }
        }
    };

    const controlTurn = () => {
        if (isComputer === true) {
            attack(generateAttack());
        } else {
            (0,_interface_js__WEBPACK_IMPORTED_MODULE_0__.populateBoard)(selfBoard, enemyBoard);
        }
    };

    return { attack, controlTurn };
}





/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShip: () => (/* binding */ createShip)
/* harmony export */ });
const createShip = (name, length) => {
    const ship = {
        name: name,
        length: length,
        hits: 0,
        sunk: false
    };

    const isSunk = () => {
        ship.sunk = true;
    }

    const hit = () => {
        ship.hits = ship.hits + 1;
        if (ship.hits === ship.length) {
            isSunk();
        }
        return ship;
    };

    return { ship, hit };
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   testGame: () => (/* binding */ testGame)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");



const playGame = () => {
    //reverse initiation of players and boards once ship placement is in control of players
    const playerOneBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.createGameboard)(_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.playerOneArgs);
    const playerTwoBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.createGameboard)(_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.playerTwoArgs);
    const playerOne = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.Player)(playerOneBoard, playerTwoBoard, false);
    const playerTwo = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.Player)(playerTwoBoard, playerOneBoard, true);
    for (let i = 0; i < 49; i++) {
        playerOne.controlTurn();
        if (playerTwoBoard.allSunk()) {
            //end game
            break;
        }
        playerTwo.controlTurn();
        if (playerOneBoard.allSunk()) {
            //end game
            break;
        }
    } 

    return { playerOneBoard, playerTwoBoard, playerOne, playerTwo };
}

const testGame = playGame();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxlQUFlLG9EQUFVO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF3RCxLQUFLO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELFlBQVksR0FBRyxLQUFLO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckMrQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixZQUFZLDREQUFhO0FBQ3pCO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDMEM7O0FBRS9FO0FBQ0E7QUFDQSwyQkFBMkIsOERBQWUsQ0FBQyx3REFBYTtBQUN4RCwyQkFBMkIsOERBQWUsQ0FBQyx3REFBYTtBQUN4RCxzQkFBc0Isa0RBQU07QUFDNUIsc0JBQXNCLGtEQUFNO0FBQzVCLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tICcuL3NoaXAuanMnO1xuXG5jb25zdCBjcmVhdGVHYW1lYm9hcmQgPSAocGxheWVyQXJncykgPT4ge1xuICAgIGxldCBnYW1lYm9hcmQgPSB7fTtcbiAgICBsZXQgZ2FtZWJvYXJkU2hpcHMgPSBbXTtcbiAgICBsZXQgc2hvdExpc3QgPSBbXTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChuYW1lLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBjb29yZGluYXRlcy5sZW5ndGg7XG4gICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICBnYW1lYm9hcmRbY29vcmRpbmF0ZV0gPSBuYW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVNoaXAobmFtZSwgbGVuZ3RoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJyaWVyID0gcGxhY2VTaGlwKCdjYXJyaWVyJywgLi4ucGxheWVyQXJncy5jYXJyaWVyKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gcGxhY2VTaGlwKCdiYXR0bGVzaGlwJywgLi4ucGxheWVyQXJncy5iYXR0bGVzaGlwKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBwbGFjZVNoaXAoJ2Rlc3Ryb3llcicsIC4uLnBsYXllckFyZ3MuZGVzdHJveWVyKTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBwbGFjZVNoaXAoJ3N1Ym1hcmluZScsIC4uLnBsYXllckFyZ3Muc3VibWFyaW5lKTtcbiAgICBjb25zdCBwYXRyb2xCb2F0ID0gcGxhY2VTaGlwKCdwYXRyb2wgYm9hdCcsIC4uLnBsYXllckFyZ3MucGF0cm9sQm9hdCk7XG4gICAgZ2FtZWJvYXJkU2hpcHMucHVzaChjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdCk7XG5cbiAgICBmdW5jdGlvbiBhbGxTdW5rKCkge1xuICAgICAgICBpZiAoZ2FtZWJvYXJkU2hpcHMuZXZlcnkoaXRlbSA9PiBpdGVtLnNoaXAuc3VuayA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSB7XG4gICAgICAgIHNob3RMaXN0LnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgIGlmIChnYW1lYm9hcmRbY29vcmRpbmF0ZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy9yZXBvcnQgdGhlIHNob3QgYXMgYSBtaXNzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBoaXRTaGlwID0gZ2FtZWJvYXJkU2hpcHMuZmluZChpdGVtID0+IGl0ZW0uc2hpcC5uYW1lID09PSBnYW1lYm9hcmRbY29vcmRpbmF0ZV0pO1xuICAgICAgICAgICAgaGl0U2hpcC5oaXQoKTtcbiAgICAgICAgICAgIGFsbFN1bmsoKTtcbiAgICAgICAgICAgIC8vcmVwb3J0IHRoZSBzaG90IGFzIGEgaGl0XG4gICAgICAgICAgICAvL2lmIGl0IHN1bmsgdGhlIHNoaXAsIHJlcG9ydCB0aGF0IHRoZXkgc3VuayBoaXRTaGlwLm5hbWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuaywgZ2FtZWJvYXJkLCBnYW1lYm9hcmRTaGlwcywgc2hvdExpc3QsIGRlc3Ryb3llciB9O1xufVxuXG4vL2NhcnJpZXIgNSwgYmF0dGxlc2hpcCA0LCBkZXN0cm95ZXIgMywgc3VibWFyaW5lIDMsIHBhdHJvbCBib2F0IDJcbi8vZGVmYXVsdCBhcmd1bWVudHMgdG8gbGF0ZXIgYmUgcmVwbGFjZWQgYnkgRE9NIG1hbmlwdWxhdGlvbiBvciByYW5kb21cbmNvbnN0IHBsYXllck9uZUFyZ3MgPSB7XG4gICAgY2FycmllcjogWydiMScsICdiMicsICdiMycsICdiNCcsICdiNSddLFxuICAgIGJhdHRsZXNoaXA6IFsnYzInLCAnYzMnLCAnYzQnLCAnYzUnXSxcbiAgICBkZXN0cm95ZXI6IFsnYTEnLCAnYTInLCAnYTMnXSxcbiAgICBzdWJtYXJpbmU6IFsnZjUnLCAnZjYnLCAnZjcnXSxcbiAgICBwYXRyb2xCb2F0OiBbJ2ozJywgJ2oyJ11cbn1cblxuY29uc3QgcGxheWVyVHdvQXJncyA9IHtcbiAgICBjYXJyaWVyOiBbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1J10sXG4gICAgYmF0dGxlc2hpcDogWydlMicsICdlMycsICdlNCcsICdlNSddLFxuICAgIGRlc3Ryb3llcjogWydiMScsICdiMicsICdiMyddLFxuICAgIHN1Ym1hcmluZTogWydpNScsICdpNicsICdpNyddLFxuICAgIHBhdHJvbEJvYXQ6IFsnYTMnLCAnYTInXVxufVxuXG5leHBvcnQgeyBjcmVhdGVHYW1lYm9hcmQsIHBsYXllck9uZUFyZ3MsIHBsYXllclR3b0FyZ3MgfTsiLCIvL3doZW4gaXQgaXMgcGxheWVyWCdzIHR1cm4sIHBvcHVsYXRlIGJvYXJkIHdpdGggbGVmdCBzaWRlIHBsYXllclhCb2FyZCAobm9uLWludGVyYWN0YWJsZSksIHNlbGYtYTEgZXRjIGZvciBkaXNwbGF5IGhvb2tcbi8vc2VsZi0gYW5kIGVuZW15LSBhcmUgY29kZWQgaW4gc28gdGhhdCB0aGUgYm9hcmQgaXMgZmxleGlibGUgdG8gcmVjbGFzc2luZyBpZiBwbGF5ZXJUd28gYmVjb21lcyBhIGh1bWFuXG5mdW5jdGlvbiBwb3B1bGF0ZUJvYXJkIChzZWxmQm9hcmQsIGVuZW15Qm9hcmQpIHtcbiAgICAvL3Jlc2V0IHRoZSBib2FyZCAtIGFsbCBjaGlsZHJlbiBvZiAjc2VsZi1jZWxscyBhbmQgI2VuZW15LWNlbGxzIHJlbW92ZSBhbGwgY2xhc3Nlc1xuXG4gICAgLy9mb3IgY2VsbCBwcm9wZXJ0aWVzIGluIGdhbWVib2FyZCBvYmplY3QgLSBpZiB0aGV5IGV4aXN0IChoYXZlIGRlc2lnbmF0ZWQgc2hpcCksIGdpdmUgbWF0Y2hpbmcgaWQgb24gc2VsZkJvYXJkIGNsYXNzIGhhcy1zaGlwXG4gICAgZm9yIChjb25zdCBjZWxsIGluIHNlbGZCb2FyZC5nYW1lYm9hcmQpIHtcbiAgICAgICAgY29uc3QgY2VsbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzZWxmLSR7Y2VsbH1gKTtcbiAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdoYXMtc2hpcCcpO1xuICAgIH1cblxuICAgIC8vdG8gcG9wdWxhdGUgaGl0cyBhbmQgbWlzc2VzIG9uIGVhY2ggZ2FtZWJvYXJkIHNpZGUgdXNpbmcgaW5wdXQgb2Ygc2VsZiB2cyBlbmVteSBib2FyZFxuICAgIGZ1bmN0aW9uIG1hcmtBdHRhY2tzKGRlc2lnbmF0aW9uLCBib2FyZCkge1xuICAgICAgICBib2FyZC5zaG90TGlzdC5mb3JFYWNoKHNob3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2VsbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2Rlc2lnbmF0aW9ufS0ke3Nob3R9YCk7XG4gICAgICAgICAgICBpZiAoYm9hcmQuZ2FtZWJvYXJkLmhhc093blByb3BlcnR5KHNob3QpKSB7XG4gICAgICAgICAgICAgICAgLy9pZiB0aGUgYXR0YWNrIGxvZ2dlZCBpbiB0aGUgYXR0YWNrIGhpc3RvcnkgbWF0Y2hlcyBhIHByb3BlcnR5IG5hbWUgaW4gdGhlIGdhbWVib2FyZCwgbWFyayB3aXRoIGNsYXNzIGhpdFxuICAgICAgICAgICAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vaWYgdGhlIGF0dGFjayBsb2dnZWQgZG9lcyBub3QgbWF0Y2ggYSBwcm9wZXJ0eSBuYW1lIGluIHRoZSBnYW1lYm9hcmQsIG1hcmsgd2l0aCBjbGFzcyBtaXNzXG4gICAgICAgICAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOyAgIFxuICAgIH1cblxuICAgIG1hcmtBdHRhY2tzKCdzZWxmJywgc2VsZkJvYXJkKTtcbiAgICBtYXJrQXR0YWNrcygnZW5lbXknLCBlbmVteUJvYXJkKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUF0dGFjayhlKSB7XG4gICAgICAgIGNvbnN0IGNlbGxJZCA9ICdlbmVteS0nICsgZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgICBhdHRhY2soY2VsbElkKTtcbiAgICB9XG5cbiAgICAvL2FkZCBsaXN0ZW5lcnMgdG8gZW5lbXlCb2FyZCB0byBjYWxsIHRoZSBwbGF5ZXIncyBhdHRhY2sgZnVuY3Rpb25cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5lbXktY2VsbHMnKS5jaGlsZHJlbi5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQXR0YWNrKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgcG9wdWxhdGVCb2FyZCB9OyIsImltcG9ydCB7IHBvcHVsYXRlQm9hcmQgfSBmcm9tICcuL2ludGVyZmFjZS5qcyc7XG5cbmNvbnN0IFBsYXllciA9IChzZWxmQm9hcmQsIGVuZW15Qm9hcmQsIGlzQ29tcHV0ZXIpID0+IHtcbiAgICBjb25zdCBhdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVBdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpc0NvbXB1dGVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvL2dlbmVyYXRlIGEgcmFuZG9tIG51bWJlciAxLTcgdHdpY2UsIG9uZSB0cmFuc2xhdGVzIHRvIGEtaiwgY29uY2F0ZW5hdGUgd2l0aCB0aGUgbnVtYmVyXG4gICAgICAgICAgICAvL2NhbGxlZCB3aXRoIHhPcHRpb25zIGxlbmd0aCBzbyBjaGFuZ2VzIGluIGJvYXJkIHNpemUgaGFwcGVuIGluIGJvdGggZGltZW5zaW9uc1xuICAgICAgICAgICAgLy9jaGVjayB0aGUgZW5lbXkgYm9hcmQncyBzaG90TGlzdCwgdGhlbiBhdHRhY2ssIG90aGVyd2lzZSBsb29wIGFnYWluXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ5OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4T3B0aW9ucyA9ICdhYmNkZWZnaGlqJztcbiAgICAgICAgICAgICAgICBjb25zdCB4Q29vcmQgPSB4T3B0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB4T3B0aW9ucy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICBjb25zdCB5Q29vcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB4T3B0aW9ucy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbUNvb3JkID0geENvb3JkICsgeUNvb3JkO1xuICAgICAgICAgICAgICAgIGlmICghZW5lbXlCb2FyZC5zaG90TGlzdC5pbmNsdWRlcyhyYW5kb21Db29yZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJhbmRvbUNvb3JkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjb250cm9sVHVybiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGlzQ29tcHV0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGF0dGFjayhnZW5lcmF0ZUF0dGFjaygpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvcHVsYXRlQm9hcmQoc2VsZkJvYXJkLCBlbmVteUJvYXJkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyBhdHRhY2ssIGNvbnRyb2xUdXJuIH07XG59XG5cblxuXG5leHBvcnQgeyBQbGF5ZXIgfTsiLCJjb25zdCBjcmVhdGVTaGlwID0gKG5hbWUsIGxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgICAgICBoaXRzOiAwLFxuICAgICAgICBzdW5rOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHNoaXAuc3VuayA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBzaGlwLmhpdHMgPSBzaGlwLmhpdHMgKyAxO1xuICAgICAgICBpZiAoc2hpcC5oaXRzID09PSBzaGlwLmxlbmd0aCkge1xuICAgICAgICAgICAgaXNTdW5rKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfTtcblxuICAgIHJldHVybiB7IHNoaXAsIGhpdCB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVTaGlwIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyLmpzJztcbmltcG9ydCB7IGNyZWF0ZUdhbWVib2FyZCwgcGxheWVyT25lQXJncywgcGxheWVyVHdvQXJncyB9IGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcblxuY29uc3QgcGxheUdhbWUgPSAoKSA9PiB7XG4gICAgLy9yZXZlcnNlIGluaXRpYXRpb24gb2YgcGxheWVycyBhbmQgYm9hcmRzIG9uY2Ugc2hpcCBwbGFjZW1lbnQgaXMgaW4gY29udHJvbCBvZiBwbGF5ZXJzXG4gICAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQocGxheWVyT25lQXJncyk7XG4gICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQocGxheWVyVHdvQXJncyk7XG4gICAgY29uc3QgcGxheWVyT25lID0gUGxheWVyKHBsYXllck9uZUJvYXJkLCBwbGF5ZXJUd29Cb2FyZCwgZmFsc2UpO1xuICAgIGNvbnN0IHBsYXllclR3byA9IFBsYXllcihwbGF5ZXJUd29Cb2FyZCwgcGxheWVyT25lQm9hcmQsIHRydWUpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDk7IGkrKykge1xuICAgICAgICBwbGF5ZXJPbmUuY29udHJvbFR1cm4oKTtcbiAgICAgICAgaWYgKHBsYXllclR3b0JvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgICAgICAgLy9lbmQgZ2FtZVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyVHdvLmNvbnRyb2xUdXJuKCk7XG4gICAgICAgIGlmIChwbGF5ZXJPbmVCb2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIC8vZW5kIGdhbWVcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIHJldHVybiB7IHBsYXllck9uZUJvYXJkLCBwbGF5ZXJUd29Cb2FyZCwgcGxheWVyT25lLCBwbGF5ZXJUd28gfTtcbn1cblxuY29uc3QgdGVzdEdhbWUgPSBwbGF5R2FtZSgpO1xuXG5leHBvcnQgeyB0ZXN0R2FtZSB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==