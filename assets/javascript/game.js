//declaring variables
var randNum = 0;
var numbers = [45, 87, 54, 66, 37, 24, 72];
var score = 0;
var number = 0;
var green = 0;
var red = 0;
var blue = 0;
var orange = 0;

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
    red = Math.floor(Math.random() * 10);

    blue = Math.floor(Math.random() * 10);

    green = Math.floor(Math.random() * 10);

    orange = Math.floor(Math.random() * 10);
}

function Reset() {
    Start();
    $(".score").text("0");

}


//console logging
console.log(red);
console.log(blue);
console.log(green);
console.log(orange);

//loading the starting functions upon new game
Start()
Values()

//checking game conditions for win or loss
function conditionCheck(score) {
    if (score === randNum) {
        wins++;
        $("#wins").html("Wins: " + wins);
        alert("You Win!");
        Reset();
    }
    else if (score > randNum) {
        losses++;
        $("#losses").html("Losses: " + losses);
        alert("Game Over Man!");
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
    $(".blue").text(score);
    conditionCheck(score);
});

$(".orange").on("click", function () {
    score = score + orange;
    $(".orange").text(score);
    conditionCheck(score);
});



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












