// Promise

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("this first promise was resolved!");
      reject("this first promise NOT was resolved!");
    }, 1500);
  });
};

const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("this second promise was resolved!");
    }, 1500);
  });
};

// Promise.all([p1(), p2()]).then((data) => {
//   return console.log(data);
// }); // ['this first promise was resolved!', 'this second promise was resolved!']

// Async function
async function asyncFunction() {
  try {
    console.log(await p1());
  } catch (error) {
    console.log(error);
  }
}

asyncFunction(); // this first promise was resolved!

const formatNumber = (value) => {
  try {
    if (typeof value != "number") {
      throw new Error("Entrada deve ser um número");
    }
    return value.toFixed(2);
  } catch (error) {
    console.log(error.message);
  }
};
formatNumber("20.00091982"); // Entrada deve ser um número
