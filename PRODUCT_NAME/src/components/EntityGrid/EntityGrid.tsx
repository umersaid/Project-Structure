import type { EntityGridProps } from "./EntityGrid.types";

export function EntityGrid({
  title = "EntityGrid",
  className,
  children,
}: EntityGridProps) {
  return (
    <section className={className} data-component="EntityGrid" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement EntityGrid behavior.</small>
    </section>
  );
}
