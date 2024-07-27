// Task 3: create a sequence of promise that simulate fetching data from a server
const promise = new Promise((resolve, reject) => {
  console.log("hhhh");
  setTimeout(() => {
    resolve("Promise 1");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, 2000);
});

promise
  .then((data) => {
    console.log(data);
    return promise2;
  })
  .then((data) => {
    console.log(data);
  });
