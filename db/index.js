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

const Application = new mongoose.model('Application', applicationSchema);

const find = () => (
  Application.find().exec()
);

const save = (obj) => {
  if (obj._id === undefined) {
    obj._id = '';
  }

  return Application.findOneAndUpdate(
    {
      _id: obj._id,
    },
    {
      company: obj.company,
      position: obj.position,
      appliedAtPlatform: obj.appliedAtPlatform,
      appliedAtDate: obj.appliedAtDate,
      status: obj.status,
      nextDeadline: obj.nextDeadline,
      JD: obj.JD,
      notes: obj.notes,
    },
    {
      new: true,
      upsert: true,
    },
  ).exec();
};

const deleteFromList = (obj) => (
  Application.deleteOne({ _id: obj._id }).exec()
);

module.exports = { find, save, deleteFromList };
