import { AppHeader, AppSidebar } from "@/components";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh" }}>
      <AppHeader title="PRODUCT_NAME" />
      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 16, padding: 16 }}>
        <AppSidebar title="Navigation" />
        <main>{children}</main>
      </div>
    </div>
  );
}
