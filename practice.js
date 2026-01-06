let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let res = document.getElementById("res");
let output = document.getElementById("out");

let count = 0;

inc.addEventListener("click", () => {
  count += 1;
  document.getElementById("out").innerHTML = count;
});

dec.addEventListener("click", () => {
  count -= 1;
  document.getElementById("out").innerHTML = count;
});

res.addEventListener("click", () => {
  count = 0;
  document.getElementById("out").innerHTML = count;
});

// ---------------------------------------------------------------
// ------------------------ Guess number game --------------------
// ---------------------------------------------------------------

let inp = document.getElementById("inp");
let btn = document.getElementById("btn");

let answer = Math.floor(Math.random() * 10 + 1);
let inpval = document.getElementById("inp").value;
console.log(inpval);

console.log(answer);
