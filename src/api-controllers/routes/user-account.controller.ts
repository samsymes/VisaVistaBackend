import express, { Request, Response, Router } from 'express';
import mysql from 'mysql';

// var db = require
export const UserAccountRouter = express.Router();

export const db = mysql.createConnection({
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,
  host: 'database-test.myhostaddresshere-1.rds.amazonaws.com',
  user: 'user_here',
  password: 'password_here',
  port: 3306,
  database: 'test_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

UserAccountRouter.get('/items', async (req: Request, res: Response) => {
  const query = await db.query(
    `
     CREATE TABLE testtable (
      id varchar(75)
     );
  `,
    (error: any, results: any) => {
      if (error) throw error;

      // res.status(200).json(results);
    }
  );

  res.send('Hello from UserAccountRouter!');
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
