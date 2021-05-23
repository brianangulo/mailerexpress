var express = require("express");
var router = express.Router();
var mail = require("../nodemailer");
/* Post to mailer */
router.post("/", function (req, res, next) {
  mail().then(
    res.send("Mail Sent")
  ).catch(console.error);
});

module.exports = router;
