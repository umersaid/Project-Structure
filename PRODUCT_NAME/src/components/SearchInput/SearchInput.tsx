import type { SearchInputProps } from "./SearchInput.types";

export function SearchInput({
  title = "SearchInput",
  className,
  children,
}: SearchInputProps) {
  return (
    <section className={className} data-component="SearchInput" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement SearchInput behavior.</small>
    </section>
  );
}
