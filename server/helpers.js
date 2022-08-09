const { find, create } = require('../db/index.js');

const getAllApplications = (req, res) => {
  console.log('req.body: ', res.body);
  create(req.body)
    .then((resBody) => res.status(201).send(resBody.data))
    .catch((err) => res.status(500).send(err));
};

module.exports = { getAllApplications };
