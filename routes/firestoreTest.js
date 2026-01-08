const express = require("express");
const { db } = require("../config/firebase");

const router = express.Router();

router.get("/firestore-test", async (req, res) => {
  try {
    const docRef = db.collection("test").doc("connection");

    await docRef.set({
      status: "success",
      createdAt: new Date(),
    });

    const snapshot = await docRef.get();

    res.status(200).json({
      message: "Firestore connected successfully",
      data: snapshot.data(),
    });
  } catch (error) {
    res.status(500).json({
      message: "Firestore connection failed",
      error: error.message,
    });
  }
});

module.exports = router;
