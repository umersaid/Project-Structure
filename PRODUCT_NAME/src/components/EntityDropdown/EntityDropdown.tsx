import type { EntityDropdownProps } from "./EntityDropdown.types";

export function EntityDropdown({
  title = "EntityDropdown",
  className,
  children,
}: EntityDropdownProps) {
  return (
    <section className={className} data-component="EntityDropdown" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement EntityDropdown behavior.</small>
    </section>
  );
}
