const express = require("express");
const cors = require("cors");

const progressRoutes = require("./routes/progress.routes");
const protectedRoutes = require("./routes/protectedTest");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/test", protectedRoutes);
app.use("/api/progress", progressRoutes);

// Root route status message
app.get("/", (req, res) => {
  res.json({ message: "CricketCraze Backend is running!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
