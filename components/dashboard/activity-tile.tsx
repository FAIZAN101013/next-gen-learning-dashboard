import Tile from "../ui/tile";

export default function ActivityTile() {
  return (
    <Tile className="p-6 self-stretch">
      <h2 className="mb-6 font-semibold text-lg">
        Activity
      </h2>

      <div className="grid grid-cols-6 gap-2">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded ${
              i % 4 === 0
                ? "bg-cyan-500/40"
                : i % 3 === 0
                ? "bg-violet-500/30"
                : "bg-zinc-800"
            }`}
          />
        ))}
      </div>
    </Tile>
  );
}