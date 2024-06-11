import mysql from "mysql2";

const configuration: any = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
};

export const database = mysql.createConnection(configuration);

database.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database.");
});
module.exports = database;
