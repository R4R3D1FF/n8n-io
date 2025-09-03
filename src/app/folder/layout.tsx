import { Montserrat } from "next/font/google";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <h1 style={{ fontWeight: 400 }}>Test Montserrat 400</h1>
        <h1 style={{ fontWeight: 700 }}>Test Montserrat 700</h1>
        {children}
      </body>
    </html>
  );
}
