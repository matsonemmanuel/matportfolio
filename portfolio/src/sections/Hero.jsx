import { socialLinks } from "../constants/socialLinks";
import { motion } from "framer-motion";
import { fadeUp, zoomIn } from "../utils/animations";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 pt-28 pb-20"
    >
      <div className="max-w-7xl mx-auto px-8 h-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">

          {/* ================= LEFT SIDE ================= */}

          <div className="flex flex-col justify-center">

            {/* Greeting */}

            <motion.p
              {...fadeUp(0)}
              className="text-cyan-400 text-lg uppercase tracking-[6px] font-semibold mb-5"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}

            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mt-2"
            >
              Emmanuel
              <br />
              Matson
            </motion.h1>

            {/* Job Title */}

            <motion.h2
              {...fadeUp(0.4)}
              className="text-3xl font-semibold text-white mt-8"
            >
              Software Developer
            </motion.h2>

            {/* Divider */}

            <motion.div
              {...fadeUp(0.5)}
              className="w-24 h-1 bg-cyan-400 rounded-full mt-5"
            />

            {/* Short Title */}

            <motion.p
              {...fadeUp(0.6)}
              className="text-cyan-400 text-lg mt-2"
            >
              Cybersecurity Enthusiast • AI Solutions Builder
            </motion.p>

            {/* Description */}

            <motion.p
              {...fadeUp(0.8)}
              className="text-slate-400 text-lg leading-9 mt-10 max-w-xl"
            >
              I design and develop secure, intelligent, and scalable
              software solutions that create real impact in education,
              agriculture, and cybersecurity.
            </motion.p>

            {/* Buttons */}

            <motion.div
              {...fadeUp(1)}
              className="flex flex-col sm:flex-row gap-5 mt-12"
            >
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
            </motion.div>

            {/* Social Icons */}

            <motion.div
              {...fadeUp(1.2)}
              className="flex items-center gap-5 mt-10"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target={social.url.startsWith("#") ? "_self" : "_blank"}
                    rel={social.url.startsWith("#") ? undefined : "noopener noreferrer"}
                    aria-label={social.label}
                    className="
                      w-12
                      h-12
                      rounded-full
                      border
                      border-cyan-400
                      flex
                      items-center
                      justify-center
                      text-cyan-400
                      hover:bg-cyan-400
                      hover:text-slate-900
                      hover:scale-110
                      transition-all
                      duration-300
                    "
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </motion.div>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            {...zoomIn(1.3)}
            className="relative flex items-center justify-center min-h-[500px] overflow-hidden"
          >
            <div
              className="
                relative
                w-72
                h-72
                sm:w-80
                sm:h-80
                lg:w-96
                lg:h-96
                rounded-full
                border-4
                border-cyan-400
                flex
                items-center
                justify-center
                shadow-[0_0_60px_rgba(34,211,238,0.25)]
                overflow-hidden
              "
            >

              <p className="text-cyan-400 text-center font-bold text-xl leading-8">
                <img
                    src="/profile3.png"
                    alt="Emmanuel Matson"
                    className="
                        w-full
                        h-full
                        object-cover
                        rounded-full
                        relative
                        z-20
                    "
                />
              </p>
              <div
                  className="
                      absolute
                      inset-0
                      overflow-hidden
                      flex
                      items-center
                      justify-center
                      pointer-events-none
                  "
              >

                  <span
                      className="
                          text-[140px]
                          sm:text-[180px]
                          lg:text-[260px]
                          font-black
                          text-cyan-400/10
                      "
                  >
                      &lt;
                  </span>

                  <span
                      className="
                          text-[140px]
                          sm:text-[180px]
                          lg:text-[260px]
                          font-black
                          text-cyan-400/5
                      "
                  >
                      /&gt;
                  </span>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;