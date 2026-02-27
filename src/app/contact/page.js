import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Twitter,
  GraduationCap,
  Building2,
  Briefcase,
} from "lucide-react";

export const metadata = {
  title: "Partner With Us | Reborn Club",
  description:
    "Book Reborn Club for Schools, Families, and Corporate Events in Indore.",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-orange-500 selection:text-white pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 mt-10">
          <span className="text-orange-500 font-black tracking-[0.4em] text-xs uppercase mb-6 block">
            Invite Us To Your Ground
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-tight">
            Let's Make a <br />
            <span className=" text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-700">
              Comeback
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
            School fest ho, family function ho, ya office ki party—Indore ki
            mitti aur hamare khel sabko jod dete hain. Ping us!
          </p>
        </div>

        {/* UNIVERSAL BOOKING SECTION */}
        <div className="mb-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Book <span className="text-orange-500">Reborn Club</span> For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-black border border-white/10 p-8 rounded-4xl hover:border-orange-500/50 transition-all group">
              <GraduationCap size={36} className="text-orange-500 mb-6" />
              <h3 className="text-2xl font-black uppercase tracking-widest mb-3">
                Schools & Fests
              </h3>
              <p className="text-gray-400 font-medium text-sm mb-6">
                Taking kids away from mobile screens. We organize traditional
                sports tournaments for schools and colleges.
              </p>
            </div>

            <div className="bg-black border border-white/10 p-8 rounded-4xl hover:border-orange-500/50 transition-all group">
              <Building2 size={36} className="text-orange-500 mb-6" />
              <h3 className="text-2xl font-black uppercase tracking-widest mb-3">
                Townships & Family
              </h3>
              <p className="text-gray-400 font-medium text-sm mb-6">
                Weekend society events, grand family reunions, and birthdays
                where three generations can play together.
              </p>
            </div>

            <div className="bg-black border border-white/10 p-8 rounded-4xl hover:border-orange-500/50 transition-all group">
              <Briefcase size={36} className="text-orange-500 mb-6" />
              <h3 className="text-2xl font-black uppercase tracking-widest mb-3">
                Corporate Teams
              </h3>
              <p className="text-gray-400 font-medium text-sm mb-6">
                High-energy stress buster sessions that improve mental health
                and team synergy naturally.
              </p>
            </div>
          </div>
        </div>

        {/* 🛠️ NAYA: 4-Column Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 relative z-10">
          {/* Phone Card */}
          <a
            href="tel:+918103884547"
            className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-500 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-orange-500 transition-all duration-500 shadow-xl">
              <Phone size={24} className="text-orange-500" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-widest mb-2 text-white">
              Call Us
            </h3>
            <p className="text-orange-500 font-bold text-sm md:text-base tracking-wider">
              +91 81038 84547
            </p>
          </a>

          {/* Email Card */}
          <a
            href="mailto:rebornclubyouth@gmail.com"
            className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-500 text-center flex flex-col items-center overflow-hidden"
          >
            <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-orange-500 transition-all duration-500 shadow-xl">
              <Mail size={24} className="text-orange-500" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-widest mb-2 text-white">
              Email
            </h3>
            <p className="text-orange-500 font-bold text-xs md:text-sm tracking-wider break-all px-2">
              rebornclubyouth
              <br />
              @gmail.com
            </p>
          </a>

          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/rebornclub.official?igsh=MWozOWRqcmk3bW9ibg=="
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-500 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-orange-500 transition-all duration-500 shadow-xl">
              <Instagram size={24} className="text-orange-500" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-widest mb-2 text-white">
              Instagram
            </h3>
            <p className="text-orange-500 font-bold text-sm md:text-base tracking-wider">
              @rebornclub
            </p>
          </a>

          {/* X (Twitter) Card */}
          <a
            href="https://x.com/rebornclubyouth"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-500 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-orange-500 transition-all duration-500 shadow-xl">
              <Twitter size={24} className="text-orange-500" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-widest mb-2 text-white">
              X (Twitter)
            </h3>
            <p className="text-orange-500 font-bold text-sm md:text-base tracking-wider">
              @rebornclubyouth
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
