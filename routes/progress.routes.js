const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { db } = require("../config/firebase");

// GET /api/progress - Retrieve user's progress history
router.get("/", authMiddleware, async (req, res) => {
  try {
    const uid = req.user.uid;

    const snapshot = await db
      .collection("users")
      .doc(uid)
      .collection("progress")
      .orderBy("timestamp", "desc")
      .get();

    const progress = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json({ success: true, data: progress });
  } catch (error) {
    console.error("Error fetching progress:", error);
    res.status(500).json({ success: false, message: "Failed to fetch progress" });
  }
});

// POST /api/progress - Save new progress data
router.post("/", authMiddleware, async (req, res) => {
  try {
    const uid = req.user.uid;
    const progressData = req.body;

    // Add timestamp if not provided
    if (!progressData.timestamp) {
      progressData.timestamp = new Date().toISOString();
    }

    // Save to Firestore
    const docRef = await db
      .collection("users")
      .doc(uid)
      .collection("progress")
      .add(progressData);

    res.status(201).json({
      success: true,
      message: "Progress saved successfully",
      id: docRef.id,
      data: progressData
    });
  } catch (error) {
    console.error("Error saving progress:", error);
    res.status(500).json({ success: false, message: "Failed to save progress" });
  }
});

module.exports = router;
