import { GitHubIcon, LinkedInIcon } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="p-4 flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-around bg-gray-500/10">
      <h3>
        Created and designed by <strong>Juan C. Toloy</strong>
      </h3>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/tolez"
          target="_blank"
          className="hover:fill-[#c9510c] hover:scale-150 transition-all duration-300"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/juan-cruz-toloy-85610223b/"
          target="_blank"
          className="hover:fill-[#0a66c2] hover:scale-150 transition-all duration-300"
        >
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
