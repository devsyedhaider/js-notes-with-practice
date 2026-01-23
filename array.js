/* 
------------------------------------------------------------------
---------- Arrays & with all methods and properties --------------
------------------------------------------------------------------
*/

let array = [1, 3, "haider", 78, 88, 33, 44, 8, false];

// Access value

console.log(array[6]);
console.log(array[2]);
console.log(array[3]);

// Find the length

console.log(array.length);

// Convert array into string

let ConvertStr = array.toString();
console.log(ConvertStr);

// join array all item using a speator

let join = array.join("-");
console.log(join);

// remove the last item into array

let remove = array.pop();
console.log(remove);
console.log(array); // [1, 3, "haider", 78, 88, 33, 44, 8,];

// add the last item into array

let add = array.push("hassan");
console.log(add);
console.log(array);

// Shift

let shift = array.shift();
console.log(shift);
console.log(array);

// Unshift

let Unshift = array.unshift("why");
console.log(Unshift);
console.log(array);

// concat array into another array

let newarray = ["moshin", "qammar", "hijab"];
let n3 = newarray.concat(array);

console.log(n3);

// Splice add new item inside arry

n3.splice(7, 0, "lemon", "kiwii");
console.log(n3);

// slice out of peice

let slice = n3.slice(4);
console.log(slice);

// Sort the array

let sort = n3.sort();
console.log(sort);

/* 
------------------------------------------------------------------
----------------------- Array Practice ---------------------------
------------------------------------------------------------------
*/

// Add 6 at the end of array [1,2,3]

let num = [1, 2, 3];
let numadd = num.push(6);
console.log(num);

// Remove the first element from [1, 2, 3].

num.shift();
console.log(num);

// Combine [1,2] and [3,4].

let arr = [1, 2];
let arr2 = [3, 4];
console.log(arr.concat(arr2));

// Convert [“a”, “b”, “c”] to string "a-b-c".

let strarr = ["a", "b", "c"];
console.log(strarr.join("-"));

// Remove 2 elements starting at index 1 in [1,2,3,4].

let remind = [1, 2, 3, 4];
remind.splice(1, 2);
console.log(remind);

// Reverse [1,2,3,4].

remind.reverse();
console.log(remind);

// Return new array with each element multiplied by 3 from [1,2,3].

let ele = [1, 2, 3, 4];

ele.forEach((ele) => {
  console.log(ele * 3);
});

// Filter numbers greater than 10 from [5,12,8,20,3].

let greater = [5, 12, 8, 20, 3];

let newgre = greater.filter((n) => {
  if (n >= 10) {
    console.log(n);
  }
});

console.log(newgre);

// Remove all strings from [1,"a",2,"b",3]

let rem = [1, "a", 2, "b", 3];

rem.filter((n) => {
  if (typeof n !== "string") {
    console.log(n);
  }
});

// Count how many times 2 appears in [1,2,2,3,2,4]

let a = [1, 2, 2000, 34, 342, 4, 78];

let count = a.filter((num) => num === 2).length;

console.log(count); // 3

// Highest number into array

let max = 0;

a.forEach((num) => {
  if (num > max) {
    max = num;
  }
});

console.log(max);

// -------------------------------------------------------------------
// ----------------- Arrays For Each Loop  --------------------------
// -------------------------------------------------------------------

let each = [1, 2, 3, 4, 5];
let people = ["haider", "hassan", "haziq", "mahtab", "fida"];

// Each element multiply by three

each.forEach((ele) => {
  let res = ele * 3;
  console.log(res);
});

// Each element muliply by Six

each.forEach((ele) => {
  let out = ele * 6;
  console.log(out);
});

// Each element in array Captilize first letter

people.forEach((ele) => {
  let res = ele.charAt(0).toUpperCase() + ele.slice(1);
  console.log(res);
});

// Each element in array convert into UpperCase

people.forEach((ele, index) => {
  let res = ele.toLocaleUpperCase();
  console.log(`${index} : ${res}`);
});

// -------------------------------------------------------------------
// ----------------------- Arrays Map Loop  --------------------------
// -------------------------------------------------------------------

let maparray = [1, 2, 3, 4, 5];

newarray = maparray.map((ele, index) => {
  return ele * 3 + index;
});

console.log(newarray);

let students = [
  { name: "Ali", marks: 45 },
  { name: "Ahmed", marks: 70 },
  { name: "Usman", marks: 60 },
];

let newst = students.filter((s) => {
  if (s.marks > 50) {
    console.log(
      `${s.name} marks is greater then 50 and getting marks is : ${s.marks}`
    );
  }
});

let cart = {
  items: [
    { name: "Mobile", price: 50000, qty: 1 },
    { name: "Books", price: 5000, qty: 1 },
  ],

  total() {
    return this.items.reduce((sum, item) => {
      return sum + item.price * item.qty;
    }, 0);
  },
};

console.log(cart.total());
