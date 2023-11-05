import { Pool } from "pg";

// create connection pool
const pool = new Pool({
  user: import.meta.env.PGSQL_USER,
  password: import.meta.env.PGSQL_PASSWORD,
  host: import.meta.env.PGSQL_HOST,
  port: Number(import.meta.env.PGSQL_PORT),
  database: import.meta.env.PGSQL_DATABASE,
});

export default pool;