// Promise

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("this first promise was resolved!");
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

Promise.all([p1(), p2()]).then((data) => {
  return console.log(data);
}); // ['this first promise was resolved!', 'this second promise was resolved!']

// Async function
async function asyncFunction() {
  console.log(await p1());
}

asyncFunction(); // this first promise was resolved!
