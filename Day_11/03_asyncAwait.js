// Task 4 : write an async function thats waits for the promise to resolve and logs the resolved value
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 3000);
});

const getData = async () => {
  const result = await promise;
  console.log("check");
  console.log(result);
};

getData();

// Task 5: Write an async function that handles a rejected promise using try-catch & logs the error message
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Issue with the Promise");
  }, 3000);
});

const getData2 = async () => {
  try {
    const result = await promise2;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

getData2();
