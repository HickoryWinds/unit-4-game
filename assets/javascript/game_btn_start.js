//-----------------------
// set global variables
//-----------------------

// playGame is set to true when game initialzed; set to false
// set to false to keep player from adding points until game starts
var playGame = false;

// targetV is target value that user attempts to match
var targetV = "";
$("#target").text(targetV);

// runningTotal keeps track of sum of players guesses
var runningTotal = 0;
$("#score").text(runningTotal);

// wins tracks player wins until new game started by page reload
var wins = 0;
$("#winCount").text(wins);

// losses tracks player wins until new game started by page reload
var losses = 0;
$("#lossCount").text(losses);

// "color"Value is the random point value for each crystal image
// each one set to different value for testing
var blueValue = 1;
var yellowValue = 2;
var purpleValue = 3;
var redValue = 4;


// button that initializes game when pressed
$("#startButton").click(intializeGame);

// buttons for each crystal picture to call addPoints function
$("#blueCrystal").click(codeBlue);
$("#yellowCrystal").click(codeYellow);
$("#purpleCrystal").click(codePurple);
$("#redCrystal").click(codeRed);

// messages to player
$("#message").text("Press Button to Start");

// ---------------------
// function definitions
//----------------------
// initializeGame call targetValue to set target
function intializeGame () {
    targetV = 0;
    runningTotal = 0;
    while (targetV < 19) {
        targetV =  Math.floor(Math.random() * 120) + 1;
    }
    // display target value and message to player
    $("#target").text(targetV);
    $("#message").text("Good Luck!");
    $("#score").text(runningTotal);

    // set unique random values for each crystal image
    blueValue = Math.floor(Math.random() * 12) + 1;
    // blueValue = 2;
    yellowValue = Math.floor(Math.random() * 12) + 1;
    // yellowValue = 2;
    while (yellowValue === blueValue) {
        for (var i = 0; i < 2; i++) {
            yellowValue = Math.floor(Math.random() * 12) + 1;
            console.log(yellowValue);
            console.log("---");
        }
    }
    purpleValue = Math.floor(Math.random() * 12) + 1;
    // purpleValue = yellowValue;
    while (purpleValue === yellowValue || purpleValue === blueValue) {
        for (var j = 0; j < 2; j++) {
            purpleValue = Math.floor(Math.random() * 12) + 1;
            console.log(purpleValue);
            console.log("------");
        }
    }
    redValue =  Math.floor(Math.random() * 12) + 1;
    // redValue =  purpleValue;
    while (redValue === purpleValue || redValue === yellowValue || redValue === blueValue) {
        for (var k = 0; k < 2; k++) {
            redValue = Math.floor(Math.random() * 12) + 1;
            console.log(redValue);
            console.log("---------");
        }
    }
    console.log(blueValue);
    console.log(yellowValue);
    console.log(purpleValue);
    console.log(redValue);
    console.log("------------");
    // activate buttons
    playGame = true;
    console.log(playGame);
}


// code"Color" set case variable for addPoints and calls it
function codeBlue() {
    if (playGame === true) {
        var color = "blue"
        addPoints(color);
    } else {
        $("#message").text("**Must Start Game First**");
    }
}

function codeYellow() {
    if (playGame === true) {
        var color = "yellow"
        addPoints(color);
    } else {
        $("#message").text("**Must Start Game First**");
    }
}

function codePurple() {
    if (playGame === true) {
        var color = "purple"
        addPoints(color);
    } else {
        $("#message").text("**Must Start Game First**");
    }

}
function codeRed() {
    if (playGame === true) {
        var color = "red"
        addPoints(color);
    } else {
        $("#message").text("**Must Start Game First**");
    }


}
// ------------------------------------------------------

// addPoints adds points to player running total based on picture selected
function addPoints(color) {
    switch (color) {
        case "blue":
            runningTotal += blueValue;
        break;
        case "yellow":
            runningTotal += yellowValue;
        break;
        case "purple":
            runningTotal += purpleValue;
        break;
        case "red":
            runningTotal += redValue;
        break;
        }
        $("#score").text(runningTotal);
        winLoss(runningTotal);
        }
                
// winLoss determines if player's guess matches or exceeds target
// displays wins, losses, and message; resets playGame condition
function winLoss(n) {
    console.log("n is " + n);
    if (n === targetV) {
        wins++;
        $("#winCount").text(wins);
        $("#message").text("You Win! Play Again?");
        playGame = false;
    } else if (n > targetV) {
        losses++;
        $("#lossCount").text(losses);
        $("#message").text("You Lose. Play Again?");
        playGame = false;
    } 
}
                