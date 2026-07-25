const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const menuRoutes = require("./routes/menuRoutes");
const contactRoutes = require("./routes/contactRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Restaurant API 🚀");
});

app.use("/api/menu", menuRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/booking", bookingRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:$3000`);
});