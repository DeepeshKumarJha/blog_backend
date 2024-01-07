const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // helps in accessing environment variables

const routes = require("./routes");

const app = express();

// Global Middlewares
app.use(express.json()); // This will help express to read request body

app.use("/api", routes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database Connected Successfully.");
  })
  .catch(() => {
    console.log("Error Connecting to database");
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port:${process.env.PORT}`);
});
