export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
      <section style={{ width: "100%", maxWidth: 460, background: "#fff", padding: 24, borderRadius: 12 }}>
        {children}
      </section>
    </main>
  );
}
