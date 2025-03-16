const board = document.getElementById("board");
const winMsg = document.getElementById('winMsg');
var cells = document.querySelectorAll(".cell"); // not changing var into let, it shows how far ive come.
let movesCount = 0;
let movesArr = Array(9).fill(''); // Array to track moves

// let winner = null;
// let patternList = [];

board.addEventListener("click", addClicks);
function addClicks(e) { e.target.classList.contains("cell") && placeToken(e.target); }

var player = "x";
let stroke0 = document.getElementById("winStroke0");
let stroke1 = document.getElementById("winStroke1");

function placeToken(cell) {
    let mark = document.createElement("span");
    mark.className = `mark-${player}`;
    // console.log(mark.className);

    let i = cell.getAttribute("index");

    cell.appendChild(mark);
    movesArr[i] = `${player}`;
    movesCount++;

    stroke0.style.display = "block";
    stroke1.style.display = "block";

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
    let patternList = []; // Reset before checking

    for (let type in winPatterns) { // for...in for keys of objects
        for (let pattern of winPatterns[type]) { // for...of for arr
            let win = movesArr[pattern[0]] !== '' && movesArr[pattern[0]] === movesArr[pattern[1]] && movesArr[pattern[1]] === movesArr[pattern[2]];
            if (win) {
                drawStrokes(pattern[1], pattern[1] - pattern[0]);
                // console.log(pattern[1], pattern[1]-pattern[0]);
            }
        }
    }
    // console.log(difference);
    if (patternList.length > 0) {
        console.log(patternList);
        winMsg.textContent = `${player} wins`;
        board.removeEventListener('click', addClicks);
    } else if (movesCount === 9) {
        winMsg.textContent = "draw";
    }
}


function drawStrokes(midd, diff) {

    if (midd === 1 && diff === 1) {
        stroke0.style.width = "100%";
        stroke0.style.transform = `translate(0, calc(-1*min(32vh, 32vw)))`;
        console.log(1);
    } else if (midd === 4 && diff === 4) {
        stroke0.style.width = "140%";
        stroke0.style.transform = `translate(0, 0) rotate(45deg)`;
        console.log(2);
    } else if (midd === 4 && diff === 1) {
        stroke0.style.width = "100%";
        stroke0.style.transform = `translate(0, 0)`;
        console.log(2);
    } else if (midd === 7 && diff === 1) {
        stroke0.style.width = "100%";
        stroke0.style.transform = `translate(0, min(32vh, 32vw))`;
        console.log(3);
    } else if (midd === 3 && diff === 3) {
        stroke1.style.height = "100%";
        stroke1.style.transform = `translate(calc(-1*min(32vh, 32vw)), 0)`;
        console.log(4);
    } else if (midd === 4 && diff === 3) {
        stroke1.style.height = "100%";
        stroke1.style.transform = `translate(0, 0)`;
        console.log(4);
    } else if (midd === 4 && diff === 2) {
        stroke1.style.height = "140%";
        stroke1.style.transform = `translate(0, 0) rotate(45deg)`;
        console.log(5);
    } else if (midd === 5 && diff === 3) {
        stroke1.style.height = "100%";
        stroke1.style.transform = `translate(min(32vh, 32vw), 0)`;
        console.log(6);
    }
}



