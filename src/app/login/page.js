// src/app/login/page.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight, Loader2 } from "lucide-react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (data.success) {
        router.push("/admin/manage-games");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Network error bhai!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute w-125 h-125 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl relative z-10 shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20">
            <Lock className="text-orange-500" size={32} />
          </div>
        </div>

        <h1 className="text-3xl font-black text-white text-center tracking-tighter uppercase mb-2">
          Admin <span className="text-orange-500">Access</span>
        </h1>
        <p className="text-gray-400 text-center text-sm mb-8 font-medium">
          Reborn Club ke dashboard mein entry sirf authorized logo ke liye hai.
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="password"
              placeholder="Enter VIP Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-white/10 px-6 py-4 rounded-2xl text-white font-bold outline-none focus:border-orange-500 transition-colors text-center tracking-widest"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-xs font-bold text-center uppercase tracking-widest bg-red-500/10 py-2 rounded-lg">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black uppercase tracking-widest py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                Unlock Dashboard <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
