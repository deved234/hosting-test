import os from "os";
export const dynamic = "force-dynamic";

export async function GET() {
  const m = process.memoryUsage();
  return Response.json({
    ok: true,
    node: process.version,
    platform: process.platform,
    uptimeSec: Math.round(process.uptime()),
    rssMB: Math.round(m.rss / 1048576),
    heapUsedMB: Math.round(m.heapUsed / 1048576),
    totalMemMB: Math.round(os.totalmem() / 1048576),
    freeMemMB: Math.round(os.freemem() / 1048576),
    cpus: os.cpus().length,
    port: process.env.PORT ?? null,
  });
}
