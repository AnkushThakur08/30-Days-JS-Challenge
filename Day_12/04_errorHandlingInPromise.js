// Task 6 : create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log the appropriate message in the console

const promise = new Promise((resolve, reject) => {
  const randomValue = Math.floor(Math.random() * 10);

  if (randomValue > 1) {
    resolve("SUCCESS");
  } else {
    resolve("FAILURE");
  }
});

promise.then((data) => console.log(data)).catch((err) => console.log(err));

// Task 6 : use try & catch with async function to handle errors from a promise that randomly resolves or rejects and log the appropriate message in the console

const promise2 = new Promise((resolve, reject) => {
  const randomValue = Math.floor(Math.random() * 10);

  if (randomValue > 1) {
    resolve("SUCCESS");
  } else {
    resolve("FAILURE");
  }
});

const getData = async () => {
  try {
    const apiData = await promise2;
    console.log(apiData);
  } catch (error) {
    console.log(error);
  }
};

getData();
