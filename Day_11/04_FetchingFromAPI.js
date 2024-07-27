// Task 6: use the fetch api to get the data from a public API and log the response data to the console using promises
fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10")
  .then((data) => data.json())
  .then((data) => console.log(data.data));

// Task 7: use the fetch api to get the data from a public API and log the response data to the console using async await
const getData = async () => {
  const result = await fetch(
    "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches"
  );
  const data = await result.json();
  console.log(data.data);
};
getData();
