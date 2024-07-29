// import express, { Request, Response, Router } from "express";
// import { database } from "../../modules/database";
// export const UserAccountRouter = express.Router();

// UserAccountRouter.get("/items", async (req: Request, res: Response) => {
//   const query = await database.query(
//     `
//      CREATE TABLE testtable (
//       id varchar(75)
//      );
//   `,
//     (error: any, results: any) => {
//       if (error) throw error;

//       res.status(200).json(results);
//       console.log(query);
//     }
//   );

//   res.send("Hello from UserAccountRouter!");
// });

// // UserAccountRouter.post("/items", (req: Request, res: Response) => {
// //   const { name, description } = req.body;

// //   db.query(
// //     "INSERT INTO items (name, description) VALUES (?, ?)",
// //     [name, description],
// //     (error: any, results: any) => {
// //       if (error) throw error;

// //       res.status(201).send(`Item added with ID: ${results.insertId}`);
// //     }
// //   );
// // });
