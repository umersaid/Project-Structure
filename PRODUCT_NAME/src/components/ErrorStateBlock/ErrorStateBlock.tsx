import type { ErrorStateBlockProps } from "./ErrorStateBlock.types";

export function ErrorStateBlock({
  title = "ErrorStateBlock",
  className,
  children,
}: ErrorStateBlockProps) {
  return (
    <section className={className} data-component="ErrorStateBlock" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement ErrorStateBlock behavior.</small>
    </section>
  );
}
