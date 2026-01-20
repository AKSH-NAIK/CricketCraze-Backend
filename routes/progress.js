const express = require("express");
const cors = require("cors");

const progressRoutes = require("./routes/progress.routes");
const protectedRoutes = require("./routes/protectedTest");

const app = express();

app.use(cors());
app.use(express.json());

// Test protected route
app.use("/api/test", protectedRoutes);

// Progress routes
app.use("/api/progress", progressRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
