// src/app/layout.tsx
import "../styles/globals.css";
import { metadata } from "@/config/metadata"; // Import from config

export { metadata }; // Re-export metadata for Next.js

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
