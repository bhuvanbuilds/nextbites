export default function Loading() {
  return (
    <main className="detail">
      <div className="skeleton skeleton-line" />
      <div className="skeleton skeleton-art" />
      <div className="skeleton skeleton-title" />
      <p role="status">Loading recipe…</p>
    </main>
  );
}
