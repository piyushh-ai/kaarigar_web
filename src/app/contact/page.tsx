export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              📬 Let's Connect
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Koi sawal hai? Project discuss karni hai? Ya phir just hello bolna hai? 
            <br />
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Main hamesha available hun!</span>
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {/* Email Card */}
          <a
            href="mailto:thepiyushsirolia@gmail.com"
            className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Email Me
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Direct communication ke liye
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm break-all">
                thepiyushsirolia@gmail.com
              </p>
            </div>
          </a>

          {/* Telegram Card */}
          <a
            href="https://t.me/kaarigarCode"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Telegram
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Quick messages ke liye
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                @kaarigarCode
              </p>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/kaarigar_code?igsh=MWVteGRhdjdiZmZucw=="
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📷</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Instagram
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Behind the scenes content
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                @kaarigar_code
              </p>
            </div>
          </a>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Ready to start something amazing? 🚀
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Freelance projects, collaborations, ya sirf coding ke bare mein chat karne ke liye - 
            main hamesha excited rehta hun naye opportunities ke liye!
          </p>
          
          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:thepiyushsirolia@gmail.com?subject=Project Inquiry&body=Hi Piyush, I would like to discuss a project with you."
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>💼</span>
              Project Discussion
            </a>
            <a
              href="https://t.me/kaarigarCode"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-700 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>💬</span>
              Quick Chat
            </a>
          </div>
        </div>

        {/* Response Time */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Usually responds within 2-4 hours</span>
          </div>
        </div>
      </div>
    </section>
  )
}
