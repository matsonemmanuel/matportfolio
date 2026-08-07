
import {
  FaGraduationCap,
  FaBriefcase,
  FaBullseye,
} from "react-icons/fa";

import { motion } from "framer-motion";

import {
  fadeUp,
  fadeRight,
  zoomIn,
  staggerContainer,
  staggerItem,
  expandWidth,
} from "../utils/animations";

function About() {
  return (
    <section
      id="about"
      className="
        bg-slate-950
        text-white
        py-20
        sm:py-24
        lg:py-28
        px-4
        sm:px-6
        lg:px-8
        scroll-mt-24
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* ========================= */}
        {/* Section Heading */}
        {/* ========================= */}

        <motion.div
          {...fadeUp(0)}
          className="text-center mb-16 sm:mb-20"
        >

          <h2 className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
            About Me
          </h2>

          <h1 className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            leading-tight
            mt-4
          ">
            Turning Ideas Into
            <span className="text-cyan-400">
              {" "}Digital Solutions
            </span>
          </h1>

        </motion.div>

        {/* ========================= */}
        {/* Image + Text */}
        {/* ========================= */}

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Left */}

          <motion.div
            {...zoomIn(0.2)}
            className="flex justify-center"
          >

            <div
              className="
                w-full
                max-w-[320px]
                sm:max-w-[360px]
                lg:max-w-[400px]
                h-[420px]
                sm:h-[460px]
                rounded-3xl
                border-2
                border-cyan-400
                flex
                items-center
                justify-center
                shadow-[0_0_50px_rgba(34,211,238,0.15)]
                hover:scale-[1.03]
                hover:border-cyan-300
                hover:shadow-[0_0_90px_rgba(34,211,238,0.40)]
                transition-all
                duration-500
                ease-out
              "
            >

              <img
                src="/profile2.jpg"
                alt="About Emmanuel"
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-3xl
                "
              />

            </div>

          </motion.div>

                    {/* Right */}

          <motion.div
            {...fadeRight(0.3)}
            className="text-center lg:text-left"
          >

            <h3
              className="
                text-2xl
                sm:text-3xl
                font-bold
                leading-tight
              "
            >
              Full-Stack Software Developer
            </h3>

            <motion.div
              {...expandWidth(0.5)}
              className="
                h-1
                bg-cyan-400
                rounded-full
                mt-5
                mb-8
                mx-auto
                lg:mx-0
              "
            />

            <p
              className="
                text-slate-400
                text-base
                sm:text-lg
                leading-8
                sm:leading-9
                max-w-xl
                mx-auto
                lg:mx-0
              "
            >
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

          </motion.div>

        </div>

        {/* ========================= */}
        {/* Cards */}
        {/* ========================= */}

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="
            grid
            md:grid-cols-3
            gap-6
            lg:gap-8
            mt-16
            sm:mt-20
            lg:mt-24
            items-stretch
          "
        >

                    {/* Education */}

          <motion.div
            variants={staggerItem}
            whileHover={{
              y: -10,
              scale: 1.025,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="
              bg-slate-900
              rounded-2xl
              p-6
              sm:p-8
              h-full
              border
              border-slate-800
              hover:border-cyan-400
              hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
              transition-all
              duration-500
              ease-out
            "
          >

            <div className="flex items-center gap-4 mb-5">

              <motion.div
                whileHover={{
                  scale: 1.12,
                  rotate: 6,
                }}
                transition={{ duration: 0.25 }}
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-cyan-400/10
                  flex
                  items-center
                  justify-center
                "
              >

                <motion.div
                  whileHover={{
                    scale: 1.15,
                  }}
                >
                  <FaGraduationCap className="text-cyan-400 text-2xl" />
                </motion.div>

              </motion.div>

              <h3 className="text-2xl font-bold text-white">
                Education
              </h3>

            </div>

            <div className="w-14 h-1 bg-cyan-400 rounded-full mb-6"></div>

            <p className="text-slate-400 leading-8">

              Applied Computer Technology student with
              strong foundations in software engineering,
              networking, databases, cybersecurity,
              and artificial intelligence.

            </p>

          </motion.div>

          {/* Experience */}

          <motion.div
            variants={staggerItem}
            whileHover={{
              y: -10,
              scale: 1.025,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="
              bg-slate-900
              rounded-2xl
              p-6
              sm:p-8
              h-full
              border
              border-slate-800
              hover:border-cyan-400
              hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
              transition-all
              duration-500
              ease-out
            "
          >

            <div className="flex items-center gap-4 mb-5">

              <motion.div
                whileHover={{
                  scale: 1.12,
                  rotate: 6,
                }}
                transition={{ duration: 0.25 }}
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-cyan-400/10
                  flex
                  items-center
                  justify-center
                "
              >

                <motion.div
                  whileHover={{
                    scale: 1.15,
                  }}
                >
                  <FaBriefcase className="text-cyan-400 text-2xl" />
                </motion.div>

              </motion.div>

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

          </motion.div>

                    {/* Vision */}

          <motion.div
            variants={staggerItem}
            whileHover={{
              y: -10,
              scale: 1.025,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="
              bg-slate-900
              rounded-2xl
              p-6
              sm:p-8
              h-full
              border
              border-slate-800
              hover:border-cyan-400
              hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
              transition-all
              duration-500
              ease-out
            "
          >

            <div className="flex items-center gap-4 mb-5">

              <motion.div
                whileHover={{
                  scale: 1.12,
                  rotate: 6,
                }}
                transition={{ duration: 0.25 }}
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-cyan-400/10
                  flex
                  items-center
                  justify-center
                "
              >

                <motion.div
                  whileHover={{
                    scale: 1.15,
                  }}
                >
                  <FaBullseye className="text-cyan-400 text-2xl" />
                </motion.div>

              </motion.div>

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

          </motion.div>

        </motion.div>

      </div>

    </section>

  );
}

export default About;