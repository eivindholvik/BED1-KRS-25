const express = require("express");
const app = express();

const PORT = process.env.port || 3001;

app.get("/", (req, res) => {
  res.json({ planets: ["Mars", "Venus", "Jupiter"] });
});

app.get("/hei", (req, res) => {
  res.json({ message: "Du er hyggelig" });
})

app.listen(PORT, () => {
  console.log(`Plante service listening on ${PORT}`)
})


const response = await fetch(something);
const data = await response.json();

const data2 = await(await fetch(something)).json;