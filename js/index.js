// variable holders

let name = "Candor Dennis"
let nameHolder = document.getElementById("name-holder")
let nameDisplay = document.querySelector("h4")


function print (){
   nameHolder.value = name;
   nameDisplay.innerText = "My name is" + " " + name
   document.getElementById("show").classList.remove("d-none")
}