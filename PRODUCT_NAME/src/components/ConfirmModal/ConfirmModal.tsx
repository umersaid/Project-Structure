import type { ConfirmModalProps } from "./ConfirmModal.types";

export function ConfirmModal({
  title = "ConfirmModal",
  className,
  children,
}: ConfirmModalProps) {
  return (
    <section className={className} data-component="ConfirmModal" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement ConfirmModal behavior.</small>
    </section>
  );
}
