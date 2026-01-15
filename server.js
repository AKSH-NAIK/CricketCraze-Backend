const express = require("express");
const cors = require("cors");

// Initialize Firebase Admin SDK
require("./config/firebase");

import { auth } from "./firebase.js";

export async function getIdToken() {
  if (!auth.currentUser) {
    throw new Error("Not authenticated");
  }
  return await auth.currentUser.getIdToken();
}

// Routes
const firestoreTestRoute = require("./routes/firestoreTest");
const protectedRoute = require("./routes/protectedTest");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", firestoreTestRoute);
app.use("/api", protectedRoute);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "CricketCraze backend is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
