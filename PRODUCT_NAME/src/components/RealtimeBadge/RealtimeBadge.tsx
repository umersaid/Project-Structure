import type { RealtimeBadgeProps } from "./RealtimeBadge.types";

export function RealtimeBadge({
  title = "RealtimeBadge",
  className,
  children,
}: RealtimeBadgeProps) {
  return (
    <section className={className} data-component="RealtimeBadge" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement RealtimeBadge behavior.</small>
    </section>
  );
}
