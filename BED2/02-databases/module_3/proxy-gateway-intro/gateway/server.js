const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

const PORT = process.env.PORT || 3000;
const PLANETS_PORT = process.env.PLANETS_PORT || 3001;
const SHIPS_PORT = process.env.SHIPS_PORT || 3002;

const baseURL = "http://localhost:";

app.use('/planets', proxy(baseURL + PLANETS_PORT));
// app.use('/planets', proxy("http://locahost:3001"));

app.use('/ships', proxy(baseURL + SHIPS_PORT));

app.listen(PORT, () => {
  console.log(`Gateway listening on port ${PORT}`);
});

