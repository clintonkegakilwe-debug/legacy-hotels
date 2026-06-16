const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      room_name: "Standard Room",
      price: 800
    },
    {
      id: 2,
      room_name: "Deluxe Room",
      price: 1200
    },
    {
      id: 3,
      room_name: "Executive Suite",
      price: 2000
    }
  ]);
});

module.exports = router;