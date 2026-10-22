import type { StatsWidgetProps } from "./StatsWidget.types";

export function StatsWidget({
  title = "StatsWidget",
  className,
  children,
}: StatsWidgetProps) {
  return (
    <section className={className} data-component="StatsWidget" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement StatsWidget behavior.</small>
    </section>
  );
}
