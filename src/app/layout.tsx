import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Viola D'Souza - Portfolio",
  description: "Full Stack Engineer & Salesforce Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] text-white antialiased selection:bg-emerald-500/30">
        {children}
      </body>
    </html>
  );
}
