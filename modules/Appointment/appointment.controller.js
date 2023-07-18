const catchAsyncError = require("../../middleware/catchAsyncError");
const Appointment = require("./appointment.model");

exports.createAppointment = catchAsyncError(async (req, res) => {
  const {
    doctorId,
    availabilityType,
    startTime,
    endTime,
    selectDays,
    selectedDates,
    duration,
  } = req.body;

  try {
    const appointment = await Appointment.create({
      doctorId,
      availabilityType,
      startTime,
      endTime,
      selectDays,
      selectedDates,
      duration,
    });

    res.status(201).json(appointment);
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});
