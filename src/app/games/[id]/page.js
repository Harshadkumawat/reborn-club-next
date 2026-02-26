import { getGameById } from "@/controllers/gameController";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, PlaySquare, ScrollText } from "lucide-react";
import { notFound } from "next/navigation";
import CustomVideoPlayer from "@/components/CustomVideoPlayer";
import GallerySlider from "@/components/GallerySlider";

export default async function GameDetailsPage({ params }) {
  const { id } = await params;
  const response = await getGameById(id);
  const game = response.data;

  if (!response.success || !game) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-orange-500 selection:text-black pb-24">
      {/* HERO SECTION */}
      <section className="relative h-[65vh] md:h-[80vh] w-full flex items-end pb-12 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src={game.image}
            alt={game.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Link
            href="/games"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 font-bold text-xs uppercase tracking-[0.2em] mb-8 transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm"
          >
            <ChevronLeft size={14} strokeWidth={3} /> Back to Collection
          </Link>

          <div className="flex flex-col gap-5">
            <span className="bg-orange-500 text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] w-fit shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              {game.category}
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
              {game.title}
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 -mt-8 relative z-20">
        {/* Left Column: Rules / Description */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-12 space-y-6">
            <div className="flex items-center gap-3 text-orange-500 mb-6">
              <ScrollText size={28} strokeWidth={2.5} />
              <h2 className="text-3xl font-black uppercase tracking-widest text-white">
                The Rules
              </h2>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl relative overflow-hidden">
              {/* Subtle glow effect behind text */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-500/10 blur-[50px] rounded-full"></div>
              <p className="text-gray-300 text-lg leading-relaxed font-medium relative z-10 whitespace-pre-line">
                {game.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Media (Video + Gallery) */}
        <div className="lg:col-span-7 space-y-24 pt-2">
          {game.video && (
            <div>
              <div className="flex items-center gap-3 text-orange-500 mb-8">
                <PlaySquare size={28} strokeWidth={2.5} />
                <h2 className="text-3xl font-black uppercase tracking-widest text-white">
                  Action Replay
                </h2>
              </div>
              <div className="ring-1 ring-white/10 rounded-[2.5rem] p-2 bg-white/5 shadow-2xl">
                <div className="rounded-4xl overflow-hidden">
                  <CustomVideoPlayer
                    videoUrl={game.video}
                    coverImage={game.image}
                    title={game.title}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Interactive Gallery Lightbox */}
          <GallerySlider images={game.gallery} title={game.title} />
        </div>
      </section>
    </main>
  );
}
