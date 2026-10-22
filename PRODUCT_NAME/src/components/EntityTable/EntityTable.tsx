import type { EntityTableProps } from "./EntityTable.types";

export function EntityTable({
  title = "EntityTable",
  className,
  children,
}: EntityTableProps) {
  return (
    <section className={className} data-component="EntityTable" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement EntityTable behavior.</small>
    </section>
  );
}
