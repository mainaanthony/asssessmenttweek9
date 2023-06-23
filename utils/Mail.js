const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');
const email_config = require('../config/emailConfig');



function messageOptions(data, attachments) {
  return {
    to: data.to,
    from: process.env.EMAIL_USER,
    subject: data.subject,
    text: data.text,
    html: data.html,
    attachments:attachments 
  };
}

const transporter = nodemailer.createTransport(email_config);

async function sendMail(options) {
  try {
    let results = await transporter.sendMail(options);
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
    throw new Error('An error occurred while sending the email.');
  }
}

module.exports = { sendMail, messageOptions };
