"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trash2,
  Edit,
  Plus,
  ChevronLeft,
  Loader2,
  Gamepad2,
} from "lucide-react";

export default function ManageGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const res = await fetch("/api/games");
      const data = await res.json();
      if (data.success) {
        setGames(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch games", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Pakka delete karna hai? Cloudinary se images/videos bhi hamesha ke liye ud jayenge!",
    );
    if (!isConfirmed) return;

    setDeletingId(id);
    try {
      const res = await fetch(`/api/games/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success) {
        setGames(games.filter((game) => game._id !== id));
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Network issue aagaya bhai!");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12 px-6 relative overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Link
              href="/admin/add-game"
              className="text-gray-500 hover:text-orange-500 flex items-center gap-2 text-sm font-bold transition mb-6"
            >
              <ChevronLeft size={16} /> BACK TO ADD GAME
            </Link>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase flex items-center gap-4">
              <Gamepad2 className="text-orange-500" size={48} />
              MANAGE <span className="text-orange-500">GAMES</span>
            </h1>
          </div>

          <Link
            href="/admin/add-game"
            className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
          >
            <Plus size={18} /> Add New
          </Link>
        </div>

        {/* Data Table */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 text-orange-500">
              <Loader2 className="animate-spin mb-4" size={48} />
              <p className="font-bold tracking-widest uppercase text-sm">
                Fetching Data...
              </p>
            </div>
          ) : games.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-gray-500 font-bold text-xl uppercase tracking-widest">
                No Games Found
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Lagta hai database ekdam khali hai.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400 text-[10px] uppercase tracking-widest">
                    <th className="p-6 font-black">Game</th>
                    <th className="p-6 font-black">Category</th>
                    <th className="p-6 font-black">Date Added</th>
                    <th className="p-6 font-black text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {games.map((game) => (
                    <tr
                      key={game._id}
                      className="hover:bg-white/5 transition-colors group"
                    >
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-white/10 shrink-0">
                            <Image
                              src={game.image}
                              alt={game.title}
                              fill
                              sizes="64px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-bold text-lg">{game.title}</p>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-1 max-w-62.5">
                              {game.description}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                          {game.category}
                        </span>
                      </td>
                      <td className="p-6 text-sm text-gray-400 font-medium">
                        {new Date(game.createdAt).toLocaleDateString("en-IN")}
                      </td>
                      <td className="p-6 text-right">
                        <div className="flex items-center justify-end gap-3">
                          {/* YAHAN HUA HAI MAGIC: Modal hat gaya, Link lag gaya! */}
                          <Link
                            href={`/admin/add-game?editId=${game._id}`}
                            className="p-2.5 bg-white/5 hover:bg-blue-500 hover:text-white text-gray-400 rounded-xl transition-all flex items-center justify-center"
                            title="Edit Game"
                          >
                            <Edit size={18} />
                          </Link>

                          {/* Delete Button (Same as before) */}
                          <button
                            onClick={() => handleDelete(game._id)}
                            disabled={deletingId === game._id}
                            className={`p-2.5 rounded-xl transition-all flex items-center justify-center ${
                              deletingId === game._id
                                ? "bg-red-500/20 text-red-500 cursor-not-allowed"
                                : "bg-white/5 hover:bg-red-500 text-gray-400 hover:text-white"
                            }`}
                            title="Delete Game"
                          >
                            {deletingId === game._id ? (
                              <Loader2 className="animate-spin" size={18} />
                            ) : (
                              <Trash2 size={18} />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
