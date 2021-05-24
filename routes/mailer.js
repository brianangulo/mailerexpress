var express = require("express");
var router = express.Router();
var mail = require("../nodemailer");
/* Post to mailer
3 @params required (receiver, subject, body)
The information being sent from the front end must be specifically be JSON with 3 key value pairs for 
 email, subject of email and message being sent otherwise a 400 code bad request will be sent back */
router.post("/", function (req, res, next) {
  //If any of the required information is missing it will go to code 400 or 404
  console.log(req.body); 
  if (req.body.email !== undefined && req.body.subject !== undefined && req.body.message !== undefined)
  {
    mail(req.body.email, req.body.subject, req.body.message)
      .then(res.send("Mail Sent"))
      .catch(console.error);
  } else {
    res.sendStatus(400);
  } 
});

module.exports = router;
