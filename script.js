let greeting = document.querySelector("#greeting");
let description = document.querySelector("p");
let changeColorBtn = document.querySelector("#changeColorBtn");

function changeBackgroundColor() {  
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);  
    document.body.style.backgroundColor = randomColor;  
}  

changeColorBtn.addEventListener("click", changeBackgroundColor);  


console.log(greeting);
console.log(description);
console.log(changeColorBtn);
