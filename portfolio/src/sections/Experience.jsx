import { experience } from "../data/experience";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 py-28 px-8 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Professional
            <span className="text-cyan-400"> Experience</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-6 leading-8">
            My journey in software development, leadership,
            and innovation through real-world projects and
            professional roles.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative ml-6">

          {experience.map((item) => (

            <div
              key={item.id}
              className={`relative pl-12 ${
                item.id !== experience.length ? "pb-16" : ""
              }`}
            >

              {/* Timeline Line */}

              {item.id !== experience.length && (
                <div
                  className="
                    absolute
                    left-0
                    top-12
                    w-[2px]
                    h-full
                    bg-cyan-400
                  "
                ></div>
              )}

              {/* Timeline Icon */}

              <div
                className="
                  absolute
                  -left-[25px]
                  w-12
                  h-12
                  rounded-full
                  bg-cyan-400
                  text-slate-900
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <FaBriefcase />
              </div>

              {/* Card */}

              <div
                className="
                  bg-slate-800
                  rounded-2xl
                  p-8
                  border
                  border-slate-700
                  hover:border-cyan-400
                  hover:-translate-y-2
                  hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
                  transition-all
                  duration-300
                "
              >

                <p className="text-cyan-400 font-semibold">
                  {item.period}
                </p>

                <h3 className="text-2xl font-bold text-white mt-2">
                  {item.position}
                </h3>

                <h4 className="text-slate-300 mt-2">
                  {item.organization}
                </h4>

                <ul className="mt-6 space-y-3">

                  {item.responsibilities.map((task, index) => (

                    <li
                      key={index}
                      className="text-slate-400 flex gap-3"
                    >
                      <span className="text-cyan-400">•</span>

                      <span>{task}</span>

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;