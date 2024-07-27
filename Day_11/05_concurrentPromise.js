// Task 8: use promise.all to wait for mutiple promises to resolve and then all their values
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 1000);
});

const result = Promise.all([promise1, promise2, promise3]);
result.then((data) => console.log(data)).catch((error) => console.log(error));

const result2 = Promise.race([promise1, promise2, promise3]);
result2.then((data) => console.log(data)).catch((error) => console.log(error));
