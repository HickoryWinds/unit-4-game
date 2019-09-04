//-----------------------
// set global variables
//-----------------------

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
    $("#message").text("Select an Image");
    $("#score").text(runningTotal);

    // set unique random values for each crystal image
    blueValue = Math.floor(Math.random() * 12) + 1;

    yellowValue = Math.floor(Math.random() * 12) + 1;
    while (yellowValue === blueValue) {
        yellowValue = Math.floor(Math.random() * 12) + 1;
    }

    purpleValue = Math.floor(Math.random() * 12) + 1;
    while (purpleValue === yellowValue || purpleValue === blueValue) {
        purpleValue = Math.floor(Math.random() * 12) + 1;
    }

    redValue =  Math.floor(Math.random() * 12) + 1;
    while (redValue === purpleValue || redValue === yellowValue || redValue === blueValue) {
        redValue = Math.floor(Math.random() * 12) + 1;
    }
    
}

// code"Color" set case variable for addPoints and calls it
function codeBlue() {
    addPoints("blue");
}

function codeYellow() {
    addPoints("yellow");
}

function codePurple() {
    addPoints("purple");
}
function codeRed() {
    addPoints("red");
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
// displays wins, losses, and message
function winLoss(n) {
    if (n === targetV) {
        wins++;
        $("#winCount").text(wins);
        $("#message").text("You Win!");
        setTimeout(intializeGame, 2000);
    } else if (n > targetV) {
        losses++;
        $("#lossCount").text(losses);
        $("#message").text("You Lose.");
        setTimeout(intializeGame, 2000);
    } else {
        $("#message").text("Good Luck");
    }
}

// starts game the first time
intializeGame();
                