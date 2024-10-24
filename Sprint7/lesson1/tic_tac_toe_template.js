// Create a tic-tac-toe game
// create a variable called startBtn and connect it to the start button
________________   =  document.getElementById("_____");

// Use a variable called turn to switch turn between two players and assign 0 to it


// Add a function to the button when clicking it
________.onclick = function(){
    // Print "Start game" to the console

    // Hide the button using .style.display method of css and set the display to none

    // Display the game board by connect the game-board element and set display to block

}

// Create a function to reset the game and named it resetGame()

    // Hide the game board after the game end by setting the display attribute to none

    // Display the start button again by setting the display attribute to block

    // Use a for loops to reset the text box to empty
    // Hints: Loops will run the same amount of time as the amount of text box

        // Connect to each text box using the grid id and textContent method and set the text to empty string
        ________.______________(______ + (i + 1))._________ = ____;

    // Set the turn back to 0, so X is always start first



// Create a functions to check if a player get 3 in a row
function checkGameStatus(){
    var curTable = [];
    var tie = true; // Keep track the game status when all grids are filled
    // Add all the grid and the move on it to curTable
    for(let i = 0; i < 9; i++){
        var text = document.getElementById("grid" + (i + 1)).textContent;
        if(text === ''){
            tie = false;
        }
        curTable.push(text);
    }
    // Check all posible row and columns for each grid to see if there are three of the same move in a row
    // There is only 8 possible way to win in Tic-Tac-Toe. (3 columns, 3 rows, and 2 diagonals)
    // Create an object that store the index of the grids to check these 8 possible way to win.
    // Use a for loops to check all possibility.
    const winCombination = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], //columns
        [0,4,8], [2,4,6] //diagonals
    ]
    for(let i = 0; i < winCombination.length; i++){
        var curComb = winCombination[i];
        if(curTable[curComb[0]] === 'X' && curTable[curComb[1]] === 'X' && curTable[curComb[2]] === 'X'){
                alert("Congratulation X is the Winner");
                resetGame();
                return;
            }
        else if(curTable[curComb[0]] === 'O' && curTable[curComb[1]] === 'O' && curTable[curComb[2]] === 'O'){
                alert("Congratulation O is the Winner")
                resetGame();
            return;
        }
    }

    // Display tie status if nobody wins
    if(tie){
        alert("Tie Game. Play another game?");
        resetGame();
    };
}


// Create a function to add the move the to the table
function addMove(td){
    if(td.textContent === ''){
        if(turn === 0){
            td.textContent = 'X';
            turn = 1;
        }else{
            td.textContent = 'O';
            turn = 0;
        }
    }
    checkGameStatus();
}