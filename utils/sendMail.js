const nodemailer = require("nodemailer")
require('dotenv').config()
const email_config = require("../config/emailConfig")

const messageOptions = {
   to: ["tariqmiley@gmail.com"],
  from: process.env.EMAIL_USER,
  subject: "Email testing || Send from Nodemailer",
  text:"Wozaaaaa this works" 
  


}


const transporter = nodemailer.createTransport(email_config)


async function sendMail(){
    try {
      let results = await transporter.sendMail(messageOptions)
      
    console.log(results)
    } catch (error) {
        console.log(error)
    }
}





module.exports = sendMail
