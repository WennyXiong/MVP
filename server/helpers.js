const { find, save } = require('../db/index.js');

const getAllApplications = (req, res) => {
  find()
    .then((listData) => res.status(200).send(listData))
    .catch((err) => {
      console.log('errpr when getting all data');
      res.status(500);
    });
};

const addToApplications = (req, res) => {
  save(req.body)
    .then((savedData) => res.status(201).send(savedData.data))
    .catch((err) => {
      console.log('err when adding to DB: ', err);
      res.status(500);
    });
};

module.exports = { getAllApplications, addToApplications };
