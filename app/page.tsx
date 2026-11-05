export const dynamic = "force-dynamic"; // SSR test: time changes on each request

export default function Home() {
  return (
    <main>
      <h1>hosting-test</h1>
      <p>SSR OK. Server time: {new Date().toISOString()}</p>
      <ul>
        <li><a href="/api/health">/api/health</a> (node, memory, uptime)</li>
        <li><a href="/api/db">/api/db</a> (MySQL write + read)</li>
        <li><a href="/api/sharp">/api/sharp</a> (image processing)</li>
      </ul>
    </main>
  );
}
