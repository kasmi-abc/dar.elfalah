// Cleanup smoke-test orders from Neon.
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);
const rows = await sql`select number from orders`;
console.log("all:", rows.map((r) => r.number).join(",") || "(empty)");
const tests = rows.filter((r) =>
  ["DLF-RL", "DLF-T1", "DLF-T2", "DLF-TEST", "DLF-NEON1"].includes(r.number)
);
for (const r of tests) {
  await sql`delete from orders where number = ${r.number}`;
  console.log("deleted", r.number);
}
console.log("cleanup done");
