var express = require('express');
var router = express.Router();
var UserService = require("../services/UserService");
var db = require("../models");
var userService = new UserService(db);
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();


/* GET users listing. */
router.get('/', async function (req, res, next) {
  // sequelize gjennom din modell - Hvis mongo- må også finne dataen på noe vis.
  const users = await userService.getAll();
  //Would do this, if this were sticktly an API
  // res.status(200).json({
  //   users: users,
  // });
  // With a frontend directly attached
  res.render("users", { users });
});

router.post("/", jsonParser, async (req, res, next) => {
  const { firstName, lastName } = req.body;
  console.log(req.body);
  await userService.create(firstName, lastName);
  res.status(201).json({
    message: "User Created Successfully",
  });
});

router.delete("/", jsonParser, async (req, res, next) => {
  // validate
  await userService.deleteUser(req.body.id);
  res.status(204).json({
    message: "User Deleted Successfully!"
  });
});

router.put("/", jsonParser, async (req, res, next) => {
  const { id, firstName } = req.body;
  await userService.changeFirstName(id, firstName);
  res.status(204).json({
    message: "OK"
  })
});

module.exports = router;
