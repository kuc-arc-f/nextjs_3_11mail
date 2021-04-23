"use strict";
const nodemailer = require("nodemailer");

//
export default async (req, res) => {
  try{
    var data = req.body
//console.log( "from=", process.env.SEND_MAIL_ADDRESS)
//console.log( data.title )
    var receiverEmailAddress = data.to_mail
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASS,
      },
    });
    let info = await transporter.sendMail({
      from: process.env.SEND_MAIL_ADDRESS,
      to: receiverEmailAddress,
      subject: data.title,
      text: data.content,
    });
console.log("Message sent: %s", info.messageId);
console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));     
    res.json({})
  } catch (err) {
    console.log(err);
    res.status(500).send();    
  } 
};