export const dynamic = "force-dynamic";
import GameCard from "@/components/GameCard";
import {
  ArrowRight,
  Users,
  Briefcase,
  GraduationCap,
  Building2,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { getAllGames } from "@/controllers/gameController";

export default async function Home() {
  const response = await getAllGames();
  const games = response.success ? response.data : [];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative h-[95vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-orange-600/20 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-orange-900/10 rounded-full blur-[120px]"></div>
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

          <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            A movement to bring people out of screens and back to the
            playgrounds. The ultimate nostalgic experience for schools,
            families, and teams.
          </p>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/games"
              className="group bg-orange-500 hover:bg-white text-black font-black py-5 px-10 rounded-full transition-all duration-500 flex items-center gap-3 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              EXPLORE GAMES{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-3 text-white hover:text-orange-500 font-bold py-4 px-8 transition-all border border-white/10 hover:border-orange-500 rounded-full bg-white/5"
            >
              <Users size={18} /> PLAN AN EVENT
            </Link>
          </div>
        </div>
      </section>

      {/* --- UNIVERSAL EXPERTISE SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            A Space For <span className="text-orange-500">Everyone</span>
          </h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto">
            From 8 to 80 years old, our traditional games connect generations,
            break ice, and bring pure joy without any digital pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Schools & Youth */}
          <div className="bg-black border border-white/10 p-10 rounded-[2.5rem] hover:border-orange-500/50 transition-colors group relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20"></div>
            <GraduationCap
              size={40}
              className="text-orange-500 mb-6 relative z-10"
            />
            <h3 className="text-2xl font-black uppercase tracking-widest mb-4 relative z-10">
              Schools & Colleges
            </h3>
            <p className="text-gray-400 mb-6 relative z-10">
              Complete digital detox. We help students rebuild physical agility,
              teamwork, and a connection to their cultural roots through sports
              fests.
            </p>
          </div>

          {/* Families & Societies */}
          <div className="bg-black border border-white/10 p-10 rounded-[2.5rem] hover:border-orange-500/50 transition-colors group relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20"></div>
            <Building2
              size={40}
              className="text-orange-500 mb-6 relative z-10"
            />
            <h3 className="text-2xl font-black uppercase tracking-widest mb-4 relative z-10">
              Families & Societies
            </h3>
            <p className="text-gray-400 mb-6 relative z-10">
              Perfect for township gatherings, family reunions, and birthday
              parties. Watch parents and kids play together on the same ground.
            </p>
          </div>

          {/* Corporate Teams */}
          <div className="bg-black border border-white/10 p-10 rounded-[2.5rem] hover:border-orange-500/50 transition-colors group relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20"></div>
            <Briefcase
              size={40}
              className="text-orange-500 mb-6 relative z-10"
            />
            <h3 className="text-2xl font-black uppercase tracking-widest mb-4 relative z-10">
              Corporate Teams
            </h3>
            <p className="text-gray-400 mb-6 relative z-10">
              Break office hierarchies naturally. High-energy stress buster
              sessions that improve team synergy and mental health.
            </p>
          </div>
        </div>
      </section>

      {/* --- FEATURED GAMES SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-4">
              THE <span className="text-orange-500">ARSENAL</span>
            </h2>
            <p className="text-gray-400 font-medium">
              The games that built our childhoods.
            </p>
          </div>
          <Link
            href="/games"
            className="group flex items-center gap-3 font-black text-sm uppercase tracking-widest text-orange-500 hover:text-white transition-colors"
          >
            View All Experiences
            <div className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-black transition-all">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>

        {games.length === 0 ? (
          <div className="text-center py-32 rounded-[3rem] bg-white/5 border-2 border-dashed border-white/10">
            <p className="text-gray-500 font-black text-2xl uppercase tracking-widest">
              "Maidan khali hai, bhai. Kuch naya dalo!"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {games.slice(0, 3).map((game) => (
              <GameCard key={game._id} game={game} />
            ))}
          </div>
        )}
      </section>

      {/* --- UNIVERSAL FAQ SECTION --- */}
      <section className="py-24 bg-white/5 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
              Common <span className="text-orange-500">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Who can join the Reborn Club events?",
                a: "Absolutely anyone! We organize events for school kids, families, college youth, and corporate teams. Our games are designed for all age groups to enjoy together.",
              },
              {
                q: "Do you organize events in residential societies?",
                a: "Yes! We love bringing the playground to your doorstep. We regularly partner with townships and residential societies for weekend gaming events.",
              },
              {
                q: "Can we book you for a family function or birthday?",
                a: "Definitely. What better way to celebrate than bringing the whole family together over a game of Pitthu or Kanche? We bring all the authentic equipment.",
              },
              {
                q: "Where do you operate?",
                a: "We are currently operating full-scale in Indore, Madhya Pradesh. Ekdum asli Indori style mein!",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-black border border-white/10 rounded-2xl p-6 open:border-orange-500/50 transition-colors cursor-pointer"
              >
                <summary className="text-lg font-bold text-white uppercase tracking-widest flex justify-between items-center outline-none">
                  {faq.q}
                  <ChevronDown className="text-orange-500 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-400 font-medium leading-relaxed border-t border-white/10 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
