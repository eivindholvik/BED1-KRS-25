import express from "express";

const app = express();

app.use(express.static("public"));

app.listen(4001, () => {
    console.log(`Customer client is available on http://localhost:4001`);
});
