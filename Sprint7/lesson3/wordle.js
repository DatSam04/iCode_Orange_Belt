var user_input = "";
var hidden_word = "ICODE";
var line = 0;
const intro_section = document.getElementById("intro-section");
const wordle = document.getElementById("wordle");
const cur_Row = document.querySelectorAll(".wordle-row");

// Reset everything before starting the new game
function setUp(){
    cur_Row.forEach((row) => {
        const columns = row.querySelectorAll(".column");
        columns.forEach((column) => {
            column.value = "";
            column.style.color = "black";
            column.style.backgroundColor = "";
        })
    });
    intro_section.style.display = "none";//Hide intro section
    wordle.style.display = "block"; //display the game board
}

// Check if user input a string with 5 letters before checking user_input
function fillBoard(){
    const input_section = document.querySelector('.input-section');
    user_input = input_section.querySelector('input');
    if(user_input.value.length < 5){
        alert("Not enough letters");
    }else{
        checkInput(user_input.value.toUpperCase());
        user_input.value = "";
    }
}

// Check whether user guess the hidden word
function checkInput(input){
    let fill = false;
    cur_Row.forEach((row, rowIndex) => {
        if(fill === false){
            const columns = row.querySelectorAll(".column");
            if(columns[0].value === ""){
                fill = true; // prevent writing to other row
                //Count the line and print game over if guess wrong 6 times
                line++;
                // Display user input to the game board
                columns.forEach((column, columnIndex) => {
                    column.value = input[columnIndex];
                    column.style.color = "white";
                    // Modify different background color for each scenario
                    if(input[columnIndex] === hidden_word[columnIndex]){
                        column.style.backgroundColor = "green";
                    }else if(hidden_word.indexOf(input[columnIndex]) !== -1){
                        column.style.backgroundColor = "#FAD739";
                    }else{
                        column.style.backgroundColor = "grey";
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


// Event Listener Topic
// Add letter when pressing key
// document.addEventListener('keydown', function(event) {
//     const key = event.key.toUpperCase();
//     // Ensure we're only handling letter keys
//     if (!key.match(/[A-Z]/) || key.length !== 1) {
//         return; // Ignore non-letter keys
//     }

//     const rows = document.querySelectorAll('.wordle-row');
//     let done = false;

//     // Iterate over each row and input to find the first empty input
//     rows.forEach((row, rowIndex) => {
//         const inputs = row.querySelectorAll('.column');
//         inputs.forEach((input, columnIndex) => {
//             if (!input.value && !done) {
//                 input.value = key; // Set the value of the disabled input
//                 done = true; // Make sure we only fill one input per key press
//                 console.log(columnIndex);
//                 // Optionally move to the next row automatically if at the end of a row
//                 if (columnIndex === inputs.length - 1 && rowIndex < rows.length - 1) {
//                     // You might want logic here to check if the row is completed correctly
//                     // and then enable the next row accordingly

//                 }
//             }
//         });
//     });

//     event.preventDefault(); // Prevent default to stop scrolling or other key defaults
// });

// // Modify the game board when pressing keyboard on screen
// function addLetter(element){
//     if(element.textContent === "ENTER"){
//         if(user_input.length === 5){
//             fillBoard();
//             user_input = "";
//         }
//     }else if(element.id === "del"){
//         user_input = user_input.slice(0, -1);
//         console.log(user_input);
//     }else{
//         if(user_input.length < 5){
//             user_input += element.textContent;
//         }
//         console.log(user_input)
//     }
// }