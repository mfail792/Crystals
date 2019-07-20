//declaring variables
var randNum = [];
var numbers = [45, 87, 54, 66, 37, 24, 72];
var score = 0;
var number = 0;
var green = [];
var red = [];
var blue = [];
var orange = [];

//counters
var wins = 0;
var losses = 0;

//Jquery command to start functions upon DOM load
$(document).ready()

//starts game by drawing random number from numbers array and pushing to HTML

function Start() {
    randNum = numbers[Math.floor(Math.random() * numbers.length)];
    //pushing random chosen number to HTML.  *IF BELOW JS DOES NOT WORK, TRY JQUERY CODE*:

    //     $("$("#random").text(randNum);")

    document.getElementById("random").innerHTML = " " + randNum.join(" ");
}

//assigning random values 1-10 to crystals at start
function Values() {
    red = document.getElementById("red").innerHTML =
        Math.floor(Math.random() * 10);

    blue = document.getElementById("blue").innerHTML =
        Math.floor(Math.random() * 10);

    green = document.getElementById("green").innerHTML =
        Math.floor(Math.random() * 10);

    orange = document.getElementById("orange").innerHTML =
        Math.floor(Math.random() * 10);
}

//console logging
console.log(red);
console.log(blue);
console.log(green);
console.log(orange);

//loading the starting functions upon new game
Start()
Values()

$(".red").on("click", red + randNum);
text(".score");

$(".green").on("click", green + randNum);
text(".score");

$(".blue").on("click", blue + randNum);
text(".score");

$(".orange").on("click", orange + randNum);
text(".score");

//ON CRYSTAL PRESS, ADD STORED VALUE TO RANDOM NUMBER (ALTERNATE SOLUTION USING JS AND JQ)
// $(red).keypress(function () {
//     document.getElementById("red").innerHTML = " " + score.join(" ");
//     console.log(score);
// });

// $(green).keypress(function () {
//     document.getElementById("green").innerHTML = " " + score.join(" ");
//     console.log(score);
// });

// $(blue).keypress(function () {
//     document.getElementById("blue").innerHTML = " " + score.join(" ");
//     console.log(score);
// });

// $(orange).keypress(function () {
//     document.getElementById("orange").innerHTML = " " + score.join(" ");
//     console.log(score);
// });



//if score = greater than randNum then GAME OVER MAN








