import type { CheckboxControlProps } from "./CheckboxControl.types";

export function CheckboxControl({
  title = "CheckboxControl",
  className,
  children,
}: CheckboxControlProps) {
  return (
    <section className={className} data-component="CheckboxControl" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement CheckboxControl behavior.</small>
    </section>
  );
}
