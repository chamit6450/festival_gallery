"use client";
import { useEffect, useRef } from "react";

export default function TailwindHero() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0c0f19] text-white px-6 overflow-hidden">
      {/* Cursor Hover Effect */}
      <div
        ref={cursorRef}
        className="absolute w-64 h-64 bg-[#20a149]/40 border-2 border-[#20a149] rounded-full blur-3xl transition-transform duration-50 pointer-events-none"
        style={{ position: "fixed", top: 0, left: 0 }}
      ></div>

      {/* Header Section */}
      <div className="text-center max-w-4xl relative z-10">
        <p className="text-gray-400 text-sm uppercase tracking-wide">
          Explore the Origins of <span className="text-[#FFD700]">Festivals</span>
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          Discover the History of <span className="text-[#e6cb37] font-semibold">Celebrations </span><br />
          <span className="inline-block">from Ancient Traditions to Modern Festivities.</span>
        </h1>
      </div>

      {/* Subtext Section */}
      <div className="text-center max-w-3xl mt-6 relative z-10">
        <p className="text-lg text-gray-300 font-medium">
          Uncover the rich heritage of global Festivals, from the vibrant colors of{" "}
          <span className="text-[#20a149] font-semibold">Holi</span> to the radiant lights of{" "}
          <span className="text-[#20a149] font-semibold">Diwali</span>. Learn about ancient customs, spiritual meanings, and how these celebrations evolved over centuries.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-8 relative z-10">
        <button className="bg-gray-200 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-300 transition">
          Explore Now
        </button>
        <div className="flex items-center bg-gray-800 text-gray-400 px-4 py-3 rounded-full">
          <span className="mr-2">🔍</span>
          Search Festivals
        </div>
        <div className="flex items-center bg-gray-800 text-gray-400 px-4 py-3 rounded-full">
          Ctrl K
        </div>
      </div>
    </div>
  );
}
