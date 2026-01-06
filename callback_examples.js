// ============================================
// CALLBACK FUNCTION EXAMPLES
// ============================================

// A callback function is a function passed as an argument to another function
// and is executed after some operation has been completed.

// ---------- EXAMPLE 1: Basic Callback Function ----------
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Execute the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Ali", sayGoodbye);

// ---------- EXAMPLE 2: Callback hell ----------

function fun1(callback) {
  setTimeout(() => {
    console.log("function 1");
    callback();
  }, 2000);
}

function fun2(callback) {
  setTimeout(() => {
    console.log("function 2");
    callback();
  }, 1000);
}

function fun3(callback) {
  setTimeout(() => {
    console.log("function 3");
    callback();
  }, 1400);
}

function fun4(callback) {
  setTimeout(() => {
    console.log("function 4");
    callback();
  }, 3000);
}

fun1(() => {
  fun2(() => {
    fun3(() => {
      fun4(() => {
        console.log("All Tasks Completed");
      });
    });
  });
});
