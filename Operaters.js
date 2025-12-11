let num = 10;
let secnum = 20;

// Comparision Operator

console.log((num = secnum));
console.log(num == secnum);
console.log(num != secnum);
console.log(num === secnum);
console.log(num > secnum);
console.log(num < secnum);
console.log(num >= secnum);
console.log(num <= secnum);

//  Assigment Operator

console.log((num += secnum));
console.log((num -= secnum));
console.log((num *= secnum));
console.log((num /= secnum));
console.log((num **= secnum));

// Arithmetical Operator
console.log(num + secnum);
console.log(num - secnum);
console.log(num * secnum);
console.log(num / secnum);
console.log(num % secnum);

// Logical Operator

if (num >= 10 && secnum <= 20) {
  console.log(true);
}

if (num >= 10 || secnum > 30) {
  console.log("True and false");
}

if (!num < secnum) {
  console.log(true);
}
