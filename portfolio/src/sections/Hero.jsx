
import { socialLinks } from "../constants/socialLinks";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 pt-28 pb-20"
    >
      <div className="max-w-7xl mx-auto px-8 h-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">

          {/* Left Side */}
          <div className="flex flex-col justify-center">

            <p className="text-cyan-400 text-lg uppercase tracking-[6px] font-semibold mb-5">
                Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mt-2">
              Emmanuel
              <br />
              Matson
            </h1>

            <h2 className="text-3xl font-semibold text-white mt-8">
                Software Developer
            </h2>

            <div className="w-24 h-1 bg-cyan-400 rounded-full mt-5"></div>

            <p className="text-cyan-400 text-lg mt-2">
                Cybersecurity Enthusiast • AI Solutions Builder
            </p>

            <p className="text-slate-400 text-lg leading-9 mt-10 max-w-xl">
                I design and develop secure, intelligent, and scalable
                software solutions that create real impact in education,
                agriculture, and cybersecurity.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-12">

              <a
                href="#projects"
                className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-xl font-semibold text-center hover:bg-cyan-300 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Explore My Work
              </a>

              <a
                href="/cv.pdf"
                download
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 hover:scale-105 transition-all duration-300"
              >
                Download CV
              </a>

            </div>

            <div className="flex items-center gap-5 mt-10">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full border border-cyan-400
                              flex items-center justify-center
                              text-cyan-400
                              hover:bg-cyan-400
                              hover:text-slate-900
                              hover:scale-110
                              transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}

            </div>

          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center min-h-[500px]">

            <div className="w-96 h-96 rounded-full border-4 border-cyan-400 flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.25)]">

                <p className="text-cyan-400 text-center font-bold text-xl leading-8">
                    Professional
                    <br />
                    Profile Photo
                </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;