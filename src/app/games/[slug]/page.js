import { getGameBySlug } from "@/controllers/gameController";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  PlaySquare,
  ScrollText,
  ArrowUpRight,
  Share2,
  CalendarDays,
} from "lucide-react";
import { notFound } from "next/navigation";
import CustomVideoPlayer from "@/components/CustomVideoPlayer";
import GallerySlider from "@/components/GallerySlider";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const response = await getGameBySlug(slug);
  const game = response?.data;

  if (!game) return { title: "Game Not Found | Reborn Club" };

  return {
    title: `${game.title} - The Reborn Experience`,
    description: game.description.substring(0, 160) + "...",
    openGraph: {
      title: `${game.title} | Reborn Club`,
      description: game.description.substring(0, 160) + "...",
      images: [game.image],
    },
  };
}

export default async function GameDetailsPage({ params }) {
  const { slug } = await params;
  const response = await getGameBySlug(slug);
  const game = response.data;

  if (!response.success || !game) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-orange-500 selection:text-black pb-24">
      {/* 1. HERO SECTION  */}
      <section className="relative h-[60vh] w-full flex flex-col justify-end pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src={game.image}
            alt={game.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center">
          <div className="flex justify-center mb-6">
            <span className="bg-orange-500/10 border border-orange-500/20 text-orange-500 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(249,115,22,0.1)]">
              {game.category}
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-white drop-shadow-2xl">
            {game.title}
          </h1>
          <Link
            href="/games"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-bold text-xs uppercase tracking-[0.2em] transition-colors bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md"
          >
            <ChevronLeft size={14} strokeWidth={3} /> Back to Collection
          </Link>
        </div>
      </section>

      {/* 2. MAIN CONTENT  */}
      <section className="max-w-5xl mx-auto px-6 mt-12 space-y-20 relative z-20">
        {/* A. VIDEO SECTION  */}
        {game.video && (
          <div className="animate-fade-in-up">
            <div className="ring-1 ring-white/10 rounded-4xl p-2 bg-white/5 shadow-2xl">
              <div className="rounded-3xl overflow-hidden relative">
                <CustomVideoPlayer
                  videoUrl={game.video}
                  coverImage={game.image}
                  title={game.title}
                />
              </div>
            </div>
          </div>
        )}

        {/* B. DESCRIPTION / RULES  */}
        <div>
          <div className="flex items-center justify-center gap-3 text-orange-500 mb-8">
            <ScrollText size={28} strokeWidth={2.5} />
            <h2 className="text-3xl font-black uppercase tracking-widest text-white text-center">
              About The Game
            </h2>
          </div>
          <div className="bg-[#050505] border border-white/10 p-8 md:p-12 rounded-4xl shadow-xl">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium whitespace-pre-line text-center md:text-left">
              {game.description}
            </p>
          </div>
        </div>

        {/* C. GALLERY (Photos) */}
        {game.gallery && game.gallery.length > 0 && (
          <div>
            <div className="flex items-center justify-center gap-3 text-orange-500 mb-8">
              <PlaySquare size={28} strokeWidth={2.5} />
              <h2 className="text-3xl font-black uppercase tracking-widest text-white text-center">
                Memories
              </h2>
            </div>
            <GallerySlider images={game.gallery} title={game.title} />
          </div>
        )}

        {/* D. BOOKING BANNER  */}
        <div className="bg-linear-to-r from-orange-600 to-orange-500 p-8 md:p-12 rounded-4xl text-center shadow-[0_0_40px_rgba(249,115,22,0.2)]">
          <CalendarDays
            size={48}
            className="text-black mx-auto mb-6"
            strokeWidth={1.5}
          />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black mb-4">
            Relive This Experience
          </h2>
          <p className="text-black/80 font-bold text-lg mb-8 max-w-2xl mx-auto">
            Bring {game.title} to your school, college fest, society event, or
            corporate retreat. We provide the full authentic setup.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors shadow-2xl"
          >
            Plan An Event <ArrowUpRight size={18} strokeWidth={3} />
          </Link>
        </div>
      </section>
    </main>
  );
}
