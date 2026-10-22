import type { SectionTitleProps } from "./SectionTitle.types";

export function SectionTitle({
  title = "SectionTitle",
  className,
  children,
}: SectionTitleProps) {
  return (
    <section className={className} data-component="SectionTitle" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement SectionTitle behavior.</small>
    </section>
  );
}
