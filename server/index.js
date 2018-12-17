const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/dev");
const Rental = require("./models/rental");
const FackDB = require("./fake-db");

const rentalRoutes = require("./routes/rental");

mongoose
  .connect(
    config.DB_URL,
    { useNewUrlParser: true }
  )
  .then(() => {
    const fackDb = new FackDB();
    fackDb.seedDB();
  });
const app = express();

// app.get("/rentals", function(req, res) {
//   res.json({ success: true });
// });
app.use("/api/v1/rentals", rentalRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log("App is running!");
});
