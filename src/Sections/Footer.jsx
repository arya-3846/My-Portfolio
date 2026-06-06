import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="border-t-2 border-blue-500/20 mt-20 py-8 px-6 text-white font-mono">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        
        <h2 className="text-xl font-semibold">
          Arya Pandey
        </h2>

        <p className="text-gray-400 text-center max-w-md">
          Passionate Full Stack Developer focused on building modern,
          responsive, and user-friendly web applications.
        </p>

        <div className="flex items-center gap-6 text-2xl">
          <a
            href="https://github.com/arya-3846"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/arya-pandey-b82634313/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/aryape3846"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-300"
          >
            <FaXTwitter />
          </a>

          <a
            href="mailto:aryape3846@gmail.com"
            className="hover:text-blue-400 transition-all duration-300"
          >
            <MdAlternateEmail />
          </a>
        </div>

        <div className="w-full h-px bg-blue-500/20 my-2"></div>

        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Arya Pandey. All Rights Reserved.
        </p>

        <a
          href="#home"
          className="text-blue-400 hover:text-blue-300 transition-all ease-in-out duration-300"
        >
          ↑ Back to Top
        </a>
      </div>
    </footer>
  );
}

export default Footer;