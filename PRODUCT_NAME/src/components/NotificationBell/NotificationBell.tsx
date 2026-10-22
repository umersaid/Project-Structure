import type { NotificationBellProps } from "./NotificationBell.types";

export function NotificationBell({
  title = "NotificationBell",
  className,
  children,
}: NotificationBellProps) {
  return (
    <section className={className} data-component="NotificationBell" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement NotificationBell behavior.</small>
    </section>
  );
}
