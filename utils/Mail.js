const nodemailer = require("nodemailer")
require('dotenv').config()
const email_config = require("../config/emailConfig")

function messageOptions(data){

return{

     to: data.to,
     from: process.env.EMAIL_USER,
     subject:data.subject,
     text: data.text,
     html: data.html
      

}

}


const transporter = nodemailer.createTransport(email_config)


async function sendMail(){
    try {
      let results = await transporter.sendMail(messageOptions)
      console.log(results)
    console.log(results)
    } catch (error) {
        console.log(error)
    }
}





module.exports = {sendMail, messageOptions}
