// CREATE DISPLAY
let display = document.createElement("div");
document.getElementById("box").appendChild(display);
display.classList.add("display");

let num = document.createElement("p");
let displayNumber = document.createTextNode("0");
num.appendChild(displayNumber);
display.appendChild(num);



let counterBox = document.createElement("div");
counterBox.classList.add("counterBox");
display.after(counterBox);



let plusBox = document.createElement("button");
let plusText = document.createTextNode("+");
plusBox.classList.add("plusBox");
plusBox.appendChild(plusText);
counterBox.appendChild(plusBox);


 
let reset = document.createElement("button");
let resetText = document.createTextNode("Reset");
reset.classList.add("reset");
reset.appendChild(resetText);
counterBox.appendChild(reset);



let lessBox = document.createElement("button");
let lessText = document.createTextNode("-");
lessBox.classList.add("lessBox");
lessBox.appendChild(lessText);
counterBox.appendChild(lessBox);


//COUNTER FUNCTION
let i=0;

plusBox.addEventListener("click", () => {
  i++;
  if (i>=0) {
      num.style.color="#191970";
    }
  num.innerHTML = i;
});

lessBox.addEventListener("click", () => {
  i--;
  if (i<0) {
      num.style.color="red";
    }
  num.innerHTML =i;
});

reset.addEventListener("click", () => {
  i=0;
  num.style.color="#191970";
  num.innerHTML=i;
});