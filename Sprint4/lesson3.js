// Conditional Statement
//If, else if, and else
var greeting = ""
var time = 10
if(time < 10){
    greeting = "Good morning";
}else if(time < 20){
    greeting = "Good day";
}else{
    greeting = "Good evening";
}
console.log(greeting);

// Switch
var text = ""
switch (new Date().getDay()){
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}
console.log(text);

// Loops
// For
var cars = "corolla";
var text = ""
for(let i = 0; i < cars.length; i++){
    text += cars[i] + "<br>";
}

// For/in
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for(let x in numbers){
    txt += numbers[x] + "<br>";
}
document.getElementById("demo1").innerHTML = txt

// For/of
var cars = ["BMW", "Volvo", "Mini"];
var text = "";
for(let x of cars){
    text += x + "<br>";
}
document.getElementById("demo2").innerHTML = text;


// while
var text = "";
var i = 0;
while(i < 10){
    text += "<br>The number is " + i;
    i++
}
document.getElementById("demo3").innerHTML = text;

var text = "";
var i = 0;
do{
    text += "<br>The number is " +i;
    i++;
}while(i < 10);
document.getElementById("demo4").innerHTML = text;