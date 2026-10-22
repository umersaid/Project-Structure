import type { AppHeaderProps } from "./AppHeader.types";

export function AppHeader({
  title = "AppHeader",
  className,
  children,
}: AppHeaderProps) {
  return (
    <section className={className} data-component="AppHeader" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement AppHeader behavior.</small>
    </section>
  );
}
