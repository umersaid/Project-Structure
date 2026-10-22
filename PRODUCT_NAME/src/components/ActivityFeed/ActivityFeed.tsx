import type { ActivityFeedProps } from "./ActivityFeed.types";

export function ActivityFeed({
  title = "ActivityFeed",
  className,
  children,
}: ActivityFeedProps) {
  return (
    <section className={className} data-component="ActivityFeed" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement ActivityFeed behavior.</small>
    </section>
  );
}
