var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");

const users = [{
  id: 1,
  email: "a@aa.a",
  password: "asdf1234"
}];
let id = 2;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/signup", function (req, res, next) {
  res.render("signup");
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.post("/signup", async function (req, res, next) {
  // req.body = {
  //   email: "something",
  //   password: "asdf112342"
  // }
  const { email, password } = req.body;
  const newUser = {
    id,
    email,
    password
  }
  users.push(newUser);
  id++;
  res.status(201).json({
    success: true,
    data: {
      userId: newUser.id,
      email: newUser.email
    }
  })
});

router.post("/login", async function (req, res, next) {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = users.find(user => user.email = email);
  } catch {
    const error = new Error("User does not exisit. Could not find user");
    return next(error);
  }
  if (!existingUser || existingUser.password != password) {
    const error = new Error("Wrong details");
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      process.env.TOKEN_SECRET,
      { expiresIn: "1h" }
    );
  } catch (err) {
    console.log(err);
    const error = new Error("Error! Something went wrong in jwt creation");
    return next(error);
    // return next(err);
  }


  res.status(200).json({
    success: true,
    data: {
      userId: existingUser.id,
      email: existingUser.email,
      token: token
    }
  })
});

module.exports = router;
