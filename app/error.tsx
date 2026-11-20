"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="state-page">
      <div className="state-emoji">🔥</div>
      <h1>Something went wrong</h1>
      <p>The kitchen had a hiccup. Give it another try.</p>
      <button type="button" className="button" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
