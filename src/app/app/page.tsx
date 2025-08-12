import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function AppPage(): React.JSX.Element {
  const features = [
    {
      icon: '🗺️',
      title: 'Location Simulation',
      description: 'Simulate GPS location anywhere in the world with precision.'
    },
    {
      icon: '🔧',
      title: 'Developer Tools',
      description: 'Perfect for app testing and location-based development.'
    },
    {
      icon: '🎯',
      title: 'Precise Control',
      description: 'Set exact coordinates or search for specific locations.'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'All location data stays on your device — no data collection.'
    }
  ];

  const screenshots = [
    { src: '/assets/appImage/6082429313778567238.jpg', alt: 'Main interface' },
    { src: '/assets/appImage/6082429313778567237.jpg', alt: 'Location search' },
    { src: '/assets/appImage/6082429313778567236.jpg', alt: 'Map view' },
    { src: '/assets/appImage/6082429313778567235.jpg', alt: 'Settings panel' },
    { src: '/assets/appImage/6082429313778567234.jpg', alt: 'Location selection' },
    { src: '/assets/appImage/6082429313778567233.jpg', alt: 'App menu' },
    { src: '/assets/appImage/6082429313778567232.jpg', alt: 'About screen' }
  ];

  return (
    <>
      <Head>
        <title>TeleportGo - Location Simulation Tool</title>
        <meta
          name="description"
          content="TeleportGo lets developers simulate GPS locations anywhere in the world. Perfect for testing, geofencing, and location-based app development."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A]">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* App Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-3xl shadow-2xl overflow-hidden">
                  <Image
                    src="/assets/appImage/teleport_go_icon.png"
                    alt="TeleportGo App Icon"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">TeleportGo</h1>
                  <p className="text-gray-300 text-lg">Location Development Tool</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
                    <span className="text-gray-400 text-sm">(4.8) • Developer Tools</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                TeleportGo is a trusted and safe location simulation app designed for developers and testers.
                Use it to test geofencing, debug GPS features, or simulate different locations without leaving your desk.
              </p>

              {/* Download Button */}
              <div className="space-y-4">
                <p className="text-green-400 font-semibold">✅ 100% Safe & Verified Download</p>
                <a
                  href="https://github.com/piyushh-ai/teleportGo/releases/download/v1.0/teleportgo-v1.0.apk"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="text-2xl">📱</span>
                  Download APK
                  <span className="text-sm bg-white/20 px-2 py-1 rounded-full">v1.0</span>
                </a>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Free Download
                  </span>
                  <span>•</span>
                  <span>Android 6.0+</span>
                  <span>•</span>
                  <span>5.2 MB</span>
                </div>
              </div>
            </div>

            {/* App Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
                <div className="bg-blue-500 rounded-2xl p-6 text-center text-white">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-xl font-semibold mb-2">Location Simulator</h3>
                  <p className="text-blue-100 text-sm">Teleport anywhere instantly</p>
                  <div className="mt-4 bg-white/10 rounded-lg p-3">
                    <div className="text-xs text-blue-200 mb-1">Current Location</div>
                    <div className="text-sm font-mono">40.7128° N, 74.0060° W</div>
                    <div className="text-xs text-blue-200">New York, USA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">App Screenshots</h2>
              <p className="text-gray-300 text-lg">
                Explore TeleportGo&apos;s clean and intuitive interface designed for developers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gray-900/50 rounded-2xl p-4 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105">
                    <div className="aspect-[9/16] relative overflow-hidden rounded-xl">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-gray-400 text-sm mt-3 text-center">{screenshot.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-gray-300 text-lg">
                All the tools you need for accurate and secure location-based development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-br from-gray-800/30 to-purple-900/30 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">About TeleportGo</h2>
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                TeleportGo is a powerful open-source location simulation tool made for developers.
                It is completely safe, does not collect user data, and offers precise location control.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-400">Privacy Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                  <div className="text-gray-400">Data Collection</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">Free</div>
                  <div className="text-gray-400">Open Source</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Info */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                👨‍💻
              </div>
              <h3 className="text-2xl font-bold mb-2">Kaarigar Code</h3>
              <p className="text-gray-400">Developer & Content Creator</p>
            </div>

            <p className="text-gray-300 text-lg mb-8">
              Built with ❤️ for the developer community. Follow for more tools and tutorials!
            </p>

            <div className="flex justify-center gap-6">
              <a
                href="https://www.youtube.com/@KaarigarCode"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl transition-colors"
              >
                📺 YouTube
              </a>
              <a
                href="https://github.com/piyushh-ai"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl transition-colors"
              >
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
