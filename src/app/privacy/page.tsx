import Head from 'next/head'
import Link from 'next/link';

export default function PrivacyPolicy() {
  const lastUpdated = "January 15, 2025";

  return (
    <>
      <Head>
        <title>Privacy Policy | Kaarigar Code</title>
        <meta name="description" content="Privacy Policy for Kaarigar Code - Learn how we protect your data and privacy" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🔒 Privacy Policy
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Aapki privacy hamari priority hai - yahan jaaniye hum kaise aapka data protect karte hain
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full mt-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
            <div className="p-8 md:p-12 space-y-8">
              
              {/* Introduction */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">👋</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Introduction</h2>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-green-200/50 dark:border-green-800/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Namaste! Main Piyush (Kaarigar Code) hoon, aur main aapki privacy ko seriously leta hoon. 
                    Yeh privacy policy explain karti hai ki main kaise aapki information collect, use, aur protect karta hoon 
                    jab aap mere website, YouTube channel, aur other services use karte hain.
                  </p>
                </div>
              </section>

              {/* Information We Collect */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📊</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Information We Collect</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200/50 dark:border-blue-800/50">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                      <span className="text-blue-500">✉️</span>
                      Contact Information
                    </h3>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2 ml-6">
                      <li>• Email address (jab aap newsletter subscribe karte hain ya contact karte hain)</li>
                      <li>• Name (agar provide karte hain)</li>
                      <li>• Messages jo aap send karte hain</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200/50 dark:border-purple-800/50">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                      <span className="text-purple-500">📈</span>
                      Usage Information
                    </h3>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2 ml-6">
                      <li>• Website visit patterns (Google Analytics ke through)</li>
                      <li>• Pages viewed aur time spent</li>
                      <li>• Device information (browser, OS)</li>
                      <li>• IP address (approximate location ke liye)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🎯</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">How We Use Your Information</h2>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200/50 dark:border-orange-800/50">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-3">✅ What We Do:</h3>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                        <li>• Newsletter aur updates send karna</li>
                        <li>• Aapke questions ka response dena</li>
                        <li>• Website performance improve karna</li>
                        <li>• Better content create karna</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-3">❌ What We DON'T Do:</h3>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                        <li>• Aapka data sell nahi karte</li>
                        <li>• Spam emails nahi bhejte</li>
                        <li>• Third parties ko share nahi karte</li>
                        <li>• Personal info misuse nahi karte</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Protection */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🛡️</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Data Protection</h2>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="p-4">
                      <div className="text-3xl mb-2">🔐</div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Encryption</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">SSL/HTTPS protection</p>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl mb-2">☁️</div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Secure Storage</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Trusted cloud providers</p>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl mb-2">🔒</div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Limited Access</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Only authorized personnel</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Third Party Services */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🔗</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Third Party Services</h2>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-2xl border border-pink-200/50 dark:border-pink-800/50">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Main kuch trusted third-party services use karta hoon jo unki own privacy policies follow karte hain:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">📺</span>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">YouTube</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Video hosting aur analytics</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-500 text-lg">📊</span>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">Google Analytics</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Website traffic analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">⚖️</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Your Rights</h2>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-200/50 dark:border-indigo-800/50">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-3">📧 Email me kar sakte hain:</h3>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                        <li>• Data access request (kya data store hai)</li>
                        <li>• Data deletion request (data delete karo)</li>
                        <li>• Newsletter unsubscribe</li>
                        <li>• Privacy concerns</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-3">⚡ Instant Actions:</h3>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                        <li>• Newsletter emails mein unsubscribe link</li>
                        <li>• Browser cookies clear kar sakte hain</li>
                        <li>• Analytics opt-out kar sakte hain</li>
                        <li>• Contact form use na karein</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact for Privacy */}
              <section>
                <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-8 rounded-2xl text-white text-center">
                  <h2 className="text-2xl font-bold mb-4">Privacy Questions? 🤔</h2>
                  <p className="mb-6 opacity-90">
                    Koi bhi privacy-related question hai? Feel free to reach out!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:thepiyushsirolia@gmail.com?subject=Privacy Policy Question"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <span>📧</span>
                      Email Me
                    </a>
                    <a
                      href="https://t.me/kaarigarCode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <span>📱</span>
                      Telegram
                    </a>
                  </div>
                </div>
              </section>

              {/* Updates */}
              <section className="text-center">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-3">📅 Policy Updates</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Main occasionally yeh policy update kar sakta hoon. Major changes ke liye main newsletter ke through notify karunga. 
                    Regular visitors ko recommend karta hoon ki kabhi-kabhi yeh page check karte rahein.
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-white dark:bg-gray-700 border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>🏠</span>
                Back to Home
              </Link>
              <Link
                href="/terms"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>📋</span>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
