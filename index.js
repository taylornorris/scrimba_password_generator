const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// when button is clicked, two random 15 char strings are generated
// each string is stored in a variable
// password fields are populated with varibles

let string_one
let string_two

let btnEl = document.getElementById("generate_btn")
let passwordOneEl = document.getElementById("password_one")
let passwordTwoEl = document.getElementById("password_two")

btnEl.addEventListener("click", generatePass)

function generatePass() {
    console.log("btn was clicked")
}

