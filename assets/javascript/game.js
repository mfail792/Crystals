//declaring variables
var randNum = 0;
var numbers = [45, 87, 54, 77, 35, 85, 101, 78, 21, 67, 81, 96, 111, 66, 104, 56, 49, 37, 24, 72];
var score = 0;
var green = 0;
var red = 0;
var blue = 0;
var orange = 0;
var min = 1;
var max = 10;

//counters
var wins = 0;
var losses = 0;

//Jquery command to start functions upon DOM load
$(document).ready()

//starts game by drawing random number from numbers array and pushing to HTML
function Start() {
    randNum = numbers[Math.floor(Math.random() * numbers.length)];
    //pushing random chosen number to HTML.  
    $(".random").text(randNum);
}

//assigning random values 1-10 to crystals at start
function Values() {

    red = Math.floor(Math.random() * (max - min + 1)) + min;

    blue = Math.floor(Math.random() * (max - min + 1)) + min;

    green = Math.floor(Math.random() * (max - min + 1)) + min;

    orange = Math.floor(Math.random() * (max - min + 1)) + min;
}

//console logging
console.log(red);
console.log(blue);
console.log(green);
console.log(orange);

//loading the starting functions upon new game
Start();
Values();
//checking game conditions for win or loss
function conditionCheck(score) {
    if (score === randNum) {
        wins++;
        $("#wins").html("Wins: " + wins);
        alert("You Win!");
        Prove();
        Reset();
    }

    else if (score > randNum) {
        losses++;
        $("#losses").html("Losses: " + losses);
        alert("Game Over Man!");
        GameOver();
        Reset();
    } else { }
}

//telling crystals what to do with their values and checking game conditions after for a win or loss
$(".red").on("click", function () {
    score = score + red;
    $(".score").text(score);
    conditionCheck(score);

});

$(".green").on("click", function () {
    score = score + green;
    $(".score").text(score);
    conditionCheck(score);

});

$(".blue").on("click", function () {
    score = score + blue;
    $(".score").text(score);
    conditionCheck(score);
});

$(".orange").on("click", function () {
    score = score + orange;
    $(".score").text(score);
    conditionCheck(score);
});

//resets the game
function Reset() {
    $(".score").text("0");
    score = 0;
    Values();
    Start();
}

//losing audio
function GameOver() {
    var audio = new Audio('./assets/images/GAMEOVER.mp3');
    audio.loop = false;
    audio.play();
}

//winning audio
function Prove() {
    var audio = new Audio('./assets/images/prove.mp3');
    audio.loop = false;
    audio.play();
}









