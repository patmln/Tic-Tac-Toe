var grid = Array.from(document.querySelectorAll(".grid"))

var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

var gameHistory = [[
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]];

var grid21 = document.querySelector("#grid21");
var grid22 = document.querySelector("#grid22");
var grid23 = document.querySelector("#grid23");
var grid24 = document.querySelector("#grid24");
var grid25 = document.querySelector("#grid25");
var grid26 = document.querySelector("#grid26");
var grid27 = document.querySelector("#grid27");
var grid28 = document.querySelector("#grid28");
var grid29 = document.querySelector("#grid29");

//choose if x or o button

const comment = document.querySelector('#comment');
const instructions = document.querySelector('#instructions');
const xButton = document.querySelector('#xButton');
const oButton = document.querySelector('#oButton');
var value = null;

if (value == null) {
    grid.disabled = true;
}

function chooseX() {
    instructions.style.visibility = "hidden";
    xButton.style.visibility = "hidden";
    oButton.style.visibility = "hidden";
    comment.innerText = "Player X's turn."
    value = 1;
    grid.disabled = false;
}

function chooseO() {
    instructions.style.visibility = "hidden";
    xButton.style.visibility = "hidden";
    oButton.style.visibility = "hidden";
    comment.innerText = "Player O's turn."
    value = 2;
    grid.disabled = false;
}

//game play
function playDetails() {
    if (value == 1) {
        comment.innerText = "Player O's turn."
        value = 2;
    }
    else {
        comment.innerText = "Player X's turn."
        value = 1; 
    }
    var board1 = JSON.parse(JSON.stringify(board));
    gameHistory.push(board1);
}

function play(element) {
    var row = element.dataset.row
    var column = element.dataset.column
    if (value == 1) {
        board[row][column] = "X"
    }
    else {
        board[row][column] = "O"
    }
    element.value = board[row][column]
    element.disabled = true
}

function result(element) {
    var row = element.dataset.row
    var column = element.dataset.column
    var emptyArray = []
}

grid.forEach((element, index) => {
    element.addEventListener("click", function() {
        play(element)
        playDetails()
        result(element)
    })
}) 

//check if x or o won or draw

const movesButton = document.querySelector('#movesButton');
const hidden = "hidden"


/*
function results() {
    //X is winnner
    if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") {
        grid[0].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[1].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[2].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[3].disabled = true;
        grid[4].disabled = true;
        grid[5].disabled = true;
        grid[6].disabled = true;
        grid[7].disabled = true;
        grid[8].disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") {
        grid[3].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[4].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[5].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[0].disabled = true;
        grid[1].disabled = true;
        grid[2].disabled = true;
        grid[6].disabled = true;
        grid[7].disabled = true;
        grid[8].disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") {
        grid[6].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[7].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[8].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[0].disabled = true;
        grid[1].disabled = true;
        grid[2].disabled = true;
        grid[3].disabled = true;
        grid[4].disabled = true;
        grid[5].disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") {
        grid[0].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[3].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[6].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[1].disabled = true;
        grid[2].disabled = true;
        grid[4].disabled = true;
        grid[5].disabled = true;
        grid[7].disabled = true;
        grid[8].disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") {
        grid[1].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[4].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[7].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[0].disabled = true;
        grid[2].disabled = true;
        grid[3].disabled = true;
        grid[5].disabled = true;
        grid[6].disabled = true;
        grid[8].disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") {
        grid[2].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[5].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[8].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[0].disabled = true;
        grid[1].disabled = true;
        grid[3].disabled = true;
        grid[4].disabled = true;
        grid[6].disabled = true;
        grid[7].disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") {
        grid[0].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[4].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[8].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[1].disabled = true;
        grid[2].disabled = true;
        grid[3].disabled = true;
        grid[5].disabled = true;
        grid[6].disabled = true;
        grid[7].disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
        grid[2].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[4].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[6].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[0].disabled = true;
        grid[1].disabled = true;
        grid[3].disabled = true;
        grid[5].disabled = true;
        grid[7].disabled = true;
        grid[8].disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    //O is winnner
    else if (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O") {
        grid[0].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[1].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[2].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[3].disabled = true;
        grid[4].disabled = true;
        grid[5].disabled = true;
        grid[6].disabled = true;
        grid[7].disabled = true;
        grid[8].disabled = true;
        comment.innerText = "Player O won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") {
        grid[3].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[4].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[5].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[0].disabled = true;
        grid[1].disabled = true;
        grid[2].disabled = true;
        grid[6].disabled = true;
        grid[7].disabled = true;
        grid[8].disabled = true;
        comment.innerText = "Player O won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O") {
        grid[6].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[7].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[8].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[0].disabled = true;
        grid[1].disabled = true;
        grid[2].disabled = true;
        grid[3].disabled = true;
        grid[4].disabled = true;
        grid[5].disabled = true;
        comment.innerText = "Player O won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") {
        grid[0].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[3].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[6].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[1].disabled = true;
        grid[2].disabled = true;
        grid[4].disabled = true;
        grid[5].disabled = true;
        grid[7].disabled = true;
        grid[8].disabled = true;
        comment.innerText = "Player O won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") {
        grid[1].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[4].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[7].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[0].disabled = true;
        grid[2].disabled = true;
        grid[3].disabled = true;
        grid[5].disabled = true;
        grid[6].disabled = true;
        grid[8].disabled = true;
        comment.innerText = "Player O won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O") {
        grid[2].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[5].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[8].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[0].disabled = true;
        grid[1].disabled = true;
        grid[3].disabled = true;
        grid[4].disabled = true;
        grid[6].disabled = true;
        grid[7].disabled = true;
        comment.innerText = "Player O won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") {
        grid[0].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[4].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[8].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[1].disabled = true;
        grid[2].disabled = true;
        grid[3].disabled = true;
        grid[5].disabled = true;
        grid[6].disabled = true;
        grid[7].disabled = true;
        comment.innerText = "Player O won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O") {
        grid[2].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[4].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[6].style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid[0].disabled = true;
        grid[1].disabled = true;
        grid[3].disabled = true;
        grid[5].disabled = true;
        grid[7].disabled = true;
        grid[8].disabled = true;
        comment.innerText = "Player O won!";
        movesButton.classList.remove(hidden)
    }
    //draw
    else if ((board[0][0] == "X" || board[0][0] == "O") && (board[0][1] == "X" || board[0][1] == "O") && 
        (board[0][2] == "X" || board[0][2] == "O") && (board[1][0] == "X" || board[1][0] == "O") &&
        (board[1][1] == "X" || board[1][1] == "O") && (board[1][2] == "X" || board[1][2] == "O") &&
        (board[2][0] == "X" || board[2][0] == "O") && (board[2][1] == "X" || board[2][1] == "O") &&
        (board[2][2] == "X" || board[2][2] == "O")) {
            comment.innerText = "It's a draw!";
            movesButton.classList.remove(hidden)
    } 
}
*/

