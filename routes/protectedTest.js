const express = require("express");
const verifyFirebaseToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/protected", verifyFirebaseToken, (req, res) => {
  res.status(200).json({
    message: "Access granted",
    user: req.user,
  });
});

module.exports = router;
