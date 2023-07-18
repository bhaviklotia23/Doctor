const catchAsyncError = require("../../middleware/catchAsyncError");
const Patient = require("./patient.model");

exports.createPatient = catchAsyncError(async (req, res) => {
  const patient = new Patient(req.body);
  patient
    .save()
    .then((result) => {
      res.status(201).json({ patient: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
