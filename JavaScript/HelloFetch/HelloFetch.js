//PokeAPI base URL - making a variable to hold the base URL to reach pokeAPI. This is for cleaner code
const url = "https://pokeapi.co/api/v2/pokemon/";

//use DOM Selection to select all of the elements I plan to fill with data
let pokename = document.getElementById("pokename");
let poketype = document.getElementById("poketype");
let pokenum = document.getElementById("pokenum");
let pokepic = document.getElementById("pokepic");

//when the user clicks the button, execute the fetchData method (using an eventListener)
document.getElementById("btn").onclick = fetchData;

/*
 * This function will return some pokemon data from PokeAPI
 * It will use a fetch request to return a promise object
 * The promise object will get filled with pokemon dta or it will 
 * fail
*/
async function fetchData() {
    // First, we need to gather user input from the input obx
    const userInput = document.getElementById("userInput").value
    console.log(userInput)

    // Now, we can use the fetch() function to sent a GET to POKE API
    // Fetch sends a GET by default BTW
    await fetch(url + userInput)
        .then((response) => response.json())
        .then((data) => renderHTML(data))
        .catch((error) => alert("pokemon with ID: " + userInput + " doesn't exist yet"));

}

// This function will take in the JS Pokemon data and render it on the page
function renderHTML(data) {
    // print out the data just so we can see it

    let type = "";
    for (let val of data.types) {
        type += val.type.name + " "
    }

    pokename.innerText = data.name;
    poketype.innerText = type.trim();
    pokenum.innerText = data.id;

    // pokepic is an <img> so we need to set src attribute
    pokepic.setAttribute("src", data.sprites.front_default);
}