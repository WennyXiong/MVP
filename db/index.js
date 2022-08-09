require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`)
  .then(() => console.log('DB connected 👌'))
  .catch((err) => console.log('db connection err: ', err));

const applicationSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  appliedAtPlatform: { type: String, required: true },
  appliedAtDate: { type: String, required: true },
  status: { type: String, required: true },
  nextDeadline: { type: String },
  JD: { type: String },
  notes: { type: String },
});

const Application = new mongoose.Model('Application', applicationSchema);

const find = () => (
  Application.find()
);

const create = (obj) => {
  Application.create(obj);
};

module.exports = { find, create };
