let inpusername = document.getElementById("input-username");
let username = document.getElementById("username");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  let value = inpusername.value;
  console.log(value);

  localStorage.setItem("name", value);
  let result = localStorage.getItem("name");
  username.innerText = result;
});
