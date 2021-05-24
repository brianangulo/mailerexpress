"use strict";
const nodemailer = require("nodemailer");
const auth = require("./env");

// async..await is not allowed in global scope, must use a wrapper
//mailing function with 3 params
async function main(receiver, subject, body) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: auth.user, // my email
      pass: auth.password, // my email's password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: auth.user, // sender address
    to: receiver, // list of receivers
    subject: subject, // Subject line
    text: `Hello, 
    ${body}
    `, // plain text body
    html: `<p>Hello, </p><b/><p>${body}</p>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

module.exports = main;