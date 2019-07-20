//declaring variables
var randNum = "";
var numbers = [45, 87, 54, 66, 37, 24, 72];
var score = 0;

//counter variables
var blueGUess = [];
var greenGuess = [];
var redGuess = [];
var orangeGuess = [];
var wins = 0;
var losses = 0;

//Jquery command to start functions upon DOM load
$(document).ready()

//starts game by drawing random number from numbers array and pushing to HTML
function Start() {
    randNum = numbers[Math.floor(Math.random() * numbers.length)];
    document.getElementById("random").innerHTML =  " " + randNum.join(" ");
}

