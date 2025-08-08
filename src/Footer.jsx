import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaShareAlt,
  FaNewspaper,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative font-outfit text-center">
      <div className="mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 text-center md:text-center">
          {/* Contact Info */}
          <div>
            <h5 className="flex items-center justify-center md:justify-center text-lg font-semibold mb-4 text-white">
              <FaNewspaper className="mr-2 text-white 500" />
              Nyin Wong Media
            </h5>
            <div className="flex items-center justify-center md:justify-center space-x-2 mb-2">
              <FaMapMarkerAlt className="text-white 400 mt-1 text-center" />
              Gumbo, Sherikat. Garang Akok Area
              <br />
              Juba, South Sudan
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="flex items-center justify-center md:justify-center text-lg font-semibold mb-4 text-white">
              <FaPhone className="mr-2 text-white 500" /> Contact Us
            </h5>
            <div className="flex items-center justify-center md:justify-center space-x-2 mb-2">
              <FaPhone className="text-white 400" />
              <a
                href="tel:+211 926 681 111"
                className="hover:text-white 300 transition"
              >
                +211 926 681 111
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-center space-x-2">
              <FaEnvelope className="text-white 400" />
              <a
                href="mailto:madolkuchlong@gmail.com.com"
                className="hover:text-white 300 transition"
              >
                madolkuchlong@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="flex items-center justify-center md:justify-center text-lg font-semibold mb-4 text-white">
              <FaShareAlt className="mr-2 text-white 500" /> Follow Us
            </h5>
            <div className="flex justify-center md:justify-center space-x-4 text-xl">
              <a
                href="https://web.facebook.com/kuchlongMk/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/211 926 681 111"
                aria-label="Whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="border-gray-700 my-8" />
        <div className="text-center text-md">
          <p>
            &copy; {new Date().getFullYear()} Makuen Atong - Nyin Wong Media —
            All rights reserved. Designed & Built by{" "}
            <a
              href="https://www.linkedin.com/in/simon-akuien-atem-710895290/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white 400 hover:underline"
            >
              {"</ Simon Akuien Atem >"}
            </a>
          </p>
          <div className="flex justify-center items-center mt-3 space-x-4 text-lg">
            <a
              href="https://wa.me/251 988 499 136"
              aria-label="Whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 transition text-center"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/61572703111798"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 transition text-center"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className="fixed bottom-10 right-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <circle cx="8" cy="8" r="8" fill="white" />
          <path
            d="M8 10.5a.5.5 0 0 1-.5-.5V5.207L5.354 7.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.207V10a.5.5 0 0 1-.5.5z"
            fill="#3b82f6"
          />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;
