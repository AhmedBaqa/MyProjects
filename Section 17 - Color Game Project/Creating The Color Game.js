var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

pageReload();

function pageReload(){
    setupModeButtons();
    setupSquares();
    reset();
}



            //   Functions


function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    } else {
        squares[i].style.display = "none";
    }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    };
};

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
    var arr = []

    for(var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            // this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else if (this.textContent === "Medium") {
                numSquares = 6;
            } else {
                numSquares = 9;
            }
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    };
}





// easyBtn.addEventListener("click", function(){
//     this.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else{
//             squares[i].style.display = "none";
//         }
//     }
//     h1.style.backgroundColor = "steelblue";
//     resetButton.textContent = "New Colors";
//     messageDisplay.textContent = "";
// });

// hardBtn.addEventListener("click", function(){
//     this.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//     }
//     h1.style.backgroundColor = "steelblue";
//     resetButton.textContent = "New Colors";
//     messageDisplay.textContent = "";
// });