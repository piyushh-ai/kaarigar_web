import Link from "next/link";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              👨‍💻 About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image/Avatar */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-6">
              <div className="w-64 h-64 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center mx-auto lg:mx-0 shadow-2xl">
                <span className="text-8xl">👨‍💻</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Coding</div>
              </div>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects Built</div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-emerald-500">🎯</span>
                Meri Kahani
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Namaste! Main hoon <span className="font-semibold text-emerald-600 dark:text-emerald-400">Piyush</span>, 
                coder by heart aur YouTuber by passion. <span className="font-semibold text-blue-600 dark:text-blue-400">Kaarigar Code</span> ek initiative hai 
                jahan main real-world projects, tutorials aur code explanations deta hoon — ekdum asaan 
                <span className="italic"> Hindi-English (Hinglish)</span> mein.
              </p>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-blue-500">💡</span>
                Mera Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Coding ko accessible banana hai sabke liye - especially Indian developers ke liye jo 
                <span className="font-semibold text-emerald-600 dark:text-emerald-400"> practical knowledge</span> chahte hain. 
                Complex concepts ko simple banana aur real projects ke through sikhana - yahi mera passion hai!
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Interests */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* What I Do */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-purple-500">🛠️</span>
              What I Do
            </h3>
            <div className="space-y-4">
              {[
                { icon: '🌐', title: 'Web Development', desc: 'Modern websites aur web apps' },
                { icon: '📱', title: 'Mobile Apps', desc: 'React Native se cross-platform apps' },
                { icon: '🎥', title: 'YouTube Teaching', desc: 'Step-by-step coding tutorials' },
                { icon: '💼', title: 'Freelancing', desc: 'Client projects aur consultancy' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-orange-500">⚡</span>
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'React', color: 'from-blue-400 to-blue-600' },
                { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
                { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
                { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
                { name: 'Node.js', color: 'from-green-400 to-green-600' },
                { name: 'MongoDB', color: 'from-green-500 to-green-700' }
              ].map((tech, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-r ${tech.color} text-white px-4 py-2 rounded-lg text-center font-medium text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">🎉 Fun Facts About Me</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <span className="text-3xl block mb-2">☕</span>
              <p className="font-semibold">Coffee Addict</p>
              <p className="text-sm opacity-90">Code + Coffee = Perfect combo</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <span className="text-3xl block mb-2">🌙</span>
              <p className="font-semibold">Night Owl</p>
              <p className="text-sm opacity-90">Best coding happens at night</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <span className="text-3xl block mb-2">🎮</span>
              <p className="font-semibold">Gamer</p>
              <p className="text-sm opacity-90">Gaming breaks = productivity boost</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Ready to collaborate? Let's build something amazing together! 🤝
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>📬</span>
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="bg-white dark:bg-gray-700 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>🔧</span>
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
