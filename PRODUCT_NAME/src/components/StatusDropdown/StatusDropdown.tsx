import type { StatusDropdownProps } from "./StatusDropdown.types";

export function StatusDropdown({
  title = "StatusDropdown",
  className,
  children,
}: StatusDropdownProps) {
  return (
    <section className={className} data-component="StatusDropdown" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement StatusDropdown behavior.</small>
    </section>
  );
}
