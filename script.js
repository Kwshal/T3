const board = document.getElementById("board");
const winMsg = document.getElementById('winMsg');
var cells = document.querySelectorAll(".cell"); // not changing var into let, it shows how far ive come.
let movesCount = 0;
let movesArr = Array(9).fill(''); // Array to track moves

// let winner = null;
let patternList = [];

board.addEventListener("click", addClicks);
function addClicks(e) { e.target.classList.contains("cell") && placeToken(e.target); }

var player = "x";
var winStroke1 = document.getElementById("winStroke1");
var winStroke2 = document.getElementById("winStroke2");

function placeToken(cell) {
    let mark = document.createElement("span");
    mark.className = `mark-${player}`;
    // console.log(mark.className);

    let i = cell.getAttribute("index");

    cell.appendChild(mark);
    movesArr[i] = `${player}`;
    movesCount++;

    checkWinner();

    player = player === 'x' ? 'o' : 'x'; // Switch turn
    cell.style.pointerEvents = "none"; // ensure one mark per cell
}

function checkWinner() {
    const winPatterns = {
        rows: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
        cols: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
        diags: [[0, 4, 8], [2, 4, 6]]
    };
    for (let type in winPatterns) { // for...in for keys of objects
        for (let pattern of winPatterns[type]) { // for...of for arr
            let win = movesArr[pattern[0]] !== '' && movesArr[pattern[0]] === movesArr[pattern[1]] && movesArr[pattern[1]] === movesArr[pattern[2]];
            if (!win && movesCount === 9) {
                winMsg.textContent = "draw";
            } else if (win) {
                patternList.push(pattern); // X
                console.log(pattern);
                winMsg.textContent = `${player} wins`;
                board.removeEventListener('click', addClicks);
                return patternList[0]; // 
            }
        }
    }
}


function drawStrokes(winTypes) {
    const strokePositions = {
        row: [0, 45, 90],
        col: [90, 90, 90],
        diag: [45, -45]
    };

    winTypes.forEach((win, index) => {
        const [type, pos] = win;
        const stroke = document.getElementById(`winStroke${index + 1}`);
        stroke.style.display = 'block';
        stroke.style.rotate = `${type === 'diag' ? strokePositions[type][pos] : strokePositions[type][pos]}deg`;
        stroke.style.height = '100%';
    });
}



