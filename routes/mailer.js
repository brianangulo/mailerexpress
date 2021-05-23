var express = require("express");
var router = express.Router();

/* Post to mailer */
router.post("/", function (req, res, next) {
  res.send("Will send your email when needed");
});

module.exports = router;
