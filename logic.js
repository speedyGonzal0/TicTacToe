let user = "X";
let cpu = "O";

let result = 0;
let turn = false;


let board = [[0,0,0], [0,0,0], [0,0,0]];

let moves = [];


console.log(board)
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

    console.log(board)
    if(index === 0){
        board[0][0] = 1;
        moves.push(1);
    }

    else if(index == 1){
        board[0][1] = 1;
        moves.push(2);
    }

    else if(index == 2){
        board[0][2] = 1;
        moves.push(3);
    }

    else if(index == 3){
        board[1][0] = 1;
        moves.push(4);
    }
    else if(index == 4){
        board[1][1] = 1;
        moves.push(5);
    }
    else if(index == 5){
        board[1][2] = 1;
        moves.push(6);
    }
    else if(index == 6){
        board[2][0] = 1;
        moves.push(7);
    }

    else if(index == 7){
        board[2][1] = 1;
        moves.push(8);
    }
    else if(index == 8){
        board[2][2] = 1;
        moves.push(9);
    }

    box.querySelector("input").disabled = "true";
    box.querySelector("input").style.cursor = "not allowed";

    console.log(moves)

    cpuMove();

    console.log(moves)

} ))


function cpuMove(){
    let move = generateRandom(1, 9);
    console.log(move)
    box = boxes[move-1];
    // console.log(box)
    moves.push(move);
    // board[0][1] = 2;
    box.querySelector("input").checked = "true";
    box.querySelector("input").disabled = "true";
    box.querySelector("i").innerText = "circle";
    box.querySelector("i").style.color = "#ffd60a";
}


function generateRandom(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;

    // let num = Math.random() * 10;
    // while( num === 0){
    //     num = Math.random() * 10;
    // }

    
    if(!moves.length === 0){
        for(let i = 0; i < moves.length; i++){
            if(num === moves[i]){
                generateRandom(min, max);
                break;
            }
        }
        return num;
    }
    else{
        return num;
    }
}


function handleInput(){
    // resetBoard();
    playForUserAndCPU();


    // document.getElementById("restartButton").style.backgroundColor = "red"
}

// function handleCPUMove(){
//     for(let i = 0; i < board.length; i++){
//         for(let j = 0; j < board[i].length; j++){
//             // if(board[i][j] == user)


//         }
//     }    
// }

function playForUserAndCPU(){

}
