import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elevatewithkait.com"),
  title: { default: "Elevate with Kait", template: "%s | Elevate with Kait" },
  description: "Breathwork, Reiki, quantum energy healing, sound healing, yoga, spiritual mentorship, and transformational retreats with Kaitlyn Robinson.",
  icons: {
    icon: "/images/lotus-logo.png",
    shortcut: "/images/lotus-logo.png",
  },
  openGraph: { title: "Elevate with Kait", description: "Come home to yourself through breath, energy, sound, movement, and immersive retreat experiences.", url: "https://elevatewithkait.com", siteName: "Elevate with Kait", type: "website", images: [{ url: "/og.png", width: 1729, height: 910, alt: "Elevate with Kait — Come home to yourself" }] },
  twitter: { card: "summary_large_image", title: "Elevate with Kait", description: "Come home to yourself through breath, energy, sound, movement, and immersive retreat experiences.", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
