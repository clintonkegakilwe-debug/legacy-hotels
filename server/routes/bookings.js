const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {

  res.json({
    message: "Booking successful"
  });

});

router.get("/", (req, res) => {

  res.json([
    {
      bookingId: 1,
      guest_name: "Frank",
      room: "Deluxe Room",
      total_price: 3600
    }
  ]);

});

module.exports = router;