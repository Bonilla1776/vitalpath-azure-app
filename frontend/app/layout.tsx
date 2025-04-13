// frontend/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "VitalPath Health Coach",
  description: "AI-powered motivational interviewing for better health",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
