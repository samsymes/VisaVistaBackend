import dotenv from "dotenv";
dotenv.config();

import express from "express";

// import { UserAccountRouter } from "./api-controllers/routes/user-account.controller";
import { RestCountryRouter } from "./api-controllers/routes/rest-country.controller";
import { addBaseRoutes } from "./api-controllers/routes/base-routes";

const app: express.Application = express();

const port = 3002;

// app.use("/user-account", UserAccountRouter);
app.use("/countryInfo", RestCountryRouter);

app.use("/", addBaseRoutes(express.Router()));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
