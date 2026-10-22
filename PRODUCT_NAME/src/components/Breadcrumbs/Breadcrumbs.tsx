import type { BreadcrumbsProps } from "./Breadcrumbs.types";

export function Breadcrumbs({
  title = "Breadcrumbs",
  className,
  children,
}: BreadcrumbsProps) {
  return (
    <section className={className} data-component="Breadcrumbs" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement Breadcrumbs behavior.</small>
    </section>
  );
}
