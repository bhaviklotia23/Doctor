const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const appointmentSchema = new mongoose.Schema({
  doctorId: {
    type: ObjectId,
    ref: "Doctor",
  },
  availabilityType: {
    type: String,
    enum: ["General", "Custom"],
    required: true,
  },
  startTime: {
    type: String,
    match: /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/,
    required: true,
  },
  endTime: {
    type: String,
    match: /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/,
    required: true,
  },
  selectedDates: [
    {
      type: Date,
      required: function () {
        return this.availabilityType === "Custom";
      },
    },
  ],
  selectDays: [
    {
      type: String,
      enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      required: true,
    },
  ],
  duration: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
