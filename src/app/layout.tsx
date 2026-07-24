import type { Metadata } from "next";
import "./globals.css";
import "./components.css";

export const metadata: Metadata = {
  title: "Technosolz | Transforming Ideas Into Digital Reality",
  description: "We build powerful mobile apps, websites and digital solutions that help businesses grow, automate and succeed in the digital world. Custom Software, WhatsApp Automation, E-commerce, Flutter Mobile Apps, React Web Solutions.",
  keywords: ["Software Development", "Mobile Apps", "Web Development", "E-commerce", "WhatsApp Automation", "Digital Marketing", "Technosolz"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
