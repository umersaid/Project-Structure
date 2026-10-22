import type { EntityFormProps } from "./EntityForm.types";

export function EntityForm({
  title = "EntityForm",
  className,
  children,
}: EntityFormProps) {
  return (
    <section className={className} data-component="EntityForm" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement EntityForm behavior.</small>
    </section>
  );
}
