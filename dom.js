let input = document.getElementById("todoInput");
let btn = document.getElementById("addBtn");
let list = document.getElementById("todoList");

// Add task function
function addTask() {
  if (input.value === "") {
    alert("Task likho pehle!");
    return;
  }

  let li = document.createElement("li");
  li.innerText = input.value;

  let del = document.createElement("span");
  del.innerText = "❌";

  li.appendChild(del);
  list.appendChild(li);

  input.value = "";
}

// Button click
btn.addEventListener("click", addTask);

// Enter key support
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Delete task (Event Delegation)
list.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
