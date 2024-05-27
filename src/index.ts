import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";

const app: express.Application = express();
const DEFAULT_PORT = 3002;
const port: number = process.env.PORT
  ? parseInt(process.env.PORT)
  : DEFAULT_PORT;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  console.log("Request", req);
  res.send("request recieved from server");
});

app.post("/", (req: Request, res: Response) => {
  console.log("Request", req);
  res.send("post recieved from server");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
