export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ fontFamily: "sans-serif", padding: 24 }}>{children}</body>
    </html>
  );
}
