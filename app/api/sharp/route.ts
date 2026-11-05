import sharp from "sharp";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const t = Date.now();
    const buf = await sharp({
      create: { width: 2000, height: 1200, channels: 3, background: "#502233" },
    }).resize(800).webp({ quality: 80 }).toBuffer();
    return Response.json({ ok: true, webpBytes: buf.length, ms: Date.now() - t, sharp: sharp.versions });
  } catch (e) {
    return Response.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
