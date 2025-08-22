import http from "http";

const server = http.createServer((req, res) => {
  console.log(`Request received for: ${req.url}`);
  res.statusCode = 500;
  if (req.method === "POST") {
    res.statusCode = 201;
    res.statusMessage = "Created";
    console.log("Something was successfully created!");
    // res.end("3436");
  }
  if (req.method === "GET") {
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader("Content-Type", "text/plain")
    // res.end("You requested: " + req.url);
  }
  res.end(`You requested: ${req.url} using HTTP method: ${req.method}`);


});

const hostname = "localhost";
const port = 3000;

server.listen(port, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
})