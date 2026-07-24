const express = require("express");
const router = express.Router();

const {
  createBooking,
  getBookings,
} = require("../controllers/bookingController");

// Create a new booking
router.post("/", createBooking);

// Get all bookings
router.get("/", getBookings);

module.exports = router;