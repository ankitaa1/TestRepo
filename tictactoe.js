
console.log("Welcome to the game!!!") // this line is for ensuring the script is connected 

// query selector is for selecting the id from html page
var restartb = document.querySelector("#b"); // restart button 

var squares = document.querySelectorAll("td"); // sqaures

// Fucnction to clear all the squares
function clearboard() {
	for (var i = 0; i< squares.length; i++) {
		squares[i].textContent = "";
	}
}

// .addeventlistener is used to bind the function with the key
restartb.addEventListener("click",clearboard);




// adding eventlistener with click operation
// if cell is empty if clicked only once it will change it to X, if there is already X then it will replaced by O,
// if O is already there then cell will be empty again
// Repeat this for all squares
// For square one having id="one" in html file
var cellone = document.querySelector("#one")

cellone.addEventListener("click",function(){
	if (cellone.textContent === "") {
		cellone.textContent = "X";
	}
	else if (cellone.textContent === "X") {
		cellone.textContent = "O";
	}
	else{
			cellone.textContent = ""
	}
})

// For square two having id="two" in html
var celltwo = document.querySelector("#two")
celltwo.addEventListener("click",function(){
	if (celltwo.textContent === "") {
		celltwo.textContent = "X";
	}
	else if (celltwo.textContent === "X") {
		celltwo.textContent = "O";
	}
	else{
			celltwo.textContent = ""
	}
})
// For square three having id="three" in html file
var cellthree = document.querySelector("#three")
cellthree.addEventListener("click",function(){
	if (cellthree.textContent === "") {
		cellthree.textContent = "X";
	}
	else if (cellthree.textContent === "X") {
		cellthree.textContent = "O"
	}
	else{
		cellthree.textContent = ""
	}
})

// For square four having id = "Four" in html file
var cellfour = document.querySelector("#four")

cellfour.addEventListener("click",function(){
	if (cellfour.textContent === "") {
		cellfour.textContent = "X"
	}
	else if (cellfour.textContent === "X"){
		cellfour.textContent = "O"
	}
	else{
		cellfour.textContent = ""
	}
})

// for square five having id= "five" in html file
var cellfive = document.querySelector("#five")

cellfive.addEventListener("click",function(){
	if (cellfive.textContent === "") {
		cellfive.textContent = "X"
	}
	else if (cellfive.textContent === "X"){
		cellfive.textContent = "O"
	}
	else{
		cellfive.textContent = ""
	}
})

//For square six having id = "six" in html file
var cellsix = document.querySelector("#six")

cellsix.addEventListener("click",function(){
	if (cellsix.textContent === "") {
		cellsix.textContent = "X"
	}
	else if (cellsix.textContent === "X"){
		cellsix.textContent = "O"
	}
	else{
		cellsix.textContent = ""
	}
})


// For square seven having id= "seven" in html file
var cellseven = document.querySelector("#seven")

cellseven.addEventListener("click",function(){
	if (cellseven.textContent === "") {
		cellseven.textContent = "X"
	}
	else if (cellseven.textContent === "X"){
		cellseven.textContent = "O"
	}
	else{
		cellseven.textContent = ""
	}
})

// For square eigt having id="eight" in html file
var celleight = document.querySelector("#eight")

celleight.addEventListener("click",function(){
	if (celleight.textContent === "") {
		celleight.textContent = "X"
	}
	else if (celleight.textContent === "X"){
		celleight.textContent = "O"
	}
	else{
		celleight.textContent = ""
	}
})

// For square nine having id ="nine" in html file
var cellnine = document.querySelector("#nine")

cellnine.addEventListener("click",function(){
	if (cellnine.textContent === "") {
		cellnine.textContent = "X"
	}
	else if (cellnine.textContent === "X"){
		cellnine.textContent = "O"
	}
	else{
		cellnine.textContent = ""
	}
})
