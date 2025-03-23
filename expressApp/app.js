var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send(`
    <html>
      <head>
        <style>
          body { background-color: lightblue; font-family: Arial, sans-serif; text-align: center; padding: 20px; }
          h1 { color: navy; font-size: 32px; }
          p { font-size: 20px; font-weight: bold; color: darkslategray; }
        </style>
      </head>
      <body>
        <h1>Welcome to the Homepage</h1>
        <p>Hello, I am <b>Vaishnavi Rajput</b> (Student No: <b>24251537</b>)</p>
      </body>
    </html>
  `);
});

app.get('/contact', function(req, res){
  res.send(`
    <html>
      <head>
        <style>
          body { background-color: lightblue; font-family: Arial, sans-serif; text-align: center; padding: 20px; }
          h1 { color: navy; font-size: 32px; }
          p { font-size: 20px; font-weight: bold; color: darkslategray; }
        </style>
      </head>
      <body>
        <h1>Contact Page</h1>
        <p>Email: <b>vaishnavi.rajput@example.com</b></p>
        <p>Phone: <b>+91 9876543210</b></p>
      </body>
    </html>
  `);
});

app.get('/profile/:id', function(req, res){
  res.send(`
    <html>
      <head>
        <style>
          body { background-color: lightblue; font-family: Arial, sans-serif; text-align: center; padding: 20px; }
          h1 { color: navy; font-size: 32px; }
          p { font-size: 20px; font-weight: bold; color: darkslategray; }
        </style>
      </head>
      <body>
        <h1>Profile Page</h1>
        <p>You requested to see the profile with the ID: <b>${req.params.id}</b></p>
      </body>
    </html>
  `);
});

app.listen(3000, function(){
  console.log('Server started on port 3000...');
});
