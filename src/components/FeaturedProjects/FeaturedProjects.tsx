import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";

const tags = ["react", "nodejs", "typescript", "expressjs", "mongodb"];

const FeaturedProjects = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const projects = await res.json();

  //   console.log(projects.data.result);

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
          {projects.data.result.map((project: IProject) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-0" />
              </div>

              {/* Info Card that slides up */}
              <div className="absolute -bottom-3 left-0 right-0 bg-white/95 p-6 transform transition-all duration-500 translate-y-20 group-hover:translate-y-0">
                <h3 className="text-xl font-extrabold mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm hover:bg-orange-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="text-orange-600 dark:text-orange-400 hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
