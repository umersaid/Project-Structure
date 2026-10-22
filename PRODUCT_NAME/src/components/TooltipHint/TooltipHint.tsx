import type { TooltipHintProps } from "./TooltipHint.types";

export function TooltipHint({
  title = "TooltipHint",
  className,
  children,
}: TooltipHintProps) {
  return (
    <section className={className} data-component="TooltipHint" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement TooltipHint behavior.</small>
    </section>
  );
}
