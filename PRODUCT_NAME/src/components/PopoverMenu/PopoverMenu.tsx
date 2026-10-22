import type { PopoverMenuProps } from "./PopoverMenu.types";

export function PopoverMenu({
  title = "PopoverMenu",
  className,
  children,
}: PopoverMenuProps) {
  return (
    <section className={className} data-component="PopoverMenu" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement PopoverMenu behavior.</small>
    </section>
  );
}
