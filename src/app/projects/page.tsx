import projects from "../project.json";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🚀 My Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
          Explore my collection of innovative projects
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 flex flex-col"
          >
            {/* Image */}
            <div className="relative aspect-[16/9] sm:aspect-[4/3] overflow-hidden">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>

            {/* Content */}
            <div className="p-4 sm:p-5 flex flex-col flex-1">
              <h2 className="text-base sm:text-lg font-bold text-emerald-500 mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-auto flex gap-2">
                <a
                  href={project.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-2 rounded-xl text-center font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs sm:text-sm"
                >
                  ▶ Watch
                </a>
                <a
                  href={project.code}
                  download
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-3 py-2 rounded-xl text-center font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs sm:text-sm"
                >
                  ⬇ Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
