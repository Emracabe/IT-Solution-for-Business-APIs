const express = require("express");
const app = express();

// Setting up routers
const departmentRouter = require("./routes/departmentRouter");
const assetGroupRouter = require("./routes/assetGroupRouter");
const employeeRouter = require("./routes/employeeRouter");
const assetTLRouter = require("./routes/assetTLRouter");
const locationRouter = require("./routes/locationRouter");
const assetRouter = require("./routes/assetRouter");
const deptLocationRouter = require('./routes/deptLocationRouter');

const port = process.env.port || 8080;

// Setting up the middlewares
app.use("/api/departments", departmentRouter);
app.use("/api/assetGroups", assetGroupRouter);
app.use("/api/employees", employeeRouter);
app.use("/api/assetTL", assetTLRouter);
app.use("/api/locations", locationRouter);
app.use("/api/assets", assetRouter);
app.use("/api/departmentlocations", deptLocationRouter);

app.get("/", (req, res) => {
  res.send(`Server is running on Port ${port}`);
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
