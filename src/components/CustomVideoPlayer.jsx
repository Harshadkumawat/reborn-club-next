"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function CustomVideoPlayer({ videoUrl, coverImage, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Agar video nahi hai, toh player mat dikhao
  if (!videoUrl) return null;

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Click karte hi Native video play kar do
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    // Khatam hote hi wapas Cover Image dikha do
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full aspect-video rounded-4xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(249,115,22,0.1)] bg-black group">
      {/* 1. ASLI HTML5 VIDEO PLAYER (Cloudinary ya Local video ke liye) */}
      <video
        ref={videoRef}
        src={videoUrl}
        className="absolute inset-0 w-full h-full object-cover z-10"
        controls={isPlaying} // Jab video chalega tabhi controls aayenge
        onEnded={handleVideoEnd}
        playsInline // Mobile pe full screen glitch rokne ke liye
      />

      {/* 2. REBORN CLUB CUSTOM COVER OVERLAY */}
      {!isPlaying && (
        <div
          onClick={handlePlayClick}
          className="absolute inset-0 z-20 cursor-pointer bg-black"
        >
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-orange-500/20 backdrop-blur-xl rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 border border-orange-500/50 shadow-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.8)] text-black">
                <Play size={28} className="ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-8">
            <p className="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-1">
              Watch Gameplay
            </p>
            <p className="text-white font-bold text-xl drop-shadow-md">
              {title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
