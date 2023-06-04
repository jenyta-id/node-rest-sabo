require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const cctvRouter = require("./api/cctv/cctv.router");
const adminRouter = require("./api/admin/admin.router");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/cctv", cctvRouter);
app.use("/api/admin", adminRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server up and running on PORT :", port);
});
