var timer = 20;
var score = 0;
var hitrn = 0;
function scoreCounter(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
function decreaseScore() {
    // Decrease the score by a certain amount (e.g., 5 points)
    score -= 5;
    if (score < 0) {
        score = 0; // Ensure the score is not negative
    }
    document.querySelector("#scoreval").textContent = score;
}
function hitValue(){
 hitrn= Math.floor(Math.random()*10);
    document.querySelector(`#hitval`).textContent=hitrn;
}
function makeBubble(){
    var clutter = "";
for(let i= 1; i<=192; i++){
    var rn = Math.floor(Math.random()*10);
   clutter+= `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer(){
 var timerValue = setInterval(function(){
    if(timer>0){
    timer--;
    document.querySelector(`#timerval`).textContent = timer;
    }
    else{
        clearInterval(timerValue);
       document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1> <br> Your Score is ${score}`
    }
  },1000);
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum = (Number(dets.target.textContent));
    if(clickedNum===hitrn){
        scoreCounter();
    }else{
         decreaseScore();
    }
        makeBubble();
        hitValue();
    });

makeBubble();
runTimer();
hitValue();






// var timer = 20;
// var score = 0;
// var hitrn = 0;
// var gameInProgress = false;

// function scoreCounter() {
//     score += 10;
//     document.querySelector("#scoreval").textContent = score;
// }

// function decreaseScore() {
//     score -= 5;
//     if (score < 0) {
//         score = 0;
//     }
//     document.querySelector("#scoreval").textContent = score;
// }

// function hitValue() {
//     hitrn = Math.floor(Math.random() * 10);
//     document.querySelector("#hitval").textContent = hitrn;
// }

// function makeBubble() {
//     var clutter = "";
//     for (let i = 1; i <= 192; i++) {
//         var rn = Math.floor(Math.random() * 10);
//         clutter += `<div class="bubble">${rn}</div>`;
//     }
//     document.querySelector("#pbtm").innerHTML = clutter;
// }

// function runTimer() {
//     var timerValue = setInterval(function () {
//         if (timer > 0) {
//             timer--;
//             document.querySelector("#timerval").textContent = timer;
//         } else {
//             clearInterval(timerValue);
//             endGame();
//         }
//     }, 1000);
// }

// function startGame() {
//     timer = 20;
//     score = 0;
//     gameInProgress = true;
//     document.querySelector("#scoreval").textContent = score;
//     document.querySelector("#timerval").textContent = timer;
//     makeBubble();
//     hitValue();
//     runTimer();
// }

// function endGame() {
//     gameInProgress = false;
//     document.querySelector(`#pbtm`).innerHTML = `<h1>Game Over</h1><br> Your Score is ${score}`;
//     // Display a message or perform any other end-of-game actions here.
// }

// document.querySelector("#pbtm").addEventListener("click", function (dets) {
//     if (gameInProgress) {
//         var clickedNum = Number(dets.target.textContent);
//         if (clickedNum === hitrn) {
//             scoreCounter();
//         } else {
//             decreaseScore();
//         }
//         makeBubble();
//         hitValue();
//     }
// });

// document.querySelector("#play-again-button").addEventListener("click", function () {
//     startGame();
// });

// startGame(); // Start the game initially
