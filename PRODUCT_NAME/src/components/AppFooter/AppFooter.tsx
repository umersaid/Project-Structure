import type { AppFooterProps } from "./AppFooter.types";

export function AppFooter({
  title = "AppFooter",
  className,
  children,
}: AppFooterProps) {
  return (
    <section className={className} data-component="AppFooter" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement AppFooter behavior.</small>
    </section>
  );
}
