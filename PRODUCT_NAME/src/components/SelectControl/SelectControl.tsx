import type { SelectControlProps } from "./SelectControl.types";

export function SelectControl({
  title = "SelectControl",
  className,
  children,
}: SelectControlProps) {
  return (
    <section className={className} data-component="SelectControl" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement SelectControl behavior.</small>
    </section>
  );
}
