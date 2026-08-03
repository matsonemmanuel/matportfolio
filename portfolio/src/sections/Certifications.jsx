

import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { certificates } from "../data/certificates";
import { fadeUp } from "../utils/animations";

function Certifications() {
  return (
    <section
      id="certificates"
      className="bg-slate-900 py-28 px-8 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}

        <motion.div
          {...fadeUp(0)}
          className="text-center"
        >

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Certifications
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Continuous
            <span className="text-cyan-400"> Learning</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto mt-6 leading-8">
            I continuously improve my knowledge through internationally
            recognized certifications in software development,
            cybersecurity, artificial intelligence, and professional skills.
          </p>

        </motion.div>

        {/* Certificate Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.id}
              {...fadeUp(index * 0.15)}
              className="
                bg-slate-800
                rounded-2xl
                p-8
                border
                border-slate-700
                hover:border-cyan-400
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition-all
                duration-300
                h-full
              "
            >

              {/* Icon */}

              <div className="w-16 h-16 rounded-full bg-cyan-400/10 flex items-center justify-center">

                <FaAward className="text-cyan-400 text-2xl" />

              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-white mt-8 leading-8">
                {certificate.title}
              </h3>

              {/* Issuer */}

              <p className="text-cyan-400 mt-4 font-semibold">
                {certificate.issuer}
              </p>

              {/* Year */}

              <p className="text-slate-400 mt-2">
                {certificate.year}
              </p>

              {/* Button */}

              <a
                href={certificate.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-cyan-400
                  hover:text-cyan-300
                  transition
                "
              >
                View Certificate
                <FaExternalLinkAlt size={14} />
              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;