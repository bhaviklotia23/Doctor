const express = require("express");
const { createDoctor } = require("./doctor.controller");

const router = express.Router();

router.route("/create").post(createDoctor);

module.exports = router;