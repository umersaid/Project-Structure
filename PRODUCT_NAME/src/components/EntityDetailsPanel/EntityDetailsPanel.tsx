import type { EntityDetailsPanelProps } from "./EntityDetailsPanel.types";

export function EntityDetailsPanel({
  title = "EntityDetailsPanel",
  className,
  children,
}: EntityDetailsPanelProps) {
  return (
    <section className={className} data-component="EntityDetailsPanel" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement EntityDetailsPanel behavior.</small>
    </section>
  );
}
