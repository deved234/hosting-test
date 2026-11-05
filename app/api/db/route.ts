import mysql from "mysql2/promise";
export const dynamic = "force-dynamic";

// Env vars: DB_HOST, DB_USER, DB_PASSWORD, DB_NAME (set in hPanel, never in the repo)
export async function GET() {
  const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
  if (!DB_HOST || !DB_USER || !DB_NAME) {
    return Response.json({ ok: false, error: "DB env vars missing" }, { status: 500 });
  }
  try {
    const conn = await mysql.createConnection({
      host: DB_HOST, user: DB_USER, password: DB_PASSWORD, database: DB_NAME,
    });
    await conn.execute(
      "CREATE TABLE IF NOT EXISTS ping (id INT AUTO_INCREMENT PRIMARY KEY, at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
    );
    await conn.execute("INSERT INTO ping () VALUES ()");
    const [rows] = await conn.execute("SELECT COUNT(*) AS n, MAX(at) AS last FROM ping");
    const [ver] = await conn.execute("SELECT VERSION() AS v");
    await conn.end();
    return Response.json({ ok: true, ping: rows, mysql: ver });
  } catch (e) {
    return Response.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
