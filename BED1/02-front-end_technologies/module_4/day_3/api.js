const request = new XMLHttpRequest();

request.open("GET", "https://hplussport.com/api/products");

request.onload = function () {
  const response = request.response;
  const data = JSON.parse(response);
  console.log(data);
}

// request.send();