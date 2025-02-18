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

p1()
  .then((data) => {
    console.log(data);
    p2().then((data2) => console.log(data2));
  })
  .catch((error) => console.error(error))
  .finally(() => console.log("End of p1!")); // this first promise was resolved! || End of p1! || this second promise was resolved!
