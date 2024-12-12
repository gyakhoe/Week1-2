//  I want to access the p that hand an id of p1 - DOM selection

let p1 = document.getElementById("p1");
console.log(p1);

p1.setAttribute("style", "background-color: burlywood");

// or you can do something like this
// p1.style.backgroundColor = "pink";

console.log(" ================ (Events) ==================== ")

let btn1 = document.getElementById("btn1");
let p2 = document.getElementById("p2");

// Event listener take in some event to listen for and a function to execute
btn1.addEventListener("click", btnFunction);

function btnFunction() {
    alert("The button is clicked");
    p2.textContent = "Now I've content";
}

// some mouse over and mouse hover events
let header = document.getElementById("header");

// here is a quicker way to add event listener
header.onmouseover = mouseoverFunction;
header.onmouseleave = mouseleaveFunction;


function mouseoverFunction() {
    header.textContent = "Don't touch me!";
}

function mouseleaveFunction() {
    header.textContent = "Why did you leave me!";
}
