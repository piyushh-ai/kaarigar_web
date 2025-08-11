"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Home component renders the main page with interactive animations.
 * It tracks mouse and scroll positions to create dynamic visual effects.
 * Includes sections like hero, background elements, and content with animations.
 */
export default function Home() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A]">
        
        {/* Enhanced Mouse Glow */}
        <div 
          className="fixed w-[500px] h-[500px] bg-gradient-to-r from-[#A78BFA]/20 to-[#F472B6]/20 rounded-full blur-3xl pointer-events-none z-10 transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
          }}
        />

        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full">
          {/* Enhanced Floating Particles with Physics */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {[...Array(120)].map((_, i) => (
              <div
                key={i}
                className={`absolute ${
                  i % 5 === 0 ? 'w-2 h-2' : i % 3 === 0 ? 'w-1.5 h-1.5' : 'w-1 h-1'
                } ${
                  i % 4 === 0 ? 'bg-[#A78BFA]' : i % 3 === 0 ? 'bg-[#F472B6]' : 'bg-[#38BDF8]'
                } rounded-full opacity-60 animate-float-enhanced`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 15}s`,
                  animationDuration: `${8 + Math.random() * 20}s`
                }}
              />
            ))}
          </div>
          
          {/* Enhanced Geometric Shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 border-2 border-[#38BDF8]/30 rotate-45 animate-spin-custom"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-[#A78BFA]/20 to-[#F472B6]/20 animate-bounce-float rounded-lg"></div>
            <div className="absolute bottom-32 left-1/4 w-12 h-12 border-2 border-[#FACC15]/40 rounded-full animate-pulse-glow"></div>
            <div className="absolute top-60 right-1/3 w-8 h-8 bg-[#38BDF8]/30 rotate-12 animate-wiggle-enhanced rounded"></div>
            <div className="absolute top-1/3 left-1/6 w-6 h-6 border border-[#F472B6]/40 animate-rotate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/5 w-10 h-10 bg-gradient-to-br from-[#A78BFA]/10 to-[#38BDF8]/10 animate-morph"></div>
          </div>
          
          {/* Enhanced Gradient Blobs with Better Movement */}
          <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-r from-[#F472B6] to-[#38BDF8] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-enhanced-1"></div>
          <div className="absolute top-0 -right-4 w-80 h-80 bg-gradient-to-r from-[#FACC15] to-[#A78BFA] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob-enhanced-2"></div>
          <div className="absolute -bottom-8 left-20 w-88 h-88 bg-gradient-to-r from-[#38BDF8] to-[#F472B6] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-enhanced-3"></div>
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-r from-[#A78BFA] to-[#FACC15] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob-enhanced-4"></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10 animate-grid-drift">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
            }}></div>
          </div>

          {/* New Ripple Effects */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-40 h-40 border border-white/5 rounded-full animate-ripple"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                  animationDelay: `${i * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 animate-slide-in-top hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="relative">
              <span className="w-3 h-3 bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] rounded-full animate-pulse-fast block"></span>
              <span className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] rounded-full animate-ping opacity-75"></span>
            </div>
            <span className="text-white/90 text-sm font-medium">Available for projects</span>
            <span className="text-xs text-white/60">•</span>
            <span className="text-white/70 text-xs group-hover:text-white/90 transition-colors">Open to collaborate</span>
          </div>

          {/* Enhanced Heading with Better Animation */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-title-reveal">
            <span className="relative inline-block bg-gradient-to-r from-[#A78BFA] via-[#F472B6] to-[#38BDF8] bg-clip-text text-transparent animate-gradient-flow bg-300% hover:scale-105 transition-transform duration-300">
              Kaarigar
              <div className="absolute -inset-1 bg-gradient-to-r from-[#A78BFA]/20 via-[#F472B6]/20 to-[#38BDF8]/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </span>
            <br />
            <span className="text-white animate-text-glow hover:animate-text-pulse transition-all duration-300">Code</span>
          </h1>

          {/* Enhanced Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light animate-slide-up-stagger animation-delay-200 hover:text-white transition-colors">
            Code. <span className="text-[#A78BFA] animate-color-pulse">Create.</span> <span className="text-[#F472B6] animate-color-pulse animation-delay-500">Inspire.</span>
          </p>

          {/* Enhanced Description */}
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-400">
            Yahaan coding ka junoon, design ki kala, aur tech ka swag milta hai.
            <br />
            <span className="text-[#A78BFA] hover:text-[#A78BFA]/80 transition-colors">Modern web development</span> se lekar <span className="text-[#38BDF8] hover:text-[#38BDF8]/80 transition-colors">creative solutions</span> tak, har project mein passion aur perfection.
          </p>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-buttons-entrance animation-delay-600">
            <button onClick={() => router.push('/projects')} className="group relative bg-gradient-to-r from-[#A78BFA] to-[#38BDF8] hover:from-[#F472B6] hover:to-[#FACC15] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-[#A78BFA]/25 hover:-translate-y-3 transform-gpu overflow-hidden animate-button-float">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="flex items-center gap-2 justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                <span className="animate-bounce">🔧</span> Explore Projects
              </span>
            </button>
            <button onClick={() => window.open('https://youtube.com/@kaarigarcode')} className="group relative bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-500 hover:shadow-xl hover:-translate-y-3 transform-gpu overflow-hidden animate-button-float animation-delay-200">
              <span className="flex items-center gap-2 justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="group-hover:animate-pulse">📺</span> Watch Tutorials
              </span>
            </button>
          </div>

          {/* New Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll-dot"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Animations CSS */}
      <style jsx>{`
        @keyframes float-enhanced {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-40px) rotate(90deg) scale(1.1); }
          50% { transform: translateY(-80px) rotate(180deg) scale(0.9); }
          75% { transform: translateY(-40px) rotate(270deg) scale(1.1); }
        }
        
        @keyframes blob-enhanced-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          33% { transform: translate(40px, -60px) scale(1.2) rotate(120deg); }
          66% { transform: translate(-30px, 40px) scale(0.8) rotate(240deg); }
        }
        
        @keyframes blob-enhanced-2 {
          0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          33% { transform: translate(-50px, 70px) scale(1.3) rotate(-120deg); }
          66% { transform: translate(35px, -45px) scale(0.9) rotate(-240deg); }
        }
        
        @keyframes blob-enhanced-3 {
          0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          33% { transform: translate(25px, -50px) scale(1.1) rotate(90deg); }
          66% { transform: translate(-40px, 30px) scale(1.2) rotate(180deg); }
        }
        
        @keyframes blob-enhanced-4 {
          0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          33% { transform: translate(-35px, 55px) scale(0.9) rotate(-90deg); }
          66% { transform: translate(45px, -25px) scale(1.3) rotate(-180deg); }
        }
        
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes title-reveal {
          0% { opacity: 0; transform: translateY(100px) scale(0.8); }
          50% { opacity: 0.5; transform: translateY(50px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
          50% { text-shadow: 0 0 40px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.3); }
        }
        
        @keyframes text-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes slide-in-top {
          0% { transform: translateY(-100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slide-up-stagger {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fade-in-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes buttons-entrance {
          0% { transform: translateY(50px) scale(0.8); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        
        @keyframes button-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes color-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes spin-custom {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        
        @keyframes bounce-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(250, 204, 21, 0.4); }
          50% { box-shadow: 0 0 20px rgba(250, 204, 21, 0.8), 0 0 30px rgba(250, 204, 21, 0.4); }
        }
        
        @keyframes wiggle-enhanced {
          0%, 100% { transform: rotate(12deg) scale(1); }
          25% { transform: rotate(18deg) scale(1.1); }
          50% { transform: rotate(6deg) scale(0.9); }
          75% { transform: rotate(15deg) scale(1.05); }
        }
        
        @keyframes rotate-pulse {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
        }
        
        @keyframes morph {
          0%, 100% { border-radius: 50%; transform: scale(1) rotate(0deg); }
          33% { border-radius: 20%; transform: scale(1.2) rotate(120deg); }
          66% { border-radius: 30%; transform: scale(0.8) rotate(240deg); }
        }
        
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        
        @keyframes grid-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 20px); }
        }
        
        @keyframes scroll-bounce {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(10px); }
        }
        
        @keyframes scroll-dot {
          0%, 100% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(15px); }
        }
        
        /* Animation Classes */
        .animate-float-enhanced { animation: float-enhanced 15s ease-in-out infinite; }
        .animate-blob-enhanced-1 { animation: blob-enhanced-1 12s ease-in-out infinite; }
        .animate-blob-enhanced-2 { animation: blob-enhanced-2 15s ease-in-out infinite; }
        .animate-blob-enhanced-3 { animation: blob-enhanced-3 18s ease-in-out infinite; }
        .animate-blob-enhanced-4 { animation: blob-enhanced-4 10s ease-in-out infinite; }
        .animate-gradient-flow { background-size: 300% 300%; animation: gradient-flow 6s ease infinite; }
        .animate-title-reveal { animation: title-reveal 1.5s ease-out forwards; }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
        .animate-text-pulse { animation: text-pulse 1s ease-in-out infinite; }
        .animate-slide-in-top { animation: slide-in-top 1s ease-out forwards; }
        .animate-slide-up-stagger { animation: slide-up-stagger 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-buttons-entrance { animation: buttons-entrance 1s ease-out forwards; }
        .animate-button-float { animation: button-float 3s ease-in-out infinite; }
        .animate-color-pulse { animation: color-pulse 2s ease-in-out infinite; }
        .animate-spin-custom { animation: spin-custom 8s linear infinite; }
        .animate-bounce-float { animation: bounce-float 4s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-wiggle-enhanced { animation: wiggle-enhanced 3s ease-in-out infinite; }
        .animate-rotate-pulse { animation: rotate-pulse 4s ease-in-out infinite; }
        .animate-morph { animation: morph 6s ease-in-out infinite; }
        .animate-ripple { animation: ripple 4s ease-out infinite; }
        .animate-grid-drift { animation: grid-drift 20s ease-in-out infinite; }
        .animate-scroll-bounce { animation: scroll-bounce 2s ease-in-out infinite; }
        .animate-scroll-dot { animation: scroll-dot 2s ease-in-out infinite; }
        
        /* Utility Classes */
        .bg-300% { background-size: 300% 300%; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
      `}</style>
    </>
  );
}