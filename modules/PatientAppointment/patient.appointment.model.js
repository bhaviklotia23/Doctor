const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const patientAppointmentSchema = new mongoose.Schema({
  patientId: {
    type: ObjectId,
    ref: "Patient",
  },
  doctorId: {
    type: ObjectId,
    ref: "Doctor",
  },
  selectedDate: [{
    type: Date,
  }],
  selectedSlots: [{
    type: ObjectId,
    ref: "Slots"
  }],
  appointmentId: {
    type: ObjectId,
    ref: "Appointment"
  }
});

module.exports = mongoose.model("PatientAppointment", patientAppointmentSchema);
