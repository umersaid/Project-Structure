import type { DateRangePickerProps } from "./DateRangePicker.types";

export function DateRangePicker({
  title = "DateRangePicker",
  className,
  children,
}: DateRangePickerProps) {
  return (
    <section className={className} data-component="DateRangePicker" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement DateRangePicker behavior.</small>
    </section>
  );
}
