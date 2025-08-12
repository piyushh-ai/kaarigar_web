"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/@KaarigarCode",
      icon: "📺",
      color: "hover:text-red-400",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/kaarigar_code",
      icon: "📷",
      color: "hover:text-pink-400",
    },
    {
      name: "Telegram",
      href: "https://t.me/kaarigarCode",
      icon: "📱",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      href: "mailto:thepiyushsirolia@gmail.com",
      icon: "📧",
      color: "hover:text-green-400",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "YouTube", href: "/youtube" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "My App", href: "/app"}
  ];

  const techStack = [
    { name: "React", icon: "⚛️", color: "text-blue-400" },
    { name: "Next.js", icon: "🔺", color: "text-gray-300" },
    { name: "Node.js", icon: "💚", color: "text-green-400" },
    { name: "Python", icon: "🐍", color: "text-yellow-400" },
    { name: "JavaScript", icon: "⚡", color: "text-yellow-300" },
    { name: "TypeScript", icon: "🔷", color: "text-blue-500" },
  ];

  return (
    <section className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Kaarigar Code ⚡
              </h2>
              <p className="text-gray-400 mt-2 text-lg">
                Code. Create. Inspire.
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Coding ka junoon, design ki kala, aur tech ka swag — sab kuch ek
              jagah! Real-world projects aur tutorials ke saath apne coding
              journey ko next level tak le jaiye.
            </p>

            {/* Tech Stack Showcase */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🛠️</span>
                Tech Stack & Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 bg-gray-700/30 rounded-lg px-3 py-2 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="text-lg group-hover:animate-bounce">
                      {tech.icon}
                    </span>
                    <span className={`text-sm font-medium ${tech.color}`}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg border border-emerald-500/20">
                <p className="text-xs text-emerald-400 font-medium">
                  💡 "Code likhna ek art hai, problem solve karna superpower!"
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-emerald-400">🔗</span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-cyan-400">🌐</span>
              Connect
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-gray-400 ${social.color} transition-all duration-300 hover:translate-x-1 group`}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} Kaarigar Code. Made with{" "}
              <span className="text-red-500 animate-pulse">❤️</span> in India
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                href="/terms"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white p-3 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </section>
  );
}