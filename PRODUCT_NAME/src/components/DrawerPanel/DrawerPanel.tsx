import type { DrawerPanelProps } from "./DrawerPanel.types";

export function DrawerPanel({
  title = "DrawerPanel",
  className,
  children,
}: DrawerPanelProps) {
  return (
    <section className={className} data-component="DrawerPanel" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement DrawerPanel behavior.</small>
    </section>
  );
}
