/*
    1. Create 3 variables named them:
        a. user_input and initialize it with empty string
        b. hidden_word and initialize it with "ICODE"
        c. line and initialize it with  and 0
    2. Create another 3 variables to link to HTML element
        a. Named the first variable, intro_section, and link it to element with id "intro-section"
        b. Named the second variable, wordle, and link it to element with id "wordle"
        c. Named the third variable, cur_Row, and link it to all row using .querySelectorAll(".wordle-row")
*/

// setUp function will reset everything before starting the new game
function setUp(){
    // Use forEach method to loops through cur_Row
    ?.?((row) => {
        // Create a variable to link to all column in the current row using .querySelectorAll that link to class .column
        
        // Use forEach method to loops through the previous variable
        ?.?((column) => {
            /*
                Reset the value to empty
                Reset the color to black
                Reset the backgroundColor to empty
            */
           column.? = ?
           column.?.? = ?
           column.?.? = ?


        })
    });
    // Hide the intro_section by setting the display attribute to none

    // Display wordle game board by setting the display attribute of wordle to block

}

// fillBoard will check if user input a string with 5 letters before checking user_input
function fillBoard(){
    const input_section = document.querySelector('.input-section');
    user_input = input_section.querySelector('input');
    /* Use if conditional statement to:
        1. check if the length of the input is less than 5
            alert "Not enough letters"
        2. Else
            call checkInput function and pass the user input to it as argument
            set the user input value to empty string
    */
    if(?){
        ?();
    }else{
        ?(?.?.toUpperCase());
    }
}

// Check whether user guess the hidden word
function checkInput(input){
    // Create a variable named fill and assign false value to it

    // Loops through the cur_Row using forEach method
    ?.?((row, rowIndex) => {
        // Check if all row are empty by comparing fill with false
        if(? === ?){
            // Create a variable called columns to link to the column class using querySelectorAll

            // Check if the current row is empty by checking if the first column is empty
            if(?[0].? === ?){
                // Set fill to true to prevent writing to other row

                //Increase the value of line by 1 to keep track of the number of line

                /* Display user input to the game board
                    1. Loops through each column using forEach method
                    2. change the value by getting letters from input and use columnIndex to get the index of each letter
                    3. change color of the text to white
                */
                ?.?((column, columnIndex) => {
                    ?.? = ?[?];
                    ?.?.? = ?;
                    /* Modify different background color for each scenario
                        1. If the current letter is in the correct position as in the hidden word
                            change the background color to green
                        2. If the current letter is included in the hidden word but wrong position
                            change the background color to yellow ('#FAD739')
                        3. If it is not included in the hidden word
                            change the background color to grey
                    */
                    if(?[?] === ?[?]){

                    }else if(?.indexOf(?[?]) !== -1){

                    }else{

                    }
                });
            }
        }
    });
    // Use setTimeout to write letter to the game board before display message
    setTimeout(() => {
        if(input === hidden_word){
            alert("You guess the hidden word");
            intro_section.style.display = "block";
            wordle.style.display = "none";
        }else{
            if(line < 6){
                alert("Wrong words! Try again.");
            }else{
                alert("Game Over");
                intro_section.style.display = "block";
                wordle.style.display = "none";
            }
        }
    }, 100)
}