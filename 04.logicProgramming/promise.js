// Promise

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("this promise was NOT resolved!");
    }, 1500);
  });
};

p1()
  .then((data) => console.log(data))
  .catch((error) => console.error(error)); // this promise was resolved
