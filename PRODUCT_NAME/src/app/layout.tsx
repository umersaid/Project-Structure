import type { Metadata } from "next";
import "@/app/globals.css";
import { MainProvider } from "@/context";

export const metadata: Metadata = {
  title: "PRODUCT_NAME",
  description: "Enterprise dashboard scaffold for PRODUCT_NAME.",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