//reset
function reset() {
    location.reload();
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
}

//history
const tttgrid2 = document.querySelector('#tttgrid2');
var i = 0;

function showHistory() {
    prevButton.classList.remove(hidden)
    nextButton.classList.remove(hidden)
    tttgrid2.classList.remove(hidden)
    grid21.classList.remove(hidden)
    grid22.classList.remove(hidden)
    grid23.classList.remove(hidden)
    grid24.classList.remove(hidden)
    grid25.classList.remove(hidden)
    grid26.classList.remove(hidden)
    grid27.classList.remove(hidden)
    grid28.classList.remove(hidden)
    grid29.classList.remove(hidden)
    prevButton.disabled = true;
    grid21.value = gameHistory[i][0][0];
    grid22.value = gameHistory[i][0][1];
    grid23.value = gameHistory[i][0][2];
    grid24.value = gameHistory[i][1][0];
    grid25.value = gameHistory[i][1][1];
    grid26.value = gameHistory[i][1][2];
    grid27.value = gameHistory[i][2][0];
    grid28.value = gameHistory[i][2][1];
    grid29.value = gameHistory[i][2][2];
}

const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

function previous() {
    if (i > 0) {
        nextButton.disabled = false;
        i--;
        grid21.value = gameHistory[i][0][0];
        grid22.value = gameHistory[i][0][1];
        grid23.value = gameHistory[i][0][2];
        grid24.value = gameHistory[i][1][0];
        grid25.value = gameHistory[i][1][1];
        grid26.value = gameHistory[i][1][2];
        grid27.value = gameHistory[i][2][0];
        grid28.value = gameHistory[i][2][1];
        grid29.value = gameHistory[i][2][2];
        if (i == 0) {
            prevButton.disabled = true;
        }
    }
}

function next() {
    if (i < gameHistory.length - 1) {
        prevButton.disabled = false;
        i++;
        grid21.value = gameHistory[i][0][0];
        grid22.value = gameHistory[i][0][1];
        grid23.value = gameHistory[i][0][2];
        grid24.value = gameHistory[i][1][0];
        grid25.value = gameHistory[i][1][1];
        grid26.value = gameHistory[i][1][2];
        grid27.value = gameHistory[i][2][0];
        grid28.value = gameHistory[i][2][1];
        grid29.value = gameHistory[i][2][2];
        if (i == gameHistory.length - 1) {
            nextButton.disabled = true;
        }
    }
}

