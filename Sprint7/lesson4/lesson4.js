/*
// DOM Traversal
// Different way to connect JavaScript with HTML tag/element using DOM
const grandparent = document.getElementById("grandparent");
// changeColor(grandparent);

// getElementsByClassName store the value as HTML Collection
// Use Array.from to convert the HTML Collection to an array
const parent = Array.from(document.getElementsByClassName("parent"));
// parent.forEach(changeColor);

// querySelector allows linking to either a class or an id
// If there are more than 1 element with the same class name
// querySelector will link to the first element only
const grandparent1 = document.querySelector("#grandparent");
const child = document.querySelector(".child");
// changeColor(grandparent1);
// changeColor(child);

// querySelectorAll works similar to querySelector
// It will link to all elements with the same class
const children = Array.from(document.querySelectorAll(".child"));
// children.forEach(changeColor);

// Use .children method to access the children of grandparent
const parentTwo = Array.from(grandparent.children);
const childrenOne = Array.from(parentTwo[1].children);
// we have two parent so using [1] to access the second
// changeColor(parentTwo[1]);
// changeColor(childrenOne[0]);

// Access the descendant of grandparent using DOM with grandparent
const parent_Two = grandparent.querySelectorAll(".parent");
const childrenTwo = grandparent.querySelector("#child-one");
parent_Two.forEach(changeColor);
changeColor(childrenTwo);

// Access the parent of any element using the .parent method
const child_One = document.querySelector('#child-one');
const parent_One = child_One.parentElement;
const grandparent_One = parent_One.parentElement;
changeColor(parent_One);
changeColor(grandparent_One);

function changeColor(element){
    element.style.backgroundColor = "grey";
}
*/

// DOM Manipulation
// Adding element using .append
// const body = document.body; //link the HTML body section to body variable
// body.append("Hello World", " This is iCode"); // Add text to HTML

// Use .createElement method to create a new HTML element
// const div = document.createElement("div");
// body.append(div);

// Two ways to modify HTML text
// use .innerText or .textContent method
// const div = document.createElement("div");
// const span = document.createElement("span");
// div.innerText = "Hello World";
// span.textContent = "My World";
// body.append(div);
// body.append(span);

// Different between textContent and innerText
// const div = document.querySelector("div");
// console.log(div.textContent);
// console.log(div.innerText);

// Modifying HTML element
// div.innerHTML = "<strong>Hello World </strong>";
// div.innerHTML += "<img src=\"/img/iCode.jpeg\" alt=\"iCode image\">"; //Adding an image
// body.append(div);
// // OR
// const strong = document.createElement("strong");
// strong.innerText = "My World"
// div.append(strong);
// body.append(div);

// Removing HTML element
const div = document.querySelector("#modify_element");
const iCode = document.getElementById("iCode");
const Bellevue = document.querySelector("#Bellevue");
div.removeChild(Bellevue);
// OR
Bellevue.remove();

const attribute = document.querySelector("#attribute");
console.log(attribute.getAttribute('id'));//attribute

attribute.setAttribute("class", "attribute");

// Data Attribute
const data = document.querySelector("#data");
console.log(data.dataset);
console.log(data.dataset.currentCourse);

data.dataset.firstname = "iCode Bellevue";
data.dataset.number = 4;
data.dataset.lastName = "Office";
delete data.dataset.currentCourse;

// Toggle button show and hide
const buttons = document.querySelectorAll("[data-modal-id]")
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modalId
    const modal = document.getElementById(modalId)
    if(modal.classList.value === ''){
        modal.classList.add("show")
    }else if(modal.classList.value === "hide"){
        modal.classList.value = "show";
    }else if(modal.classList.value === "show"){
        modal.classList.value = "hide";
    }
    console.log(modal.classList.value);
  })
})

// Element Classes
const span1 = document.querySelector("#sp1");
span1.classList.add("sp3");
span1.classList.remove("sp2");
span1.classList.toggle("sp4");
span1.classList.replace("sp1", "sp5");

span1.style.color = "blue";
span1.style.backgroundColor = "Red";
span1.style.fontSize = "22px";
span1.style.border = "2px solid black";


