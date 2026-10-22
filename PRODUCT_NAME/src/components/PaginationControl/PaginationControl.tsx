import type { PaginationControlProps } from "./PaginationControl.types";

export function PaginationControl({
  title = "PaginationControl",
  className,
  children,
}: PaginationControlProps) {
  return (
    <section className={className} data-component="PaginationControl" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement PaginationControl behavior.</small>
    </section>
  );
}
