// Promise

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("this promise was resolved");
    }, 3000);
  });
};

console.log(p1()); // Promise { <pending> }
