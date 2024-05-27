import express, { Request, Response, Router } from "express";

export const UserAccountRouter = express.Router();

UserAccountRouter.get("/login", (req: Request, res: Response) => {
  res.send("Login");
});

UserAccountRouter.post("/register", (req: Request, res: Response) => {
  console.log("Request", req);
  res.send("post recieved from server");
});
