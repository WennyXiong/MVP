require('dotenv').config();
const express = require('express');
const path = require('path');
const { getAllApplications } = require('./helpers');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/applications', (req, res) => {
  getAllApplications(req, res);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on PORT:', port));
