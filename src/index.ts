import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import { UserAccountRouter } from "./api-controllers/routes/user-account.controller";
import { addBaseRoutes } from "./api-controllers/routes/base-routes";

const app: express.Application = express();

const DEFAULT_PORT = 3002;
const port: number = process.env.PORT
  ? parseInt(process.env.PORT)
  : DEFAULT_PORT;

app.use("/user-account", UserAccountRouter);

app.use("/", addBaseRoutes(express.Router()));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
