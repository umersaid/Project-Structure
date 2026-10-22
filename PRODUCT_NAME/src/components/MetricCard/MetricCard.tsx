import type { MetricCardProps } from "./MetricCard.types";

export function MetricCard({
  title = "MetricCard",
  className,
  children,
}: MetricCardProps) {
  return (
    <section className={className} data-component="MetricCard" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement MetricCard behavior.</small>
    </section>
  );
}
