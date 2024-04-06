// function
function myCourse(name){
    console.log(name);
    if(name === "Orange Belt"){
        console.log("Web Development Course")
    }else if(name === "Yellow Belt"){
        console.log("App Developmnet Course")
    }else if(name === "Green Belt"){
        console.log("Python Course")
    }
}
myCourse("Orange Belt");

//Callback
// Below are 3 different ways of using callback function
setTimeout(() => {
    console.log("Hi1")
}, 1000)

// second example
function printHi() {
    console.log("Hi2")
}
setTimeout(printHi, 1000)

// third example
function printHiClosure() {
    return () => console.log("Hi3")
}
setTimeout(printHiClosure(), 1000)


// This is how setTimeout work
function printiCode(callback, delay){
    setTimeout(() => {
        console.log("iCode Bellevue")
        callback();
    }, delay);
}
printiCode(() => {
    console.log("iCode Ninja"); //this will print after 2secs
}, 2000)

// Similiarly from the above
function printiCode2(){
    console.log("iCode Bellevue")
}
const callback = printiCode2();
const waitTime = 2000;
// wait(waitTime) //Wait for a certain time
console.log("iCode Ninja")
callback



// Arrow function
function sum(a,b){
    return a + b;
}
let sum2 = (a,b) => a + b

function isPositive(number) {
    return number >= 0
}
let isPositive2 = number => number >= 0

function randomNumber(){
    return Math.random()
}
let randomNumber2 = () => Math.random()

document.addEventListener('click', () => console.log('click'))

// Arrow function scoping with this keyword
class iCode{
    constructor(course){
        this.course = course
    }

    printCourseArrow(){
        setTimeout(() => {
            console.log(`Arrow: ${this.course}`)
        }, 100)
    }

    printCourseFunction() {
        setTimeout(function() {
            console.log(`Function: ${this.course}`)
        }, 100)
    }
}

const icode = new iCode("OrangeBelt")
icode.printCourseArrow()
// Arrow: OrangeBelt
icode.printCourseFunction()
// Function:

// Lab (Todo List)
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const newTaskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    const addTask = () => {
      const taskText = newTaskInput.value.trim();
      if (taskText) {
        // group (checkbox, task_name, and delete button)of a task into div
        const div = document.createElement('div');
        div.className = 'cur_task'
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => { // Using an arrow function here
          div.classList.toggle('strike-through', checkbox.checked);
        });

        // Create delete button and add relevant attribute to the button
        const textNode = document.createElement('p');
        textNode.textContent = taskText;
        textNode.className = 'my_task';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() { // Using a regular function here as callback
          taskList.removeChild(div);
        });

        // group all elements to div variable before adding the task to the list
        div.appendChild(checkbox);
        div.appendChild(textNode);
        div.appendChild(deleteBtn);
        taskList.appendChild(div);

        newTaskInput.value = ''; // Clear input
      }
    };

    // Event listener for the 'Add' button
    addTaskButton.addEventListener('click', addTask);
});
