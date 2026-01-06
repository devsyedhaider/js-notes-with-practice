// For Loop with practice

/*  Print 1 to 10 number

for (let i = 0; i <= 10; i++) {
  console.log(i, "haider");
}

*/

/*  Check the number even or odd

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i , 'Your Number is Even');
  } else if (i % 2 !== 0) {
    console.log(i , 'Your Number is Odd');
  }
}

*/

/* Create a table of number

let num = 8;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

*/

/* Find the factorial of number

let fac = 1;
for (i = 1; i <= num; i++) {
  fac *= i;
}

console.log("fac of ", num, "is : ", fac);
*/

/* Using for loop in array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 1; i <= array.length; i++) {
  console.log(i);
}
*/

/* 
Print the tree

*
**
***
****
*****

for (i = 1; i <= 5; i++) {
  console.log('*'.repeat(i));
}

*/

/* 
------------------------------------------------------------------
------------------------ For in Loop -----------------------------
------------------------------------------------------------------
*/

// Print the key and values of the obj

let person = {
  name: "Ali",
  age: 20,
  city: "Lahore",
};

for (key in person) {
  let ele = person[key];
  console.log(key, ele);
}

// print the obj key only

let user = {
  name: "Ali",
  age: 20,
  city: "Lahore",
};

for (key in user) {
  console.log(key);
}

let array = ["hdier", "chando", "moshin", "mahtab"];

for (a of array) {
  console.log(a);
}

/* 
------------------------------------------------------------------
------------------------- While Loop -----------------------------
------------------------------------------------------------------
*/

let num = 10;
let i = 1;

while (i <= 10) {
  console.log(`${num} * ${i} =  ${num * i}`);
  i++;
}
