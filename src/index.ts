import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import bodyParser from "body-parser";
// import { UserAccountRouter } from "./api-controllers/routes/user-account.controller";
import { RestCountriesRouter } from "./api-controllers/routes/rest-countries.controller";
const cors = require("cors");
import { addBaseRoutes } from "./api-controllers/routes/base-routes";
const port = 3002;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/", addBaseRoutes(express.Router()));
// app.use("/user-account", UserAccountRouter);
app.use("/rest-countries", RestCountriesRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
