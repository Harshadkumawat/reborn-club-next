import Image from "next/image";
import { Target, Users, Heart, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | Reborn Club",
  description: "Indore ki galiyon se nikal kar sidha aapke screen par.",
};

export default function About() {
  const values = [
    {
      title: "Our Mission",
      desc: "Indore ke un purane desi khelon ko wapas lana jo aaj ki is fast digital duniya mein kahin kho gaye hain.",
      icon: <Target className="text-orange-500" size={40} strokeWidth={1.5} />,
    },
    {
      title: "Community",
      desc: "Ek aisa club banana jahan har umeedwar aur khiladi ek saath mil kar hamare sahar ka josh barkarar rakhe.",
      icon: <Users className="text-orange-500" size={40} strokeWidth={1.5} />,
    },
    {
      title: "Passion",
      desc: "Yeh sirf games nahi hain, yeh hamari mitti, hamari dosti, aur hamare sunehre bachpan ki yaadein hain.",
      icon: <Heart className="text-orange-500" size={40} strokeWidth={1.5} />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-orange-500 selection:text-white pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <span className="text-orange-500 font-black tracking-[0.4em] text-xs uppercase mb-6 block">
            The Origin Story
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none mb-8">
            WE ARE <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-600">
              REBORN
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
            Gully se lekar Global tak, Indore ke desi jazbe ko phir se zinda
            karne ki ek choti si koshish.
          </p>
        </div>
      </section>

      {/* 2. STORY SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
              THE STORY <br /> OF THE{" "}
              <span className="text-orange-500">CLUB</span>
            </h2>
            <div className="w-20 h-2 bg-orange-500"></div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
              <p>
                Reborn Club ki shuruat ek simple khayal se hui thi:{" "}
                <span className="text-white italic">
                  "Kya hum apne bachpan ke wo games bhool gaye hain?"
                </span>
              </p>
              <p>
                Pitthu, Gilli Danda, Kanche... ye sirf khel nahi the, ye hamara
                sabse pehla social network tha jab jeb mein smartphone nahi,
                kanche hua karte the.
              </p>
              <p>
                Hum Indore ke har kone se un kisse aur kahaniyon ko dhund kar la
                rahe hain taaki naye zamane ke bacche bhi wahi asali khushi
                mehsoos kar sakein jo humne sadkon pe ki thi.
              </p>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-4/5 rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.1)] group border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1000&auto=format&fit=crop"
              alt="Reborn Club Activity"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 mix-blend-luminosity group-hover:mix-blend-normal"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-orange-500 font-black tracking-widest text-xs uppercase mb-2">
                Since 2024
              </p>
              <p className="text-white font-bold text-2xl uppercase tracking-tighter">
                Keeping the Legacy Alive
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUES SECTION */}
      <section className="py-24 px-6 relative z-10 bg-white/5 border-y border-white/10 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              What We <span className="text-orange-500">Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-black p-10 md:p-12 rounded-[2.5rem] border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-500 group"
              >
                <div className="mb-8 p-4 bg-white/5 inline-block rounded-2xl group-hover:bg-orange-500/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-widest mb-4 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <section className="py-32 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-tight">
            WANT TO BE PART OF <br className="hidden md:block" />
            <span className="text-orange-500">THE MOVEMENT?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-medium">
            Join the Reborn Club today. Khelenge, sikhenge, aur bachpan ki un
            galiyon mein phir se dhoom machayenge.
          </p>
          <Link
            href="/games"
            className="inline-flex items-center gap-3 bg-orange-500 text-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:scale-105"
          >
            Explore Games <ArrowUpRight size={20} strokeWidth={3} />
          </Link>
        </div>
      </section>
    </main>
  );
}
