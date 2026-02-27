"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Trophy, Home, Info, Phone, LogOut } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Check agar user Admin pages par hai
  const isAdminPage = pathname.startsWith("/admin");

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={20} /> },
    { name: "Games", href: "/games", icon: <Trophy size={20} /> },
    { name: "About", href: "/about", icon: <Info size={20} /> },
    { name: "Contact", href: "/contact", icon: <Phone size={20} /> },
  ];

  const handleLogout = async () => {
    try {
      await fetch("/api/logout");
      setIsOpen(false);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter text-white z-50 relative"
              onClick={() => setIsOpen(false)}
            >
              REBORN<span className="text-orange-500">CLUB</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                      isActive
                        ? "bg-orange-500/10 text-orange-500"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Action Button (Smart Switch) */}
            <div className="hidden md:block">
              {isAdminPage ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  <LogOut size={16} strokeWidth={3} /> Logout
                </button>
              ) : (
                <Link
                  href="/admin/manage-games"
                  className="bg-orange-500 hover:bg-white text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                >
                  Admin Panel
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-400 hover:text-white z-50 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[#0a0a0a] z-40 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 relative">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 text-3xl font-black uppercase tracking-widest transition-colors ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            );
          })}

          {/* Mobile Action Button (Smart Switch) */}
          {isAdminPage ? (
            <button
              onClick={handleLogout}
              className="mt-8 bg-red-500/10 text-red-500 border border-red-500/20 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-2 relative z-10"
            >
              <LogOut size={18} strokeWidth={3} /> Logout
            </button>
          ) : (
            <Link
              href="/admin/manage-games"
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-orange-500 text-black px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(249,115,22,0.3)] relative z-10"
            >
              Open Admin Panel
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
