import mysql from "mysql2";
import pg from 'pg'
const { Pool } = pg

export const db = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12727666",
  password: "BxRkhsddH5",
  database: "sql12727666",
});