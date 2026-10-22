import type { FilterChipsProps } from "./FilterChips.types";

export function FilterChips({
  title = "FilterChips",
  className,
  children,
}: FilterChipsProps) {
  return (
    <section className={className} data-component="FilterChips" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement FilterChips behavior.</small>
    </section>
  );
}
