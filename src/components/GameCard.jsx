import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const GameCard = ({ game }) => {
  return (
    <Link
      href={`/games/${game._id}`}
      className="group relative block rounded-[2.5rem] overflow-hidden bg-black border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] transition-all duration-500 aspect-3/4"
    >
      {/* 1. Background Image with Next.js Optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src={game.image}
          alt={game.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* 2. Category Badge */}
      <div className="absolute top-6 left-6 z-20">
        <span className="backdrop-blur-xl bg-black/30 text-white border border-white/10 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">
          {game.category}
        </span>
      </div>

      {/* 3. Content Area */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-4 drop-shadow-lg">
            {game.title}
          </h3>

          {/* Animated Orange Line */}
          <div className="w-12 h-1 bg-orange-500 mb-4 group-hover:w-full transition-all duration-700 ease-in-out"></div>

          {/* Hidden Details - Hover par bahar aayenge */}
          <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium line-clamp-2">
              {game.description}
            </p>

            <div className="inline-flex items-center gap-2 bg-orange-500 text-black px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest group-hover:bg-white transition-colors">
              Play Now <ArrowUpRight size={16} strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;