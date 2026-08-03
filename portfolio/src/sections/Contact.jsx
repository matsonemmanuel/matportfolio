import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import { contact } from "../data/contact";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-28 px-8 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* ========================= */}
        {/* Section Heading */}
        {/* ========================= */}

        <motion.div
          {...fadeUp(0)}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Let's
            <span className="text-cyan-400"> Connect</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto mt-6 leading-8">
            Have a project in mind or want to discuss software development,
            cybersecurity, or AI? I'd love to hear from you.
          </p>
        </motion.div>

        {/* ========================= */}
        {/* Contact Content */}
        {/* ========================= */}

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* ========================= */}
          {/* Left Side */}
          {/* ========================= */}

          <motion.div
            {...fadeUp(0.2)}
            className="space-y-8"
          >

            <div>
              <h3 className="text-3xl font-bold text-white">
                Contact Information
              </h3>

              <p className="text-slate-400 mt-4 leading-8">
                I'm always open to discussing software projects,
                AI solutions, cybersecurity, internships,
                and exciting collaboration opportunities.
              </p>
            </div>

            {/* Location */}

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
              </div>

              <div>
                <p className="text-white font-semibold">
                  Location
                </p>

                <p className="text-slate-400">
                  {contact.location}
                </p>
              </div>

            </div>

            {/* Email */}

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                <FaEnvelope className="text-cyan-400 text-xl" />
              </div>

              <div>
                <p className="text-white font-semibold">
                  Email
                </p>

                <a
                  href={`mailto:${contact.email}`}
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  {contact.email}
                </a>
              </div>

            </div>

            {/* Phone */}

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                <FaPhoneAlt className="text-cyan-400 text-xl" />
              </div>

              <div>
                <p className="text-white font-semibold">
                  Phone
                </p>

                <p className="text-slate-400">
                  {contact.phone}
                </p>
              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-5 pt-4">

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:scale-110 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* ========================= */}
          {/* Right Side */}
          {/* ========================= */}

          <motion.form
            {...fadeUp(0.4)}
            className="bg-slate-900 rounded-2xl p-10 border border-slate-800"
          >

            <h3 className="text-2xl font-bold text-white mb-8">
              Send a Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 rounded-lg p-4 text-white mb-5 outline-none border border-slate-700 focus:border-cyan-400 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 rounded-lg p-4 text-white mb-5 outline-none border border-slate-700 focus:border-cyan-400 transition"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-slate-800 rounded-lg p-4 text-white mb-5 outline-none border border-slate-700 focus:border-cyan-400 transition"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full bg-slate-800 rounded-lg p-4 text-white outline-none border border-slate-700 focus:border-cyan-400 transition resize-none"
            />

            <button
              type="submit"
              className="mt-8 w-full bg-cyan-400 text-slate-900 py-4 rounded-xl font-semibold hover:bg-cyan-300 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;