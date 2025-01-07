function logger(req, res, next) {
  console.log("i logger the params.");
  next();
}

module.exports = logger;