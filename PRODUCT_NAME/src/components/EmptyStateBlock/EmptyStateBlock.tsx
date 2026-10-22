import type { EmptyStateBlockProps } from "./EmptyStateBlock.types";

export function EmptyStateBlock({
  title = "EmptyStateBlock",
  className,
  children,
}: EmptyStateBlockProps) {
  return (
    <section className={className} data-component="EmptyStateBlock" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement EmptyStateBlock behavior.</small>
    </section>
  );
}
