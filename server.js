const express = require("express");
const cors = require("cors");

require("./config/firebase");

const firestoreTestRoute = require("./routes/firestoreTest");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api", firestoreTestRoute);

app.get("/", (req, res) => {
  res.json({ message: "CricketCraze backend is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
