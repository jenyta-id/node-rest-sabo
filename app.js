require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const cctvRouter = require("./api/cctv/cctv.router");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/cctv", cctvRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server up and running on PORT :", port);
});
