//declaring variables
var randNum = "";
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
var score = 0;

//counter variables
var blueGUess = [];
var greenGuess = [];
var redGuess = [];
var orangeGuess = [];
var wins = 0;
var losses = 0;

//Jquery command to start functions upon page load
$(document).ready()

//starts game by drawing random number from numbers array and pushing to HTML
function Start() {
    randNum = numbers[Math.floor(Math.random() * numbers.length)];
    document.getElementById("random").innerHTML =  " " + randNum.join(" ");
}

