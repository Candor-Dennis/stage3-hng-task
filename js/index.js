// variable holders

let name = "Candor Dennis"
let nameHolder = document.getElementById("name-holder")
let nameDisplay = document.querySelector("h4")
nameHolder.value = name;


function print (){
   nameDisplay.innerText = "My name is" + " " + name
   document.getElementById("show").classList.remove("d-none")
}