const express = require("express");
const app = express();

// Setting up the router
const SessionRouter = require("./routes/SessionRouter");

// Setting up the middlewares
app.use("/api/", SessionRouter);

const port = process.env.port || 8080;

app.get("/", (req, res) => {
  res.send(`Server is running on Port ${port}`);
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});