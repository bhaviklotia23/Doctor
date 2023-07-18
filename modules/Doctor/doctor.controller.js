const catchAsyncError = require("../../middleware/catchAsyncError");
const Doctor = require("./doctor.model");

exports.createDoctor = catchAsyncError(async (req, res) => {
  const doctor = new Doctor(req.body);
  doctor
    .save()
    .then((result) => {
      res.status(201).json({ doctor: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
