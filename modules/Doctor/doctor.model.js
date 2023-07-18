const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialisation: {
    type: String,
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);
