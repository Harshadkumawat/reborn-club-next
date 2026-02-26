export const dynamic = "force-dynamic";
import GameCard from "@/components/GameCard";
import { ArrowRight, Trophy, Users, MapPin, Play } from "lucide-react";
import Link from "next/link";

async function getGames() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/games`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    return [];
  }
}

export default async function Home() {
  const games = await getGames();

  return (
    <main className="min-h-screen bg-white text-black overflow-hidden">
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative h-[95vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-orange-600/20 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-orange-900/10 rounded-full blur-[120px]"></div>
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="flex justify-center items-center gap-2 mb-8">
            <span className="h-px w-8 bg-orange-500"></span>
            <span className="text-orange-500 text-xs font-black tracking-[0.3em] uppercase">
              Indore's Cultural Renaissance
            </span>
            <span className="h-px w-8 bg-orange-500"></span>
          </div>

          <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter mb-4">
            REBORN
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-800">
              CLUB
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            We are not just a club; we are a movement. Phir se wahi mitti ki
            khushbu, wahi bachpan wala josh—Indore ke asli khel, ab aapke modern
            lifestyle mein.
          </p>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/games"
              className="group bg-orange-500 hover:bg-white text-black font-black py-5 px-10 rounded-full transition-all duration-500 flex items-center gap-3 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-white/20"
            >
              EXPLORE LEGACY{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </Link>
            <Link
              href="/about"
              className="group flex items-center gap-3 text-white hover:text-orange-500 font-bold py-4 px-8 transition-all"
            >
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-orange-500 transition-colors">
                <Play size={16} fill="currentColor" />
              </span>
              OUR STORY
            </Link>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-linear-to-b from-orange-500 to-transparent"></div>
          <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase rotate-90 mt-8">
            Scroll
          </span>
        </div>
      </section>

      {/* --- RUNNING TEXT MARQUEE --- */}
      <div className="bg-orange-500 py-4 overflow-hidden whitespace-nowrap border-y border-black">
        <div className="flex gap-10 animate-marquee font-black text-2xl md:text-4xl italic uppercase text-black">
          <span>
            Gilli Danda • Pitthu • Kanche • Langdi • Kho-Kho • Satoliya • Stapu
            •{" "}
          </span>
          <span>
            Gilli Danda • Pitthu • Kanche • Langdi • Kho-Kho • Satoliya • Stapu
            •{" "}
          </span>
        </div>
      </div>

      {/* --- STATS SECTION (Modernized) --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Trophy />,
                val: "10+",
                label: "Legacy Games",
                desc: "Pure Indore culture",
              },
              {
                icon: <Users />,
                val: "500+",
                label: "Active Members",
                desc: "Growing community",
              },
              {
                icon: <MapPin />,
                val: "MP-09",
                label: "Indore Rooted",
                desc: "Straight from gallis",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="group p-8 rounded-4xl bg-gray-50 hover:bg-black hover:text-white transition-all duration-500 border border-gray-100"
              >
                <div className="mb-6 text-orange-500 transform group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h4 className="text-4xl font-black mb-1">{stat.val}</h4>
                <p className="font-bold text-sm uppercase tracking-widest mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-500 group-hover:text-gray-400 text-xs">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED GAMES SECTION --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto bg-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-6xl font-black tracking-tighter leading-none mb-6">
              FEATURED <br />{" "}
              <span className="text-orange-500 italic">COLLECTION</span>
            </h2>
            <div className="h-2 w-20 bg-black"></div>
          </div>
          <Link
            href="/games"
            className="group flex items-center gap-3 font-black text-sm uppercase tracking-widest hover:text-orange-500 transition-colors"
          >
            See all games{" "}
            <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>

        {games.length === 0 ? (
          <div className="text-center py-32 rounded-[3rem] bg-gray-50 border-2 border-dashed border-gray-200">
            <p className="text-gray-400 font-black text-2xl uppercase italic tracking-tighter">
              "Maidan khali hai, bhai. Kuch naya dalo!"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {games.slice(0, 6).map((game) => (
              <GameCard key={game._id} game={game} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
