const express = require("express");
const { createAppointment } = require("./appointment.controller");

const router = express.Router();

router.route("/create-appointment").post(createAppointment);

module.exports = router;