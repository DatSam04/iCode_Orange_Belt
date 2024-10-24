// Lesson 1: Review old materials, defer, and async
// Variables
// Var is scoping at function-level
// Let is scoping at block-level
function myVar(){
    var num = 1; //remove this won't change anything
    if(true){
        var num = 2;
        console.log(num); // print 2
    }
    console.log(num); // print 2
}

function myLet(){
    var num = 1;
    if(true){
        // this variable will only available inside this if statement
        let num = 2;
        console.log(num); // print 2
    }
    console.log(num) // print 1
}
myVar();
myLet();

// Function scope and block scope
function testScope(){
    if(true){
        var fn = "iCode";
        var block = "Belt";
        if(true){
            var fn = "Bellevue";
            let block = "Course";
            console.log(fn);// print Bellevue
            console.log(block);//print Course
        }
        console.log(fn);// print Bellevue
        console.log(block);// print Belt
    }
    console.log(fn);// print Bellevue
    console.log(block);// print Belt
}
testScope();

let team = 6;
var course = ["Junior Belt", "Foundation Belt", "White Belt", "Orange Belt", "Yellow Belt", "Green Belt"];
var class_time = ["2pm-4pm", "4pm-6pm", "6pm-8pm"];
const school = "iCode";

// Conditional statement (if, else if, else, switch)
var level = "new";
var available_Course = [];
if (level == "new"){
    available_Course =["Junior Belt", "Foundation Belt"];
}else if(level == "intermediate"){
    available_Course = ["White Belt", "Orange Belt"];
}else{//Advanced
    course = ["Yellow Belt", "Green Belt"];
}

switch (level){
    case "new":
        available_Course = ["Junior Belt", "Foundation Belt"];
    case "intermediate":
        available_Course = ["White Belt", "Orange Belt"];
    default:
        available_Course = ["Yellow Belt", "Green Belt"];
}

// Loops
// Use for loops to print all courses
console.log("Courses: ")
for(let i = 0; i < course.length; i++){
    // Print each element in course
    console.log(course[i]);
}

// Print all available course using for/in
for(let course in available_Course){
    //course contains the properties(0,1,2,3,...) of the object.
    console.log(available_Course[course]);
}

// Print all class time using for/of
for(let time of class_time){
    // time contains value (element) of class_time
    console.log(time);
}

// Register 6 qualified course using while loop
let i = 0
var cur_time = 0;
var cur_course = 0;
var my_Course = [];
while(i < 6){
    // Since we have 3 available class periods, use conditional statement to set the index for the second course
    // After storing the class time of the first course, switch to the second course by increment cur_course by 1 and set cur_time back to 0
    if(cur_time == 3){
        cur_time = 0;
        cur_course = 1;
    }
    my_Course.push(available_Course[cur_course] + " " + class_time[cur_time]);
    cur_time++;
    i++;
}
console.log(my_Course);

// do/while loop
let isTen = false;
let curNum = 1;
do{
    // Check if curNum equal 10
    if(curNum === 10){
        isTen = true;
    }
    // Increment curNum to prevent infinite loop
    curNum++;
}while(isTen !== true);

// Function
function mySchool(name){
    console.log(name + " Coding School")
}
// Print iCode Bellevue Coding School
mySchool("iCode Bellevue");

// Anonymous function / function without name
document.getElementById("start-btn").onclick = function(){
    mySchool("iCode")
}


// Create a tic-tac-toe game
// create a function to start the game
var startBtn = document.getElementById("start-btn");
// Use a variable called turn to switch turn between two players
var turn = 0;
startBtn.onclick = function(){
    console.log("Start Game");
    startBtn.style.display = "none";
    document.getElementById("game-board").style.display = "block";
}

// Create a function to reset the game
function resetGame(){
    document.getElementById("game-board").style.display = "none";
    startBtn.style.display = "block";
    for(let i = 0; i < 9; i++){
        document.getElementById("grid" + (i + 1)).textContent = '';
    }
    turn = 0;
}

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

