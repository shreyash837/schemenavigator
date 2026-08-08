import pg, { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool= new Pool({
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
})


// async function test() {
//   try {
//     const res = await pool.query("select * from sk");
//     console.log(res);
//   } catch (err) {
//     console.error("DB Error:", err.message);
//   } finally {
//     await pool.end();
//   }
// }

// test();
    export default pool;