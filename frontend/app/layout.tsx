import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import IconSidebar from "@/components/shared/IconSidebar";

const interFont = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Balex"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} antialiased bg-page custom-scrollbar`}
      >
        <div className='flex text-slate-700'>
          <IconSidebar />

          {children}
        </div>
      </body>
    </html>
  );
}
