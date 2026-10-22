import type { RadioGroupControlProps } from "./RadioGroupControl.types";

export function RadioGroupControl({
  title = "RadioGroupControl",
  className,
  children,
}: RadioGroupControlProps) {
  return (
    <section className={className} data-component="RadioGroupControl" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement RadioGroupControl behavior.</small>
    </section>
  );
}
