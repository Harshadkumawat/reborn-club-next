import Link from "next/link";
import { Instagram, Mail, MapPin, Heart, Phone, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-orange-500/50 to-transparent"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* 1. Brand Section */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-3xl font-black tracking-tighter text-white inline-block mb-4"
            >
              REBORN<span className="text-orange-500">CLUB</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-medium mb-6">
              Indore ki galliyon se lekar digital duniya tak. Hamari mitti,
              hamare khel, aur hamari legacy ko zinda rakhne ki ek movement.
            </p>
          </div>

          {/* 2. Contact Info */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6">
              Reach Out
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 font-bold text-sm tracking-wider">
                <MapPin size={16} className="text-orange-500" /> MP-09, Indore
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-bold text-sm tracking-wider">
                <Phone size={16} className="text-orange-500" />
                <a
                  href="tel:+918103884547"
                  className="hover:text-orange-500 transition"
                >
                  +91 81038 84547
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-bold text-sm tracking-wider">
                <Mail size={16} className="text-orange-500" />
                <a
                  href="mailto:rebornclubyouth@gmail.com"
                  className="hover:text-orange-500 transition"
                >
                  rebornclubyouth@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Quick Links */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              {["Home", "Games", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-orange-500 text-sm font-bold transition-colors uppercase tracking-wider flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-4"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Social Links (UPDATED WITH X) */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6">
              Join The Movement
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium mb-6">
              Hamare socials par judo aur apna bachpan wapas jeeyo.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/rebornclub.official?igsh=MWozOWRqcmk3bW9ibg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.2)]"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/rebornclubyouth"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:rebornclubyouth@gmail.com"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest text-center md:text-left">
            &copy; {currentYear} Reborn Club. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs font-bold tracking-widest flex items-center gap-1 uppercase">
            Made with{" "}
            <Heart size={12} className="text-orange-500 fill-orange-500" /> in
            Indore
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
