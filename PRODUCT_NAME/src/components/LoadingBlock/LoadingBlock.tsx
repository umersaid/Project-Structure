import type { LoadingBlockProps } from "./LoadingBlock.types";

export function LoadingBlock({
  title = "LoadingBlock",
  className,
  children,
}: LoadingBlockProps) {
  return (
    <section className={className} data-component="LoadingBlock" style={{ border: "1px solid #e4e7ec", borderRadius: 8, padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
      <small style={{ color: "#667085" }}>TODO: implement LoadingBlock behavior.</small>
    </section>
  );
}
