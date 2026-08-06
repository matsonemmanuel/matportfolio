import Logo from "../components/common/Logo";
import { navigation } from "../constants/navigation";
import { socialLinks } from "../constants/socialLinks";

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-20 px-8">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-20">

          {/* Left */}

          <div>

            <a href="#home">
              <Logo />
            </a>

            <p className="text-slate-400 leading-9 mt-8 max-w-lg">
              Building secure, intelligent, and scalable software
              solutions that create real impact in education,
              agriculture, cybersecurity, and artificial intelligence.
            </p>

            <div className="flex gap-5 mt-10">

              {socialLinks.map((social) => {

                const Icon = social.icon;

                return (

                  <a
                    key={social.id}
                    href={social.url}
                    target={social.url.startsWith("#") ? "_self" : "_blank"}
                    rel={social.url.startsWith("#") ? undefined : "noopener noreferrer"}
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

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-3xl font-bold text-white mb-8">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-6">

              {navigation.map((item) => (

                <a
                  key={item.id}
                  href={item.href}
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  {item.title}
                </a>

              ))}

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-10 text-center">

          <p className="text-slate-500">
            © {new Date().getFullYear()} Emmanuel Matson. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;