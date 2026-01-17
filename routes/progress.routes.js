const express = require("express");
const admin = require("firebase-admin");
const { db } = require("../config/firebase");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * POST /api/progress
 * Saves a quiz attempt for the authenticated user
 */
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { score, difficulty } = req.body;
    const uid = req.user.uid;

    // Basic validation
    if (typeof score !== "number" || !difficulty) {
      return res.status(400).json({ message: "Invalid payload" });
    }

    await db
      .collection("users")
      .doc(uid)
      .collection("progress")
      .add({
        score,
        difficulty,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });

    return res.status(200).json({
      message: "Progress saved successfully"
    });
  } catch (error) {
    console.error("Error saving progress:", error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
});

module.exports = router;
