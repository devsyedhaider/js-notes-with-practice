console.log(true);

let data = new Promise((resolve, reject) => {
  let person = true;
  if (person) {
    resolve("Data");
  } else {
    reject("No Data");
  }
});

data
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => console.log(error));

// Order Food

function OrderFood() {
  return new Promise((resolve, reject) => {
    let resturantOpen = false;

    if (resturantOpen) {
      resolve("Resturant is Open");
    } else {
      reject("Resturant is Close");
    }
  });
}

async function order() {
  try {
    let food = await OrderFood();
    console.log(food);
  } catch (err) {
    console.log(err);
  }
}

order();

// Login

function login(username, password) {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "1234") {
      resolve("Login successful 🎉");
    } else {
      reject("Invalid credentials ❌");
    }
  });
}

async function passwordUser() {
  try {
    let data = await login("admins", "1234");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

passwordUser();
