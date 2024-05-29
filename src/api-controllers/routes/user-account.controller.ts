import express, { Request, Response, Router } from "express";
// import { db } from "../../modules/database";
export const UserAccountRouter = express.Router();
UserAccountRouter.get("/items", (req: Request, res: Response) => {
  res.send("Hello from UserAccountRouter!");
  // db.query("SELECT * FROM test", (error: any, results: any) => {
  //   if (error) throw error;

  //   res.status(200).json(results);
});

// UserAccountRouter.post("/items", (req: Request, res: Response) => {
//   const { name, description } = req.body;

//   db.query(
//     "INSERT INTO items (name, description) VALUES (?, ?)",
//     [name, description],
//     (error: any, results: any) => {
//       if (error) throw error;

//       res.status(201).send(`Item added with ID: ${results.insertId}`);
//     }
//   );
// });
