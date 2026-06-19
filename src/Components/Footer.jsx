import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold text-indigo-400">
              Prepify
            </h2>

            <p className="mt-4 text-slate-300 leading-relaxed">
              A Smart Way to Learn. Practice DSA, solve
              aptitude questions, and prepare for interviews
              with structured learning paths.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-indigo-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/practice"
                  className="hover:text-indigo-400 transition"
                >
                  Practice
                </Link>
              </li>

              <li>
                <Link
                  to="/aptitude"
                  className="hover:text-indigo-400 transition"
                >
                  Aptitude
                </Link>
              </li>

              <li>
                <Link
                  to="/mock-interview"
                  className="hover:text-indigo-400 transition"
                >
                  Mock Interview
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-slate-300">
              <p>adityagupta567678@gmail.com</p>
              <p>Ahmedabad, Gujarat</p>
              <p>Available 24/7</p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-400 text-sm">
            © 2026 Prepify. All Rights Reserved.
          </p>

          <p className="text-slate-400 text-sm mt-3 md:mt-0">
            Built with React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;