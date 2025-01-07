var express = require("express");
var router = express.Router();

router.route("/").get((req, res) => {
  res.send("Give a move ID to get info about the movie");
});


router.route("/:movieId/:userId").get((req, res, next) => {
  console.log("This is happening first");
  next();
}, (req, res) => {
  res.send(req.params.movieId);
});

module.exports = router;