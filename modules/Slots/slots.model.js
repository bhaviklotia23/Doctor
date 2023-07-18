const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const slotsSchema = new mongoose.Schema({
  selectedSlot: [
    {
      type: String,
      required: true,
    },
  ],
  selectedDate: {
    type: Date,
    required: true,
  },
  appointmentId: {
    type: ObjectId,
    ref: "Appointment",
  },
});

module.exports = mongoose.model("Slots", slotsSchema);
