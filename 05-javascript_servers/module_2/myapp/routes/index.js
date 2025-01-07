var express = require('express');
// var path = require('path');
var router = express.Router();

/* GET home page. */
// router.use(express.static(path.join(__dirname, '..')));

router.route("/:nameId").get(function (req, res, next) {
  res.render('index', { title: req.params.nameId });
}).post(function (req, res, next) {
  res.send("Hei på deg222");
});;

module.exports = router;
