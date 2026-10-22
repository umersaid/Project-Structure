import type { EntityCardProps } from "./EntityCard.types";

export function EntityCard({
  title = "EntityCard",
  className,
  children,
}: EntityCardProps) {
  return (
    <section className={className} data-component="EntityCard" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement EntityCard behavior.</small>
    </section>
  );
}
