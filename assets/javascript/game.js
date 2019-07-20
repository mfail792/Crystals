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
    //pushing random chosen number to HTML
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

//on crystal press, add stored value to total score
$(red).keypress(function () {
    document.getElementById("red").innerHTML = " " + score.join(" ");
    console.log(score);
});

$(green).keypress(function () {
    document.getElementById("green").innerHTML = " " + score.join(" ");
    console.log(score);
});

$(blue).keypress(function () {
    document.getElementById("blue").innerHTML = " " + score.join(" ");
    console.log(score);
});

$(orange).keypress(function () {
    document.getElementById("orange").innerHTML = " " + score.join(" ");
    console.log(score);
});

//another way of adding crystal value to random number
$("#.red").on("click" + red + randNum);
append(score);


$("#.red").on("click" + green + randNum);
append(score);


$("#.red").on("click" + blue + randNum);
append(score);


$("#.red").on("click" + orange + randNum);
append(score);








