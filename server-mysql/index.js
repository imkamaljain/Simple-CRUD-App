const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => { 
  res.setHeader('Content-Type', 'text/html');
  res.end("<h1>Server is up and running.</h1>");
});

app.use('/employees', require('./routes/employeeRoutes'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});