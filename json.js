// Json Example ....

let UserData = `[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"]
  }
]`;

let jsondata = JSON.parse(UserData);
console.log(jsondata[1]);

jsondata.forEach((ele) => {
  document.writeln(ele.name, +" " + ele.age + " " + ele.powers[1]);
});
