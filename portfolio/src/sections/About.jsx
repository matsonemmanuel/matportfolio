
import {
  FaGraduationCap,
  FaBriefcase,
  FaBullseye,
} from "react-icons/fa";


function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-28 px-8 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* ========================= */}
        {/* Section Heading */}
        {/* ========================= */}

        <div className="text-center mb-20">

          <h2 className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
            About Me
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Turning Ideas Into
            <span className="text-cyan-400">
              {" "}Digital Solutions
            </span>
          </h1>

        </div>

        {/* ========================= */}
        {/* Image + Text */}
        {/* ========================= */}

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Left */}

          <div className="flex justify-center">

            <div
              className="
                w-80
                h-[430px]
                rounded-3xl
                border-2
                border-cyan-400
                flex
                items-center
                justify-center
                shadow-[0_0_50px_rgba(34,211,238,0.15)]
                hover:scale-105
                hover:shadow-[0_0_70px_rgba(34,211,238,0.30)]
                transition-all
                duration-500
              "
            >

              <p className="text-cyan-400 text-xl font-semibold text-center">
                Professional
                <br />
                About Image
              </p>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-3xl font-bold">
              Full-Stack Software Developer
            </h3>

            <div className="w-20 h-1 bg-cyan-400 rounded-full mt-5 mb-8"></div>

            <p className="text-slate-400 text-lg leading-9 max-w-xl">

              I enjoy building software that solves practical problems
              and improves people's lives. My interests span full-stack
              web development, artificial intelligence,
              cybersecurity, and modern cloud technologies.

              <br />
              <br />

              Beyond coding, I enjoy transforming innovative ideas into
              impactful products that improve education, agriculture,
              businesses, and communities through technology.

            </p>

          </div>

        </div>

        {/* ========================= */}
        {/* Cards */}
        {/* ========================= */}

        <div className="grid md:grid-cols-3 gap-8 mt-24 items-stretch">

          {/* Education */}

          <div
            className="
              bg-slate-900
              rounded-2xl
              p-8
              h-full
              border
              border-slate-800
              hover:border-cyan-400
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
              transition-all
              duration-300
            "
          >

            {/* Heading */}

            <div className="flex items-center gap-4 mb-5">


              <div className="w-14 h-14 rounded-full bg-cyan-400/10 flex items-center justify-center">

                <FaGraduationCap className="text-cyan-400 text-2xl" />

              </div>

              <h3 className="text-2xl font-bold text-white">
                Education
              </h3>

            </div>

            {/* Accent Line */}

            <div className="w-14 h-1 bg-cyan-400 rounded-full mb-6"></div>

            {/* Text */}

            <p className="text-slate-400 leading-8">

              Applied Computer Technology student with
              strong foundations in software engineering,
              networking, databases, cybersecurity,
              and artificial intelligence.

            </p>

          </div>

          {/* Experience */}

          <div
            className="
              bg-slate-900
              rounded-2xl
              p-8
              h-full
              border
              border-slate-800
              hover:border-cyan-400
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
              transition-all
              duration-300
            "
          >

            <div className="flex items-center gap-4 mb-5">

              <div className="w-14 h-14 rounded-full bg-cyan-400/10 flex items-center justify-center">

                <FaBriefcase className="text-cyan-400 text-2xl" />

              </div>

              <h3 className="text-2xl font-bold">
                Experience
              </h3>

            </div>

            <div className="w-14 h-1 bg-cyan-400 rounded-full mb-6"></div>

            <p className="text-slate-400 leading-8">

              Building web applications,
              AI-powered systems,
              cybersecurity tools,
              and digital platforms that solve
              real-world challenges.

            </p>

          </div>

          {/* Vision */}

          <div
            className="
            bg-slate-900
            rounded-2xl
            p-8
            h-full
            border
            border-slate-800
            hover:border-cyan-400
            hover:-translate-y-2
            hover:scale-[1.02]
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            transition-all
            duration-300
          "
          >

            <div className="flex items-center gap-4 mb-5">

              <div className="w-14 h-14 rounded-full bg-cyan-400/10 flex items-center justify-center">

                <FaBullseye className="text-cyan-400 text-2xl" />

              </div>

              <h3 className="text-2xl font-bold">
                Vision
              </h3>

            </div>

            <div className="w-14 h-1 bg-cyan-400 rounded-full mb-6"></div>

            <p className="text-slate-400 leading-8">

              To become a software engineer creating
              secure, intelligent and impactful
              technology that transforms communities
              across Africa and beyond.

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;