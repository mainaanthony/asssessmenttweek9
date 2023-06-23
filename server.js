const express = require('express');
const fs = require('fs');
const path = require('path');

require('dotenv').config();
const app = express();
const ejs = require('ejs');
app.set('view engine', 'ejs');
const createMarkup = require('./utils/createMarkUp');
const { messageOptions, sendMail } = require('./utils/Mail');
app.use(express.static('public'));

app.use(express.json());

// ...

// Multer configuration for handling file uploads



app.post('/mail', async (req, res) => {
  const { to, name, subject, text } = req.body;
 

  try {
    let html = await createMarkup('views/sendReport.ejs', { 
      name,
      text,
      senderName: 'Anthony Mwai'
    });
    let attachments = [
      {
        filename: 'Week 8 Report.docx',
        path: path.join(__dirname, 'uploads', 'Week 8 Report.docx')
      }
    ];

    let mOptions = messageOptions({ to, subject, text, html }, attachments);

    let results = await sendMail(mOptions);

    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while sending the email.' });
  } 
});

// ...

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server on port ${port}`));
