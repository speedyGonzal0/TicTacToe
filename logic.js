let user = "X";
let cpu = "O";

let result = 0;
let turn = false;


// let board = [[0,0,0], [0,0,0], [0,0,0]];

let gameState = {
    board: Array(9).fill(0),
    userMoves: [],
    cpuMoves: []
}

// let board = Array(9).fill(0);

// let moves = [];


// console.log(board)
// console.log()

const restartButton = document.getElementById("restartButton");
const successButton = document.getElementById("successButton");
const cancelButton = document.getElementById("cancelButton");
const quitButton = document.getElementById("quitButton");
const reset = document.getElementById("reset");

reset.addEventListener("click", () => location.reload())


restartButton.addEventListener('click', function(){
    document.getElementById("modalContainer").style.display = "flex";
    document.getElementById("restartModal").style.display = "flex";
    // resetBoard();
}
);

cancelButton.addEventListener('click', function(){
    document.getElementById("modalContainer").style.display = "none";
    document.getElementById("restartModal").style.display = "none";
}
);

successButton.addEventListener('click', function(){
    document.getElementById("modalContainer").style.display = "flex";
    document.getElementById("successModal").style.display = "flex";
}
);

quitButton.addEventListener('click', function(){
    document.getElementById("modalContainer").style.display = "none";
    document.getElementById("successModal").style.display = "none";
}
);

let boxes = document.querySelectorAll("label")
// console.log(boxes)
boxes.forEach( (box, index) => box.addEventListener("change", () => {

    gameState.board[index] = 1;
    console.log(gameState.board);
    gameState.userMoves.push(index);

    box.querySelector("input").disabled = "true";
    box.style.cursor = "not-allowed";

    // console.log(moves)

    if((gameState.cpuMoves.length + gameState.userMoves.length) < gameState.board.length){
        cpuMove();
    }
    else{
        console.log("Game over")
    }
    

    // console.log(moves)

} ))


function cpuMove(){
    let move = generateRandom(0, 8);
    console.log(move)
    box = boxes[move];
    gameState.board[move] = 2;
    console.log(gameState.board)
    gameState.cpuMoves.push(move);
    box.querySelector("input").checked = "true";
    box.querySelector("input").disabled = "true";
    box.style.cursor = "not-allowed";
    box.querySelector("i").innerText = "circle";
    box.querySelector("i").style.color = "#ffd60a";
}


function generateRandom(min, max) {
    let num; 
    while(!num){
        let x = Math.floor(Math.random() * (max - min)) + min;
        
        if( gameState.cpuMoves.indexOf(x) === -1 && gameState.userMoves.indexOf(x) === -1){
            num = x;
        }
    }
    return num;        
}

