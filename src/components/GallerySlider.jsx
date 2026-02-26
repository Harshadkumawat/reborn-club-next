"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

export default function GallerySlider({ images, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Keyboard Navigation (Escape, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!images || images.length === 0) return null;

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const showNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="flex items-center gap-3 text-orange-500 mb-8">
        <Images size={28} strokeWidth={2.5} />
        <h2 className="text-3xl font-black uppercase tracking-widest text-white">
          Visual Archives
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((imgUrl, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] transition-all duration-500"
          >
            <Image
              src={imgUrl}
              alt={`${title} Gallery ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
              <span className="bg-orange-500 text-black px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-widest scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                View Image
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-red-500 p-3 rounded-full transition-all z-50"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-4 md:left-10 text-white/50 hover:text-orange-500 bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all z-50"
            onClick={showPrev}
          >
            <ChevronLeft size={32} />
          </button>

          {/* Main Image Container */}
          <div
            className="relative w-full max-w-5xl h-[70vh] md:h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex]}
              alt={`${title} Lightbox ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-4 md:right-10 text-white/50 hover:text-orange-500 bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all z-50"
            onClick={showNext}
          >
            <ChevronRight size={32} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 px-6 py-2 rounded-full border border-white/10 text-white font-bold tracking-widest text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
