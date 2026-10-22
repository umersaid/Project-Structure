import type { EntityTableRowProps } from "./EntityTableRow.types";

export function EntityTableRow({
  title = "EntityTableRow",
  className,
  children,
}: EntityTableRowProps) {
  return (
    <section className={className} data-component="EntityTableRow" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement EntityTableRow behavior.</small>
    </section>
  );
}
