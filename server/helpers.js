const {
  find,
  create,
  update,
  deleteFromList,
} = require('../db/index.js');

const getAllApplications = (req, res) => {
  find()
    .then((listData) => res.status(200).send(listData))
    .catch((err) => {
      console.log('errpr when getting all data');
      res.status(500);
    });
};

const createAndSave = (req, res) => {
  create(req.body)
    .then((savedData) => res.status(201).send(savedData.data))
    .catch((err) => {
      console.log('err when saving to DB: ', err);
      res.status(500);
    });
};

const saveToApplications = (req, res) => {
  update(req.body)
    .then((savedData) => res.status(201).send(savedData.data))
    .catch((err) => {
      console.log('err when saving to DB: ', err);
      res.status(500);
    });
};

const deleteFromApplications = (req, res) => {
  deleteFromList(req.body)
    .then((deletedData) => res.status(200).send(deletedData.data))
    .catch((err) => {
      console.log('error when deleting from DB: ', err);
      res.status(500);
    });
};

module.exports = {
  getAllApplications,
  createAndSave,
  saveToApplications,
  deleteFromApplications,
};
