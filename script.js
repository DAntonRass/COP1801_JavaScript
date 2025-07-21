// Ask for user's first name
let Fname = prompt("What is your first name?");
alert("Hello " + Fname + ", this program will calculate the area of a circle using your favorite number as the radius.");

// Define constant for Pi
const piValue = 3.1415926;

// Ask for user's favorite number
let myFavNum = prompt("Enter your favorite number?");
myFavNum = parseFloat(myFavNum); // Convert input to a number

// Calculate area of a circle
let myArea = piValue * myFavNum * myFavNum;

// Build a message to display
let message = `${Fname}... ${myFavNum} is your favorite number? If that was the radius of a circle, the circle’s area would be ${myArea.toFixed(6)}.`;

// Show message on webpage
document.getElementById("output").textContent = message;