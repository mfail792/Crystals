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
    document.getElementById("random").innerHTML =  " " + randNum.join(" ");
}

//assigning random values to crystals at start
function Values() {
document.getElementById("red").innerHTML =
Math.floor(Math.random() * 10);

document.getElementById("blue").innerHTML =
Math.floor(Math.random() * 10);

document.getElementById("green").innerHTML =
Math.floor(Math.random() * 10);

document.getElementById("orange").innerHTML =
Math.floor(Math.random() * 10);
}

//loading the starting functions upon new game
Start()
Values()

//add values of crystals when clicked and relay to score box


