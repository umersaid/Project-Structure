import type { AppSidebarProps } from "./AppSidebar.types";

export function AppSidebar({
  title = "AppSidebar",
  className,
  children,
}: AppSidebarProps) {
  return (
    <section className={className} data-component="AppSidebar" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement AppSidebar behavior.</small>
    </section>
  );
}
