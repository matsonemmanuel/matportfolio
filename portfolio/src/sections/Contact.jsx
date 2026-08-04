
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");


  const sendEmail = async (e) => {

    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {

      await emailjs.sendForm(

        import.meta.env.VITE_EMAILJS_SERVICE_ID,

        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

        form.current,

        import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      );

      setSuccess("Message sent successfully.");

      setTimeout(() => {
        setSuccess("");
      }, 3000);

      form.current.reset();

    } catch (err) {

      console.error(err);

      setError("Failed to send message. Please try again.");

      setTimeout(() => {
        setError("");
      }, 3000);

    } finally {

      setLoading(false);

    }

  };


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
            ref={form}
            onSubmit={sendEmail}
            {...fadeUp(0.4)}
            className="bg-slate-900 rounded-2xl p-10 border border-slate-800"
          >

            <h3 className="text-2xl font-bold text-white mb-8">
              Send a Message
            </h3>

            {success && (
              <div
                className="
                  mb-6
                  rounded-lg
                  border
                  border-green-500
                  bg-green-500/10
                  px-4
                  py-3
                  text-green-400
                "
              >
                {success}
              </div>
            )}

            {error && (
              <div
                className="
                  mb-6
                  rounded-lg
                  border
                  border-red-500
                  bg-red-500/10
                  px-4
                  py-3
                  text-red-400
                "
              >
                {error}
              </div>
            )}

            <input
              name="from_name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full bg-slate-800 rounded-lg p-4 text-white mb-5 outline-none border border-slate-700 focus:border-cyan-400 transition"
            />

            <input
              name="from_email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-slate-800 rounded-lg p-4 text-white mb-5 outline-none border border-slate-700 focus:border-cyan-400 transition"
            />

            <input
              name="subject"
              type="text"
              placeholder="Subject"
              required
              className="w-full bg-slate-800 rounded-lg p-4 text-white mb-5 outline-none border border-slate-700 focus:border-cyan-400 transition"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
              className="w-full bg-slate-800 rounded-lg p-4 text-white outline-none border border-slate-700 focus:border-cyan-400 transition resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="
                mt-8
                w-full
                bg-cyan-400
                text-slate-900
                py-4
                rounded-xl
                font-semibold
                hover:bg-cyan-300
                hover:scale-[1.02]
                transition-all
                duration-300
                cursor-pointer
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;