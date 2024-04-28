// Hoisting
calSum(2,3);
// print 5 to the console
function calSum(a, b){
    console.log(a + b);
}

// calMul(4,2);
// // Reference Error
// const calMul = (a,b) => {
//     console.log(a * b);
// }
var iCode = undefined

console.log(iCode);

iCode = "Bellevue"


//Scope
const outdoor = "Sport"

function play(){
    const indoor = "games";
    console.log(outdoor, indoor);
    // print to the console: Sport games
}

play()
// console.log(outdoor, indoor);
// Throw ReferenceError: inddor is not defined


// Reference vs Value
let num = 10;
let word = "test";
let numplus = num; //copy the value of num and assign to numplus
numplus += 1;

console.log(`num = ${num}`); //num = 10
console.log(`word = ${word}`); //word = test
console.log(`numplus = ${numplus}`); // numplus = 11

let c = [1,2];
let d = c; //set d to reference the memory address where c references from.
d = [3,4]; //Set d to a brand new variable and assign the value to a different memory address
d.push(6);

console.log(`c = ${c}`); // c = 1,2
console.log(`d = ${d}`); // d = 3,4,6

var first = [1,2];
var second = first;
//both will print true
console.log(first === second);
console.log(first == second);

// DOM Traversal
