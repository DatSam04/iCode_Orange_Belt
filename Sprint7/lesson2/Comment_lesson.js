// Lesson2
// What is a function?
/*
    Create a simple function called myCourse.
    This function will take 1 argument and named it "name"
    The function will performing two task:
    1. print the argument
    2. Use if statement to print specific description of the course
        Ex: if the argument is orange belt, print web development course
        add some more conditions (yellow belt, green belt, foundation belt, etc...)
*/
// Calling the function without parenthesis in the console: console.log(myCourse)
// Practice calling the function and passing different value to the argument


// what is a Callback function? A function that is passed as an argument to another funciton
/* Display 3 different ways to write a callback function with setTimeout
    Format: setTimetout(callback function, time)
    1. use an anonymous function as the callback function: setTimeout(() => {}, time)
    2. Initialize a function without return and use it as the callback function: setTimeout(function_name, time)
    3. Create a function with return and use it as the callback function: setTimeout(function_name(), time)
    Notes: Use parenthesis when calling the function if it has a return
*/

/* Case: callback function often used as asynchronous functions
    1. Create a function called printiCode that take two arguments, callback & delay
        a. Callback is a function that will execute first before setTimeout execute anything inside it
        b. delay is the time it will wait before executing the setTimeout function
    2. Inside this function, create a setTimeout using anonymous function as callback function and set the time as delay
        a. print "iCode Bellevue" to the console
        b. call the callback argument
*/
// Explaining how the callback function worked as asynchronous function in step by step


// What is an arrow function?
/* Declare arrow function in different ways:
    1. assigned an arrow function to a variable without argument
    2. assigned an arrow function to a variable with one or more arguments
    3. Arrow function with implicit return, function with only 1 line of code that returning something
*/

/* Case: This keyword in a class
    1. Create a class and named it iCode
    2. Create a constructor for that class that takes an arugment, course
        a. Inside this constructor, use 'this' keyword to assigned the course (argument) to the course of this class
    3. Create two functions printCoursArrow() & printCourseFunction();
        a. Both of this function will print this.course inside the setTimeout
        b. For the callback function:
            printCourseArrow use an arrow function: setTimeout(() => {...}, time)
            printCourseFunction use a traditional function: setTimeout(function() {....}, time)
    4. After creating this class, initialize a variable and assigned the class to that variable
        variable = new class_name(argument)
        Notes: when you initialize a class to a variable, if that variable has a constructor, follow the format of the constructor
    5. call both function of the class
        variable.printCourseArrow
        variable.printCourseFunction
*/


/* LAB: To-Do List
    Today, we will add a method, DOMContentLoaded, to the document using event listener function
*/