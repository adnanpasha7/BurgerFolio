import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const SocialFloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { icon: faPhone, href: "tel:+1234567890", label: "Call" },
    { icon: faEnvelope, href: "mailto:youremail@example.com", label: "Email" },
    { icon: faInstagram, href: "https://instagram.com/yourprofile", label: "Instagram" },
    { icon: faLinkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
    { icon: faXTwitter, href: "https://twitter.com/yourhandle", label: "Twitter" },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#A9070C] text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Toggle Contact Menu"
      >
        <FontAwesomeIcon icon={faPhone} />
      </button>

      {/* Floating Slide Menu */}
      <div
        className={`mt-2 flex flex-col items-end space-y-2 transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white text-[#A9070C] p-3 rounded-full shadow-md hover:scale-110 transition"
            aria-label={link.label}
          >
            <FontAwesomeIcon icon={link.icon} className="text-xl" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#A9070C] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialFloatingMenu;
