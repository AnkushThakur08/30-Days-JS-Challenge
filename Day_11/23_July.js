// Task 1: create a Promise thats resolve after 2 seconds
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});
promise.then((data) => {
  console.log(data);
});
// Task 2: create a Promise that rejects with an error messsage after 2 seconds
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("REJECTED");
  }, 2000);
});
promise2
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
