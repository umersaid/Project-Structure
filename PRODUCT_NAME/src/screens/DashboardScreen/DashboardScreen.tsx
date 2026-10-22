import { ActivityFeed, EntityTable, StatsWidget } from "@/components";

export function DashboardScreen() {
  return (
    <section style={{ display: "grid", gap: 16 }}>
      <StatsWidget title="Overview" />
      <EntityTable title="Entities" />
      <ActivityFeed title="Recent Activity" />
    </section>
  );
}
