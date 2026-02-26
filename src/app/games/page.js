import GameCard from "@/components/GameCard";
import { getAllGames } from "@/controllers/gameController"; // Seedha DB call, No API delay!
import { Gamepad2 } from "lucide-react";

export default async function GamesPage() {
  // Direct controller function call for maximum speed
  const response = await getAllGames();
  const games = response.success ? response.data : [];

  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-orange-500 selection:text-white">
      {/* 1. VIP HERO SECTION */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Subtle Orange Glow in Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-orange-500 font-black tracking-[0.3em] text-xs uppercase mb-6 block">
            The Legacy Collection
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
            THE <span className="text-orange-500">GAMES</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Indore ki galiyon se nikal kar sidha aapke screen par. Purane khel,
            wahi josh, aur naya andaaz.
          </p>
        </div>
      </section>

      {/* 2. GAMES GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        {games.length === 0 ? (
          /* VIP Empty State */
          <div className="bg-white/5 border border-white/10 p-16 md:p-24 rounded-[3rem] backdrop-blur-sm text-center shadow-2xl">
            <Gamepad2
              className="mx-auto text-white/10 mb-6"
              size={80}
              strokeWidth={1}
            />
            <h2 className="text-3xl font-black uppercase tracking-widest text-white mb-4">
              Vault is Empty
            </h2>
            <p className="text-gray-400 font-medium text-lg">
              Lagta hai abhi tak koi game add nahi hua hai bhai.{" "}
              <br className="hidden md:block" />
              Admin panel se apni legacy shuru karo!
            </p>
          </div>
        ) : (
          /* Sleek Grid Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {games.map((game) => (
              <GameCard key={game._id} game={game} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
