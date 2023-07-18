const express = require("express");
const { createPatient } = require("./patient.controller");

const router = express.Router();

router.route("/create-patient").post(createPatient);

module.exports = router;