export default function Loading() {
  return (
    <main>
      <div className="skeleton skeleton-title" />
      <div className="grid">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="skeleton skeleton-card" />
        ))}
      </div>
      <p className="visually-hidden" role="status">
        Loading…
      </p>
    </main>
  );
}
