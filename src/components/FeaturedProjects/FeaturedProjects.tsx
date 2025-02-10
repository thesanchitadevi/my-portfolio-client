const FeaturedProjects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack online shopping platform with real-time inventory management.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      image: "/images/project1.jpg",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with Kanban board and deadlines.",
      tags: ["Next.js", "Firebase", "Tailwind"],
      link: "#",
      image: "/images/project2.jpg",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for tracking social media engagement metrics.",
      tags: ["React", "Chart.js", "AWS"],
      link: "#",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="space-y-4">
          <h6 className="text-orange-500 font-extrabold uppercase">
            Featured Projects
          </h6>
          <h2 className="text-gray-800 text-2xl font-extrabold">
            Each project is a unique piece of development
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-0" />
              </div>

              {/* Info Card that slides up */}
              <div className="absolute -bottom-3 left-0 right-0 bg-white/95 p-6 transform transition-all duration-500 translate-y-20 group-hover:translate-y-0">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  View Project
                  <svg
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
