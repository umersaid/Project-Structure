import type { TopNavProps } from "./TopNav.types";

export function TopNav({
  title = "TopNav",
  className,
  children,
}: TopNavProps) {
  return (
    <section className={className} data-component="TopNav" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement TopNav behavior.</small>
    </section>
  );
}
