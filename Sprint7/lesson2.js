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

//the actual function of setTimeout
function setTimeout(callback, waitTime){
    waitTime(waitTime)
    callback()
}

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
iCode.printCourseArrow()
// Arrow: OrangeBelt
iCode.printCourseFunction()
// Function: