var express = require('express');
var fs = require('fs');
var path = require("path");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

var router = express.Router();
const sql = require("mysql2");

const pool = new sql.createPool({
  database: "databaseapp",
  connectionLimit: 10,
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});
/* GET users listing. */


router.get('/', function (req, res, next) {
  pool.query(`SELECT * FROM Users`, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.render('users', { users: result });
  });
});

router.post("/", jsonParser, function (req, res, next) {
  const toAddArray = req.body.users;
  const query = `INSERT INTO Users(FirstName, LastName) VALUES ${toAddArray.map(user => `("${user.FirstName}", "${user.LastName}")`).toString()};`;
  pool.query(query, (err, data) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(201).json({ message: "Users created successfully" });
  })
})

module.exports = router;
