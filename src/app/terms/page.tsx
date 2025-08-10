import Head from 'next/head'
import Link from 'next/link';

export default function Terms() {
  const lastUpdated = "January 15, 2025";

  return (
    <>
      <Head>
        <title>Terms of Service | Kaarigar Code</title>
        <meta name="description" content="Terms and Conditions for Kaarigar Code - Learn about our service terms and user guidelines" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                📋 Terms of Service
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Kaarigar Code use karne ke rules aur guidelines - simple aur clear!
            </p>
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full mt-4">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
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
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Welcome to Kaarigar Code!</h2>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-green-200/50 dark:border-green-800/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Namaste! Yeh terms aur conditions explain karti hain ki aap mere website, YouTube channel, 
                    tutorials, aur downloadable resources ko kaise use kar sakte hain. Simple language mein - 
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400"> respect karo, learn karo, aur grow karo!</span>
                  </p>
                </div>
              </section>

              {/* Acceptance of Terms */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">✅</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Agreement</h2>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200/50 dark:border-blue-800/50">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                        <span className="text-green-500">🤝</span>
                        Agar aap agree karte hain:
                      </h3>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                        <li>• Website aur content use kar sakte hain</li>
                        <li>• Code download aur modify kar sakte hain</li>
                        <li>• Tutorial follow kar sakte hain</li>
                        <li>• Community mein participate kar sakte hain</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                        <span className="text-red-500">❌</span>
                        Agar disagree karte hain:
                      </h3>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                        <li>• Please website use na karein</li>
                        <li>• Content download na karein</li>
                        <li>• Services access na karein</li>
                        <li>• Koi legal obligation nahi hai</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Use of Services */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🚀</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">How to Use Our Services</h2>
                </div>
                <div className="space-y-4">
                  
                  {/* Allowed Uses */}
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200/50 dark:border-green-800/50">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      Allowed Uses (Jo kar sakte hain)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                        <li>• 📚 Educational purposes ke liye use karein</li>
                        <li>• 💻 Code modify aur customize karein</li>
                        <li>• 🎯 Personal projects mein use karein</li>
                        <li>• 📝 Learn aur practice karein</li>
                      </ul>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                        <li>• 🤝 Credit dein jab possible ho</li>
                        <li>• 🔄 Share karein (with attribution)</li>
                        <li>• 💡 Build upon the code</li>
                        <li>• 🏢 Commercial projects mein bhi use kar sakte hain</li>
                      </ul>
                    </div>
                  </div>

                  {/* Prohibited Uses */}
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-200/50 dark:border-red-800/50">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      Prohibited Uses (Jo nahi kar sakte)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                        <li>• 🚫 Content ko exactly copy karke sell karna</li>
                        <li>• 🎭 Mera content claim karna as your own</li>
                        <li>• 💣 Malicious activities ke liye use karna</li>
                        <li>• 📧 Spam ya harassment ke liye use karna</li>
                      </ul>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                        <li>• ⚖️ Illegal activities ke liye use karna</li>
                        <li>• 🔓 Reverse engineer with bad intent</li>
                        <li>• 🤖 Automated scraping without permission</li>
                        <li>• 💰 Re-distribute as paid course material</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Content and Code */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">💻</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Code & Content License</h2>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200/50 dark:border-orange-800/50">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📜</span>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Open Source Spirit</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Most of my code is shared in the spirit of open source. Aap use kar sakte hain, 
                          modify kar sakte hain, aur learn kar sakte hain. Bas ek simple rule - 
                          <span className="font-semibold"> don't claim it as your original work!</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎥</span>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Video Content</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          YouTube videos ka copyright mere paas hai, lekin aap personal learning ke liye 
                          freely watch kar sakte hain. Educational purpose ke liye clips use kar sakte hain 
                          (with proper credit).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* User Responsibilities */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">⚖️</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Your Responsibilities</h2>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-2xl border border-teal-200/50 dark:border-teal-800/50">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl mb-3">🤝</div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Be Respectful</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Comments aur messages mein respectful language use karein
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-3">📚</div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Learn & Grow</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Content ko learning ke liye use karein, not for harming others
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-3">🔒</div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Keep it Legal</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Sirf legal activities ke liye use karein, illegal kuch nahi
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Disclaimers */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">⚠️</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Important Disclaimers</h2>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-2xl border border-yellow-200/50 dark:border-yellow-800/50">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">🔧</span>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">Code "As Is"</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Main apna best effort deta hoon, lekin code bugs ya issues ho sakte hain. 
                          Always test karo before production use!
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-xl">📈</span>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">No Guarantees</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Main guarantee nahi de sakta ki tutorials follow karke aap job ya success mil jayegi. 
                          It depends on your effort aur dedication!
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-xl">🔄</span>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">Technology Changes</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Tech field fast-moving hai. Old tutorials outdated ho sakte hain. 
                          Main try karta hoon update karna, lekin always check latest docs!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Changes to Terms */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🔄</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Changes to These Terms</h2>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-200/50 dark:border-indigo-800/50">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Main occasionally yeh terms update kar sakta hoon jab:
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm ml-6">
                    <li>• New services add karta hoon</li>
                    <li>• Legal requirements change hoti hain</li>
                    <li>• Better clarity ke liye improvements</li>
                    <li>• Community feedback ke basis par</li>
                  </ul>
                  <div className="mt-4 p-4 bg-indigo-100 dark:bg-indigo-800/30 rounded-xl">
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      <span className="font-semibold">📢 Notification:</span> Major changes ke liye main newsletter aur 
                      social media par announce karunga. Regular visitors ko suggest karta hoon ki yeh page 
                      occasionally check karte rahein.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-2xl text-white text-center">
                  <h2 className="text-2xl font-bold mb-4">Questions about Terms? 🤔</h2>
                  <p className="mb-6 opacity-90">
                    Koi confusion hai? Feel free to ask! Main always help karne ke liye ready hoon.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:thepiyushsirolia@gmail.com?subject=Terms of Service Question"
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

              {/* Final Note */}
              <section className="text-center">
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 p-6 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-3 text-xl">🎯 Bottom Line</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Main chahta hoon ki aap mere content se maximum learn karein aur grow karein. 
                    Yeh terms sirf ensure karte hain ki sab kuch fair aur respectful way mein ho. 
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      Happy coding! 🚀
                    </span>
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
                className="bg-white dark:bg-gray-700 border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>🏠</span>
                Back to Home
              </Link>
              <Link
                href="/privacy"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>🔒</span>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
