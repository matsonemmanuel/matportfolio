import { skills } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-28 px-8 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* ===================== */}
        {/* Section Heading */}
        {/* ===================== */}

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Skills
          </p>

          <h2 className="text-5xl font-black text-white mt-4">
            Technologies
            <span className="text-cyan-400">
              {" "}I Work With
            </span>
          </h2>

        </div>

        {/* ===================== */}
        {/* Skills Grid */}
        {/* ===================== */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20 items-stretch">

          {skills.map((category) => (

            <div
              key={category.title}
              className="
                bg-slate-800
                rounded-2xl
                p-8
                h-full
                border
                border-slate-700
                hover:border-cyan-400
                hover:-translate-y-2
                hover:scale-[1.01]
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition-all
                duration-300
              "
            >

              {/* Category Title */}

              <h3 className="text-2xl font-bold text-white">
                {category.title}
              </h3>

              {/* Cyan Divider */}

              <div className="w-16 h-1 bg-cyan-400 rounded-full mt-4 mb-6"></div>

              {/* Technologies */}

              <div className="space-y-5">

                {category.technologies.map((tech) => {

                  const Icon = tech.icon;

                  return (

                    <div
                      key={tech.name}
                      className="flex items-center gap-4"
                    >

                      {/* Icon Container */}

                      <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center">

                        <Icon className="text-cyan-400 text-xl" />

                      </div>

                      {/* Technology Name */}

                      <span className="text-slate-300">
                        {tech.name}
                      </span>

                    </div>

                  );

                })}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;