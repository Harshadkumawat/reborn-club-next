import Link from "next/link";
import {
  Brain,
  HeartCrack,
  ShieldAlert,
  Flame,
  Target,
  Eye,
  RefreshCw,
  Smile,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "The Comeback | Reborn Club",
  description: "It's Not a Game. It's a Comeback. Welcome to REBORN.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-orange-500 selection:text-white pb-20 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6 border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-orange-600/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-700 uppercase tracking-tighter">
            REBORN CLUB
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-white tracking-wide">
            It’s Not a Game. It’s a{" "}
            <span className="text-orange-500 italic">Comeback.</span>
          </p>
          <p className="text-gray-400 text-lg md:text-xl font-medium tracking-widest uppercase">
            A movement to rebuild confidence across all generations.
          </p>
        </div>
      </section>

      {/* 2. THE PROBLEM & THE TRUTH */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* The Problem */}
          <div className="bg-red-950/20 border border-red-500/20 p-10 md:p-14 rounded-[3rem] backdrop-blur-sm">
            <h2 className="text-3xl font-black text-red-500 uppercase tracking-widest mb-10 flex items-center gap-4">
              <HeartCrack size={32} /> The Problem
            </h2>
            <ul className="space-y-6 text-xl md:text-2xl font-bold text-gray-300">
              <li className="flex items-center gap-4">
                <Brain className="text-red-500/50" /> Mentally Exhausted
              </li>
              <li className="flex items-center gap-4">
                <ShieldAlert className="text-red-500/50" /> Emotionally
                Disconnected
              </li>
              <li className="flex items-center gap-4">
                <Eye className="text-red-500/50" /> Lost in Digital Screens
              </li>
            </ul>
          </div>

          {/* The Truth */}
          <div className="bg-orange-500/10 border border-orange-500/20 p-10 md:p-14 rounded-[3rem] backdrop-blur-sm">
            <h2 className="text-3xl font-black text-orange-500 uppercase tracking-widest mb-10 flex items-center gap-4">
              <Flame size={32} /> The Truth
            </h2>
            <div className="space-y-8 text-xl md:text-2xl font-bold text-gray-200 leading-relaxed">
              <p>
                Every stressed adult was once a{" "}
                <span className="text-white font-black italic">
                  fearless child.
                </span>
              </p>
              <div className="h-px w-20 bg-orange-500/30"></div>
              <p className="text-orange-400">
                That fearless child still exists inside you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-24 bg-white/5 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mission */}
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-orange-500 uppercase tracking-widest flex items-center gap-4">
              <Target size={40} /> Our Mission
            </h2>
            <div className="space-y-6">
              <div className="bg-black p-6 rounded-2xl border border-white/10 text-lg font-bold text-gray-300 hover:border-orange-500 transition-colors">
                Heal through nostalgic activities
              </div>
              <div className="bg-black p-6 rounded-2xl border border-white/10 text-lg font-bold text-gray-300 hover:border-orange-500 transition-colors">
                Reconnect families, friends & teams
              </div>
              <div className="bg-black p-6 rounded-2xl border border-white/10 text-lg font-bold text-orange-400 hover:border-orange-500 transition-colors">
                Create a strong digital-detox mindset
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-4xl font-black text-orange-500 uppercase tracking-widest flex items-center gap-4">
              <Eye size={40} /> Our Vision
            </h2>
            <p className="text-3xl md:text-5xl font-black leading-tight text-white">
              To build India's biggest <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-600">
                Nostalgia & Comeback Community.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 4. DIFFERENT & EXPERIENCE */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-16">
          What Makes Us <span className="text-orange-500">Different</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-4xl bg-black border border-white/10 hover:border-orange-500 transition-all shadow-xl">
            <RefreshCw size={40} className="text-orange-500 mx-auto mb-6" />
            <h3 className="text-xl font-black uppercase tracking-widest">
              Emotional Reset
            </h3>
          </div>
          <div className="p-8 rounded-4xl bg-black border border-white/10 hover:border-orange-500 transition-all shadow-xl">
            <Sparkles size={40} className="text-orange-500 mx-auto mb-6" />
            <h3 className="text-xl font-black uppercase tracking-widest">
              Mental Energy Revival
            </h3>
          </div>
          <div className="p-8 rounded-4xl bg-black border border-white/10 hover:border-orange-500 transition-all shadow-xl">
            <ShieldAlert size={40} className="text-orange-500 mx-auto mb-6" />
            <h3 className="text-xl font-black uppercase tracking-widest">
              Confidence Rebuild System
            </h3>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-orange-500 uppercase tracking-tighter mb-12">
          The Experience
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-2xl font-bold text-gray-300">
          <span className="flex items-center justify-center gap-2">
            <Smile className="text-orange-500" /> Laugh without pressure
          </span>
          <span className="hidden md:block text-white/20">|</span>
          <span className="flex items-center justify-center gap-2">
            <Flame className="text-orange-500" /> Compete without fear
          </span>
          <span className="hidden md:block text-white/20">|</span>
          <span className="flex items-center justify-center gap-2">
            <HeartCrack className="text-orange-500" /> Connect without ego
          </span>
        </div>
      </section>

      {/* 5. FINAL MESSAGE */}
      <section className="py-32 px-6 text-center relative z-10 bg-orange-600/10 border-t border-orange-500/20">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-orange-500 font-black tracking-[0.5em] text-sm uppercase">
            Final Message
          </h2>
          <p className="text-4xl md:text-6xl font-black text-white leading-tight">
            You are not weak. <br />
            <span className="text-gray-400 text-3xl md:text-5xl">
              You are just disconnected from your original self.
            </span>
          </p>
          <div className="pt-8">
            <p className="text-2xl font-bold uppercase tracking-widest mb-10 text-orange-500">
              Welcome to REBORN.
            </p>
            <Link
              href="/games"
              className="inline-block bg-orange-500 text-black px-12 py-5 rounded-full font-black text-lg uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:scale-105"
            >
              Start Your Comeback
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
