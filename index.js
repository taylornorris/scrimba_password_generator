const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let btnEl = document.getElementById("generate_btn")
let passwordOneEl = document.getElementById("password_one")
let passwordTwoEl = document.getElementById("password_two")

btnEl.addEventListener("click", populatePass)

let passwordLength = 15

function generateRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePass() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += generateRandomCharacter()
    }
    return randomPassword
}

function populatePass() {
    passwordOneEl.textContent = generatePass()
    passwordTwoEl.textContent = generatePass()
}