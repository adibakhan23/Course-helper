const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// Load .env variables
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
// Routes
const coursesRoutes = require("./routes/coursesRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Use environment port or fallback to 4000
const PORT = process.env.NEXT_PUBLIC_PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/courses", coursesRoutes);
app.use("/auth", authRoutes);

// Health check route
app.get("/", (req, res) => res.send("Backend is running!"));
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Export for Vercel (optional)
module.exports = app;


