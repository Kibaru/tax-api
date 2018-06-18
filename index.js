const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();

const connection = mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE
});

connection.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('Mysql connection established..');
});

app.use(cors());

app.use(express.static(path.join(__dirname, 'taxsolutions/build')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'taxsolutions/build', 'index.html'));
});

app.post('/subscribe', (req, res)=>{
  const post = req.body.email;
  const sql = "INSERT INTO subscribe (email) VALUE('"+post+"')";
  const query = connection.query(sql, (err, result)=>{
    if(err) {
      res.send('An error occured!')
    }else {
      res.send('Thank for your subscription');
    }
  });
});

app.post('/proposal', (req, res) =>{
  const output = `
  <p>You have a new contact request</p>
  <h3>Contact details</h3>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Phone number: ${req.body.phone}</li>
  <li>Email: ${req.body.email}</li>
  <li>Phone number: ${req.body.company}</li>
  <li>Subject: ${req.body.subject}</li>
  <li>Phone number: ${req.body.industry}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `
  const from = req.body.email;

  var transport = nodemailer.createTransport({
   host: process.env.EMAIL_HOST,
   port: process.env.EMAIL_PORT,
   auth: {
     user: process.env.EMAIL_USER,
     pass: process.env.EMAIL_PASS
   }
  });

    // setup email data with unicode symbols
    let mailOptions = {
        from: from, // sender address
        to: 'kenyataxsolutions@gmail.com', // list of receivers
        subject: 'Tax Solutions Request', // Subject line // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send(err, 'An error occured!')
        }else {
          res.status(200).json({
            message: 'Thank you for your proposal. We will get back to you as soon as possible.'
          })
        }

    });
});

const port = process.env.PORT;

app.listen(port, () => console.log('Server started on port 8080...'));
