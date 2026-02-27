import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const GameCard = ({ game }) => {
  return (
    <Link
      href={`/games/${game.slug || game._id}`}
      className="group relative block rounded-[2.5rem] overflow-hidden bg-[#050505] border border-white/5 hover:border-orange-500/40 transition-all duration-700 aspect-4/5 shadow-2xl"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={game.image}
          alt={game.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-1000 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent"></div>

        <div className="absolute -inset-1 bg-orange-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      </div>

      <div className="absolute top-6 left-6 z-20">
        <span className="backdrop-blur-xl bg-black/40 border border-white/10 text-white group-hover:text-orange-500 group-hover:border-orange-500/50 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] transition-all duration-500">
          {game.category}
        </span>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-10 text-white">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-4 text-white group-hover:text-orange-500 transition-colors duration-500 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {game.title}
          </h3>

          <p className="text-gray-400 text-sm font-medium line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 leading-relaxed">
            {game.description}
          </p>

          <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors duration-500">
            Explore Legacy
            <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black transition-all duration-500 transform group-hover:rotate-45 shadow-xl">
              <ArrowUpRight size={16} strokeWidth={3} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
