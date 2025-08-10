"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A]">
        
        {/* Mouse Glow */}
        <div 
          className="fixed w-96 h-96 bg-gradient-to-r from-[#A78BFA]/20 to-[#F472B6]/20 rounded-full blur-3xl pointer-events-none z-10 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full">
          {/* Floating Particles */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className={`absolute ${
                  i % 5 === 0 ? 'w-2 h-2' : i % 3 === 0 ? 'w-1.5 h-1.5' : 'w-1 h-1'
                } ${
                  i % 4 === 0 ? 'bg-[#A78BFA]' : i % 3 === 0 ? 'bg-[#F472B6]' : 'bg-[#38BDF8]'
                } rounded-full opacity-60 animate-float-random`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 12}s`
                }}
              />
            ))}
          </div>
          
          {/* Geometric Shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 border-2 border-[#38BDF8]/30 rotate-45 animate-spin-slow"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-[#A78BFA]/20 to-[#F472B6]/20 animate-bounce-slow"></div>
            <div className="absolute bottom-32 left-1/4 w-12 h-12 border-2 border-[#FACC15]/40 rounded-full animate-pulse-slow"></div>
            <div className="absolute top-60 right-1/3 w-8 h-8 bg-[#38BDF8]/30 rotate-12 animate-wiggle"></div>
          </div>
          
          {/* Gradient Blobs */}
          <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-r from-[#F472B6] to-[#38BDF8] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-1"></div>
          <div className="absolute top-0 -right-4 w-80 h-80 bg-gradient-to-r from-[#FACC15] to-[#A78BFA] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob-2"></div>
          <div className="absolute -bottom-8 left-20 w-88 h-88 bg-gradient-to-r from-[#38BDF8] to-[#F472B6] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-3"></div>
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-r from-[#A78BFA] to-[#FACC15] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob-4"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10 animate-grid-move">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <span className="w-3 h-3 bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] rounded-full animate-pulse-fast"></span>
            <span className="text-white/90 text-sm font-medium">Available for projects</span>
            <span className="text-xs text-white/60">•</span>
            <span className="text-white/70 text-xs">Open to collaborate</span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up-bounce">
            <span className="bg-gradient-to-r from-[#A78BFA] via-[#F472B6] to-[#38BDF8] bg-clip-text text-transparent animate-gradient-shift hover:scale-105 transition-transform duration-300 inline-block">
              Kaarigar
            </span>
            <br />
            <span className="text-white animate-glow">Code</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light animate-slide-up animation-delay-200 hover:text-white transition-colors">
            Code. <span className="text-[#A78BFA]">Create.</span> <span className="text-[#F472B6]">Inspire.</span>
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up animation-delay-400">
            Yahaan coding ka junoon, design ki kala, aur tech ka swag milta hai.
            <br />
            <span className="text-[#A78BFA]">Modern web development</span> se lekar <span className="text-[#38BDF8]">creative solutions</span> tak, har project mein passion aur perfection.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up animation-delay-600">
            <button onClick={() => router.push('/projects')} className="group relative bg-gradient-to-r from-[#A78BFA] to-[#38BDF8] hover:from-[#F472B6] hover:to-[#FACC15] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-[#A78BFA]/25 hover:-translate-y-2 transform-gpu overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="flex items-center gap-2 justify-center relative z-10">
                🔧 Explore Projects
              </span>
            </button>
            <button onClick={() => router.push('/youtube')} className="group relative bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-2 transform-gpu overflow-hidden">
              📺 Watch Tutorials
            </button>
          </div>
        </div>
      </section>

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes blob-1 {0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-50px)}}
        @keyframes blob-2 {0%,100%{transform:translate(0,0)}50%{transform:translate(-30px,50px)}}
        @keyframes blob-3 {0%,100%{transform:translate(0,0)}50%{transform:translate(20px,-40px)}}
        @keyframes blob-4 {0%,100%{transform:translate(0,0)}50%{transform:translate(-25px,35px)}}
        @keyframes float-random {0%,100%{transform:translateY(0)}50%{transform:translateY(-60px)}}
        @keyframes gradient-shift {0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        .animate-blob-1 { animation: blob-1 10s infinite; }
        .animate-blob-2 { animation: blob-2 12s infinite; }
        .animate-blob-3 { animation: blob-3 14s infinite; }
        .animate-blob-4 { animation: blob-4 8s infinite; }
        .animate-float-random { animation: float-random 15s ease-in-out infinite; }
        .animate-gradient-shift { background-size: 200% 200%; animation: gradient-shift 4s ease infinite; }
      `}</style>
    </>
  );
}
