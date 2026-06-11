// app/loading.tsx
export default function Loading() {
  return (
    <div className="grid gap-6 p-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-[180px]">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-3xl bg-zinc-900 animate-pulse"
        />
      ))}
    </div>
  );
}