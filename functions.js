// Function and type of function with practice

// Create a function that prints “Hello World”.

function hello() {
  return "Hello World";
}

console.log(hello());

// Create a function that takes a name and prints “Hello, Ali”.

function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Ali"));

// Create a function that adds two numbers.

let add = function (a, b) {
  return a + b;
};

console.log(add(10, 20));

// Create a function that returns the square of a number.

let square = (num) => {
  return num * num;
};

console.log(square(7));

// Create a function that checks if a number is even or odd.

let EvenOdd = (num) => {
  if (num % 2 == 0) {
    console.log(`Your ${num} is a Even`);
  } else if (num % 2 !== 0) {
    console.log(`Your ${num} is a Odd`);
  }
};

EvenOdd(7);

// Write a function to find the maximum of 3 numbers.

let maxofthree = (num1, num2, num3) => {
  console.log(num1, num2, num3);
  return Math.max(num1, num2, num3);
};

console.log(maxofthree(10, 25, 5));

// Write a function to reverse a string.

let reverse = (str) => {
  let rev = str.split("").reverse("").join("");
  return rev;
};

console.log(reverse("Haider"));
console.log(reverse("level"));

// Find the max number in array

function muxarr(arr) {
  return Math.max(...arr);
}

console.log(muxarr([1, 2, 3, 44]));

// Find the min number in array

function minarray(arr) {
  return Math.min(...arr);
}

console.log(minarray([1, 2, 3, 44]));

// Sum of Array all elements

function sumarray(arr) {
  let sum = 0;
  for (i = 0; i <= arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumarray([10, 3, 6, 11]));
