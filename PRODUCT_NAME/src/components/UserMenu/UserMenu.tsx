import type { UserMenuProps } from "./UserMenu.types";

export function UserMenu({
  title = "UserMenu",
  className,
  children,
}: UserMenuProps) {
  return (
    <section className={className} data-component="UserMenu" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement UserMenu behavior.</small>
    </section>
  );
}
