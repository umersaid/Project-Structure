import { EntityDetailsPanel, EntityDropdown, EntityGrid } from "@/components";

export function EntitiesScreen() {
  return (
    <section style={{ display: "grid", gap: 16 }}>
      <EntityDropdown title="Entity Filter" />
      <EntityGrid title="Entity Grid" />
      <EntityDetailsPanel title="Entity Details" />
    </section>
  );
}
