require('dotenv').config();
const express = require('express');
const path = require('path');
const { getAllApplications, addToApplications, deleteFromApplications } = require('./helpers');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/applications', (req, res) => {
  getAllApplications(req, res);
});
app.post('/applications', (req, res) => {
  addToApplications(req, res);
});

app.put('/applications', (req, res) => {
  addToApplications(req, res);
});

app.delete('/applications', (req, res) => {
  deleteFromApplications(req, res);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on PORT:', port));
