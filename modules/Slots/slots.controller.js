const catchAsyncError = require("../../middleware/catchAsyncError");
const Appointment = require("../Appointment/appointment.model");

exports.getSlots = catchAsyncError(async (req, res) => {
  const {selectedDate} = req.body;

  const appointment = Appointment.find().populate
})