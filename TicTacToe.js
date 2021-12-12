var grid = document.querySelector("#grid");
var gridTwo = document.querySelector("#grid2");

var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

var grid1 = document.querySelector("#grid1");
var grid2 = document.querySelector("#grid2");
var grid3 = document.querySelector("#grid3");
var grid4 = document.querySelector("#grid4");
var grid5 = document.querySelector("#grid5");
var grid6 = document.querySelector("#grid6");
var grid7 = document.querySelector("#grid7");
var grid8 = document.querySelector("#grid8");
var grid9 = document.querySelector("#grid9");

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
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
}

function chooseX() {
    instructions.style.visibility = "hidden";
    xButton.style.visibility = "hidden";
    oButton.style.visibility = "hidden";
    comment.innerText = "Player X's turn."
    value = 1;
    grid1.disabled = false;
    grid2.disabled = false;
    grid3.disabled = false;
    grid4.disabled = false;
    grid5.disabled = false;
    grid6.disabled = false;
    grid7.disabled = false;
    grid8.disabled = false;
    grid9.disabled = false;
}

function chooseO() {
    instructions.style.visibility = "hidden";
    xButton.style.visibility = "hidden";
    oButton.style.visibility = "hidden";
    comment.innerText = "Player O's turn."
    value = 2;
    grid1.disabled = false;
    grid2.disabled = false;
    grid3.disabled = false;
    grid4.disabled = false;
    grid5.disabled = false;
    grid6.disabled = false;
    grid7.disabled = false;
    grid8.disabled = false;
    grid9.disabled = false;
}

//game play
function play1() {
    if (value == 1) {
        board[0][0] = "X";
        grid1.value = board[0][0];
        grid1.disabled = true;
        comment.innerText = "Player O's turn."
        value = 2;
        var board1 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board1);
    }
    else {
        board[0][0] = "O";
        grid1.value = board[0][0];
        grid1.disabled = true;
        comment.innerText = "Player X's turn."
        value = 1;
        var board1 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board1);
    }
}

function play2() {
    if (value == 1) {
        board[0][1] = "X";
        grid2.value = board[0][1];
        grid2.disabled = true;
        comment.innerText = "Player O's turn."
        value = 2;
        var board2 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board2);
    }
    else {
        board[0][1] = "O";
        grid2.value = board[0][1];
        grid2.disabled = true;
        comment.innerText = "Player X's turn."
        value = 1;
        var board2 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board2);
    }
}

function play3() {
    if (value == 1) {
        board[0][2] = "X";
        grid3.value = board[0][2];
        grid3.disabled = true;
        comment.innerText = "Player O's turn."
        value = 2;
        var board3 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board3);
    }
    else {
        board[0][2] = "O";
        grid3.value = board[0][2];
        grid3.disabled = true;
        comment.innerText = "Player X's turn."
        value = 1;
        var board3 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board3);
    }
}

function play4() {
    if (value == 1) {
        board[1][0] = "X";
        grid4.value = board[1][0];
        grid4.disabled = true;
        comment.innerText = "Player O's turn."
        value = 2;
        var board4 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board4);
    }
    else {
        board[1][0] = "O";
        grid4.value = board[1][0];
        grid4.disabled = true;
        comment.innerText = "Player X's turn."
        value = 1;
        var board4 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board4);
    }
}

function play5() {
    if (value == 1) {
        board[1][1] = "X";
        grid5.value = board[1][1];
        grid5.disabled = true;
        comment.innerText = "Player O's turn."
        value = 2;
        var board5 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board5);
    }
    else {
        board[1][1] = "O";
        grid5.value = board[1][1];
        grid5.disabled = true;
        comment.innerText = "Player X's turn."
        value = 1;
        var board5 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board5);
    }
}

function play6() {
    if (value == 1) {
        board[1][2] = "X";
        grid6.value = board[1][2];
        grid6.disabled = true;
        comment.innerText = "Player O's turn."
        value = 2;
        var board6 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board6);
    }
    else {
        board[1][2] = "O";
        grid6.value = board[1][2];
        grid6.disabled = true;
        comment.innerText = "Player X's turn."
        value = 1;
        var board6 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board6);
    }
}

function play7() {
    if (value == 1) {
        board[2][0] = "X";
        grid7.value = board[2][0];
        grid7.disabled = true;
        comment.innerText = "Player O's turn."
        value = 2;
        var board7 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board7);
    }
    else {
        board[2][0] = "O";
        grid7.value = board[2][0];
        grid7.disabled = true;
        comment.innerText = "Player X's turn."
        value = 1;
        var board7 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board7);
    }
}

