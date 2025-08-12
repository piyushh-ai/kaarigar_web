import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function AppPage(): React.JSX.Element {
  const features = [
    { icon: '🗺️', title: 'Location Simulation', description: 'Simulate GPS location anywhere in the world with precision.' },
    { icon: '🔧', title: 'Developer Tools', description: 'Perfect for app testing and location-based development.' },
    { icon: '🎯', title: 'Precise Control', description: 'Set exact coordinates or search for specific locations.' },
    { icon: '🔒', title: 'Privacy First', description: 'All location data stays on your device — no data collection.' },
  ];

  const screenshots = [
    { src: '/assets/appImage/6082429313778567238.jpg', alt: 'Main interface' },
    { src: '/assets/appImage/6082429313778567237.jpg', alt: 'Location search' },
    { src: '/assets/appImage/6082429313778567236.jpg', alt: 'Map view' },
    { src: '/assets/appImage/6082429313778567235.jpg', alt: 'Settings panel' },
    { src: '/assets/appImage/6082429313778567234.jpg', alt: 'Location selection' },
    { src: '/assets/appImage/6082429313778567233.jpg', alt: 'App menu' },
    { src: '/assets/appImage/6082429313778567232.jpg', alt: 'About screen' },
  ];

  return (
    <>
      <Head>
        <title>TeleportGo - Location Simulation Tool</title>
        <meta name="description" content="TeleportGo lets developers simulate GPS locations anywhere in the world. Perfect for testing, geofencing, and location-based app development." />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] text-white">

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* App Info */}
            <div className="space-y-6 text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl shadow-2xl overflow-hidden">
                  <Image src="/assets/appImage/teleport_go_icon.png" alt="TeleportGo App Icon" width={96} height={96} className="object-cover w-full h-full" priority />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-1">TeleportGo</h1>
                  <p className="text-gray-300 text-base sm:text-lg">Location Development Tool</p>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
                    <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
                    <span className="text-gray-400 text-sm">(4.8) • Developer Tools</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                TeleportGo is a trusted and safe location simulation app designed for developers and testers.
                Use it to test geofencing, debug GPS features, or simulate different locations without leaving your desk.
              </p>

              {/* Download Button */}
              <div className="space-y-3">
                <p className="text-green-400 font-semibold text-sm sm:text-base">✅ 100% Safe & Verified Download</p>
                <a
                  href="https://github.com/piyushh-ai/teleportGo/releases/download/v1.0/teleportgo-v1.0.apk"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="text-xl sm:text-2xl">📱</span>
                  Download APK
                  <span className="text-xs sm:text-sm bg-white/20 px-2 py-1 rounded-full">v1.0</span>
                </a>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-400">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full"></span>Free Download</span>
                  <span>•</span>
                  <span>Android 6.0+</span>
                  <span>•</span>
                  <span>25.2 MB</span>
                </div>
              </div>
            </div>

            {/* App Preview */}
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl w-full max-w-sm">
                <div className="bg-blue-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center text-white">
                  <div className="text-5xl sm:text-6xl mb-3">🗺️</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">Location Simulator</h3>
                  <p className="text-blue-100 text-xs sm:text-sm">Teleport anywhere instantly</p>
                  <div className="mt-3 sm:mt-4 bg-white/10 rounded-lg p-2 sm:p-3">
                    <div className="text-[10px] sm:text-xs text-blue-200 mb-1">Current Location</div>
                    <div className="text-xs sm:text-sm font-mono">40.7128° N, 74.0060° W</div>
                    <div className="text-[10px] sm:text-xs text-blue-200">New York, USA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Section - Mobile Carousel */}
        <section className="bg-gray-800/30 backdrop-blur-sm py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">App Screenshots</h2>
              <p className="text-gray-300 text-sm sm:text-lg">
                Explore TeleportGo&apos;s clean and intuitive interface designed for developers.
              </p>
            </div>

            {/* Mobile: Horizontal Scroll, Desktop: Grid */}
            <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 no-scrollbar">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="flex-shrink-0 sm:flex-shrink bg-gray-900/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 w-44 sm:w-auto">
                  <div className="aspect-[9/16] relative overflow-hidden rounded-lg sm:rounded-xl">
                    <Image src={screenshot.src} alt={screenshot.alt} fill className="object-cover" />
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2 text-center">{screenshot.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-900/50 backdrop-blur-sm py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Key Features</h2>
            <p className="text-gray-300 text-sm sm:text-lg mb-8 sm:mb-12">
              All the tools you need for accurate and secure location-based development.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm sm:text-xl font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
