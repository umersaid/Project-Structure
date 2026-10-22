import type { TextFieldControlProps } from "./TextFieldControl.types";

export function TextFieldControl({
  title = "TextFieldControl",
  className,
  children,
}: TextFieldControlProps) {
  return (
    <section className={className} data-component="TextFieldControl" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement TextFieldControl behavior.</small>
    </section>
  );
}
