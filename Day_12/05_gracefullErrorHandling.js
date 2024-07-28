// Task 8 : use the fetch API to request data from the invalid URL and handle the error using .catch(). Log an appropriate message in the console

fetch("https://api.freeapi.app/api/v1/public/stocks?page=1&limit=2&inc=Symbol%2CName%2CMarketCap%2CCurrentPrice&query=tata")
  .then((data) => data.json())
  .then((res) => console.log(res))
  .catch((error) => console.log("Invalid API URL"));

// Task 9 : use the fetch API to request data from the invalid URL within an async function and handle the error using try-catch. Log an appropriate message in the consoles

const getData = async () => {
  try {
    const response = await fetch(
      "https://api.freeapi.app/api/v2/public/stocks?page=1&limit=2&inc=Symbol%2CName%2CMarketCap%2CCurrentPrice&query=tata"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Invalid API URL");
  }
};

getData();
