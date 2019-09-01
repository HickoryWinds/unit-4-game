
// set global variables

// newGame is set to true when game starts; set to false after game starts
var newGame = true;

// targetV is target value that user attempts to match
var targetV = 0;

// runningTotal keeps track of sum of players guesses
var runningTotal = 0;

// wins tracks player wins until new game started by page reload
var wins = 0;

// losses tracks player wins until new game started by page reload
var losses = 0;

// pickNum is the input for case statements in addPoints
var pickNum;

// initializeGame call targetValue to set target
function intializeGame () {
    console.log("here i am");
    targetV = 0;
    while (targetV < 19) {
        targetV =  Math.floor(Math.random() * 120) + 1;
    }
    $("#target").text(targetV);
    $("#message").text("Good Luck!");
    newGame = false;
}

// gameOver 
function gameOver() {
    targetV = 0;
}



// addPoints adds points to player running total based on picture selected
function addPoints() {
    runningTotal += 2;
    $("#score").text(runningTotal);
}

// message text to start a new game
$("#message").text("Press Button to Begin a New Game");

// button that initializes game when pressed
$("#startButton").click(intializeGame);

// buttons for each crystal picture to call addPoints function
$("#blueCrystal").click(addPoints);
$("#yellowCrystal").click(addPoints);
$("#purpleCrystal").click(addPoints);
$("#redCrystal").click(addPoints);



runningTotal += 1;
$("#score").text(runningTotal);

wins += 1;
$("#winCount").text(wins);

losses +=1;
$("#lossCount").text(losses);

