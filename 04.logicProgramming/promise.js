// Promise

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("this promise was resolved");
    }, 1500);
  });
};

p1().then((data) => console.log(data)); // this promise was resolved
