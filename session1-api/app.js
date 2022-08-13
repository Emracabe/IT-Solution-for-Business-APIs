const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Setting up the router
const SessionRouter = require("./routes/SessionRouter");

// Setting up the middlewares
app.use("/api/", SessionRouter);

const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send(`<p>Server is running on Port ${port}...<br />
  Database connected successfully...</p>`);
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
