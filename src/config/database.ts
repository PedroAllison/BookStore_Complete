import { Pool } from "pg";

const connectionString =
  "postgresql://pedrin_user:r05sUzKqOPvbaVI2BcD0aidGliFyM7IE@dpg-ct4fgo1opnds73d23ndg-a.oregon-postgres.render.com/pedrin";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, 
  },
});

export default pool;