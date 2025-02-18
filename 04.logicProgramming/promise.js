// Promise

const p1 = () => {
  return new Promise((resolve, reject) => {
    resolve("this promise was resolved");
  });
};

console.log(p1()); // Promise { 'this promise was resolved' }
