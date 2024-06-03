import mysql from 'mysql';

export const db = mysql.createConnection({
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,
  host: 'database-test.cxgaqgqcktq1.ca-central-1.rds.amazonaws.com',
  user: 'admin',
  password: 'dbpassword',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});
module.exports = db;
