const express = require("express");
const { createSlots } = require("./slots.controller");

const router = express.Router();

router.route("/slots").post(createSlots);

module.exports = router;