export default function YouTube() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
          📺 YouTube Tutorials
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Learn with hands-on project videos!
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-8">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/vxJO1KUny34?si=CcEmUBPuNuKN4WM3"
            title="YouTube Tutorial Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <div className="text-center">
        <a 
          href="https://www.youtube.com/@KaarigarCode" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <span className="text-xl">🔔</span>
          Subscribe Now
        </a>
      </div>
    </section>
  )
}