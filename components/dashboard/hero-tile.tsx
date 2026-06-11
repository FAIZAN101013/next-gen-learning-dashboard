
import Tile from "../ui/tile";
export default function HeroTile() {
  return (
 <Tile className="md:col-span-3 p-8 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10" />

  <div className="relative z-10">
    <h1 className="text-4xl font-bold">
      Welcome back, Faizan 👋
    </h1>

    <p className="mt-3 text-zinc-400">
      Continue your learning journey today.
    </p>

    <div className="mt-6 inline-flex items-center rounded-full bg-orange-500/10 px-4 py-2 text-orange-400">
      🔥 14 Day Learning Streak
    </div>
  </div>
</Tile>
  );
}