function play8() {
    if (value == 1) {
        board[2][1] = "X";
        grid8.value = board[2][1];
        grid8.disabled = true;
        comment.innerText = "Player O's turn."
        value = 2;
        var board8 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board8);
    }
    else {
        board[2][1] = "O";
        grid8.value = board[2][1];
        grid8.disabled = true;
        comment.innerText = "Player X's turn."
        value = 1;
        var board8 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board8);
    }
}

function play9() {
    if (value == 1) {
        board[2][2] = "X";
        grid9.value = board[2][2];
        grid9.disabled = true;
        comment.innerText = "Player O's turn."
        value = 2;
        var board9 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board9);
    }
    else {
        board[2][2] = "O";
        grid9.value = board[2][2];
        grid9.disabled = true;
        comment.innerText = "Player X's turn."
        value = 1;
        var board9 = JSON.parse(JSON.stringify(board));
        gameHistory.push(board9);
    }
}

//check if x or o won or draw

const movesButton = document.querySelector('#movesButton');
const hidden = "hidden"

function results() {
    //X is winnner
    if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") {
        grid1.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid2.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid3.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid4.disabled = true;
        grid5.disabled = true;
        grid6.disabled = true;
        grid7.disabled = true;
        grid8.disabled = true;
        grid9.disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") {
        grid4.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid5.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid6.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid1.disabled = true;
        grid2.disabled = true;
        grid3.disabled = true;
        grid7.disabled = true;
        grid8.disabled = true;
        grid9.disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") {
        grid7.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid8.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid9.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid1.disabled = true;
        grid2.disabled = true;
        grid3.disabled = true;
        grid4.disabled = true;
        grid5.disabled = true;
        grid6.disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") {
        grid1.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid4.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid7.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid2.disabled = true;
        grid3.disabled = true;
        grid5.disabled = true;
        grid6.disabled = true;
        grid8.disabled = true;
        grid9.disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") {
        grid2.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid5.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid8.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid1.disabled = true;
        grid3.disabled = true;
        grid4.disabled = true;
        grid6.disabled = true;
        grid7.disabled = true;
        grid9.disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") {
        grid3.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid6.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid9.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid1.disabled = true;
        grid2.disabled = true;
        grid4.disabled = true;
        grid5.disabled = true;
        grid7.disabled = true;
        grid8.disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") {
        grid1.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid5.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid9.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid2.disabled = true;
        grid3.disabled = true;
        grid4.disabled = true;
        grid6.disabled = true;
        grid7.disabled = true;
        grid8.disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
        grid3.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid5.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid7.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid1.disabled = true;
        grid2.disabled = true;
        grid4.disabled = true;
        grid6.disabled = true;
        grid8.disabled = true;
        grid9.disabled = true;
        comment.innerText = "Player X won!";
        movesButton.classList.remove(hidden)
    }
    //O is winnner
    else if (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O") {
        grid1.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid2.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid3.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid4.disabled = true;
        grid5.disabled = true;
        grid6.disabled = true;
        grid7.disabled = true;
        grid8.disabled = true;
        grid9.disabled = true;
        comment.innerText = "Player O won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") {
        grid4.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid5.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid6.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid1.disabled = true;
        grid2.disabled = true;
        grid3.disabled = true;
        grid7.disabled = true;
        grid8.disabled = true;
        grid9.disabled = true;
        comment.innerText = "Player O won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O") {
        grid7.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid8.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid9.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid1.disabled = true;
        grid2.disabled = true;
        grid3.disabled = true;
        grid4.disabled = true;
        grid5.disabled = true;
        grid6.disabled = true;
        comment.innerText = "Player O won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") {
        grid1.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid4.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid7.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid2.disabled = true;
        grid3.disabled = true;
        grid5.disabled = true;
        grid6.disabled = true;
        grid8.disabled = true;
        grid9.disabled = true;
        comment.innerText = "Player O won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") {
        grid2.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid5.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid8.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid1.disabled = true;
        grid3.disabled = true;
        grid4.disabled = true;
        grid6.disabled = true;
        grid7.disabled = true;
        grid9.disabled = true;
        comment.innerText = "Player O won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O") {
        grid3.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid6.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid9.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid1.disabled = true;
        grid2.disabled = true;
        grid4.disabled = true;
        grid5.disabled = true;
        grid7.disabled = true;
        grid8.disabled = true;
        comment.innerText = "Player O won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") {
        grid1.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid5.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid9.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid2.disabled = true;
        grid3.disabled = true;
        grid4.disabled = true;
        grid6.disabled = true;
        grid7.disabled = true;
        grid8.disabled = true;
        comment.innerText = "Player O won!";
        movesButton.classList.remove(hidden)
    }
    else if (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O") {
        grid3.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid5.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid7.style.backgroundColor = "rgba(255, 252, 102, 0.425)";
        grid1.disabled = true;
        grid2.disabled = true;
        grid4.disabled = true;
        grid6.disabled = true;
        grid8.disabled = true;
        grid9.disabled = true;
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

