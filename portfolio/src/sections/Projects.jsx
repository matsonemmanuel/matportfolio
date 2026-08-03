import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-28 px-8 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Featured
            <span className="text-cyan-400"> Projects</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-6 leading-8">
            A selection of projects that demonstrate my passion for
            software engineering, cybersecurity, artificial intelligence,
            and solving real-world problems.
          </p>

        </div>

        {/* Projects Grid */}

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">

          {projects.map((project) => (

            <div
              key={project.id}
              className="
                group
                bg-slate-900
                rounded-2xl
                overflow-hidden
                border
                border-slate-800
                hover:border-cyan-400
                hover:-translate-y-2
                hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
                transition-all
                duration-300
                flex
                flex-col
                h-full
              "
            >

              {/* Project Image */}

              <div className="relative h-56 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/60
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    flex
                    items-center
                    justify-center
                  "
                >
                  <h3 className="text-white text-2xl font-bold text-center px-4">
                    {project.title}
                  </h3>
                </div>

              </div>

              {/* Project Content */}

              <div className="p-8 flex flex-col flex-1">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-8 mt-5">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        bg-cyan-400/10
                        text-cyan-400
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-medium
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex justify-between mt-auto pt-8 gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      text-center
                      border
                      border-cyan-400
                      text-cyan-400
                      px-5
                      py-3
                      rounded-lg
                      font-semibold
                      cursor-pointer
                      hover:bg-cyan-400
                      hover:text-slate-900
                      transition-all
                      duration-300
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      text-center
                      bg-cyan-400
                      text-slate-900
                      px-5
                      py-3
                      rounded-lg
                      font-semibold
                      cursor-pointer
                      hover:bg-cyan-300
                      transition-all
                      duration-300
                    "
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;