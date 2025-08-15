import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaMicrophone,
  FaCamera,
  FaVideo,
  FaUsers,
  FaAward,
  FaGlobe,
  FaHeart,
  FaStar,
} from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    href: "https://web.facebook.com/kuchlongMk/",
    label: "Facebook",
    icon: <FaFacebookF className="w-7 h-7" />,
  },
  {
    href: "https://youtube.com/channel/UCrCEXwPyBiP1UDtsPSAz8Cw",
    label: "LinkedIn",
    icon: <FaYoutube className="w-7 h-7" />,
  },
  {
    href: "https://wa.me/211926681111",
    label: "WhatsApp",
    icon: <FaWhatsapp className="w-7 h-7" />,
  },
];

const services = [
  {
    icon: <FaMicrophone className="w-12 h-12" />,
    title: "Podcasting",
    description: "Professional audio content creation and distribution",
    features: [
      "High-quality recording",
      "Professional editing",
      "Multi-platform distribution",
    ],
  },
  {
    icon: <FaCamera className="w-12 h-12" />,
    title: "Photography",
    description: "Capturing moments that tell compelling stories",
    features: ["Event coverage", "Portrait sessions", "Commercial photography"],
  },
  {
    icon: <FaVideo className="w-12 h-12" />,
    title: "Videography",
    description: "Cinematic storytelling and video production",
    features: ["Documentary films", "Event videos", "Corporate content"],
  },
];

const testimonials = [
  {
    name: "Mr. X",
    role: "Community Leader",
    content:
      "Nyin Wong Media has been instrumental in helping us share our community stories with the world.",
    rating: 5,
  },
  {
    name: "Mr. X",
    role: "Sports Organizer",
    content:
      "Their coverage of our sports events has brought our community together like never before.",
    rating: 5,
  },
  {
    name: "Mr. X",
    role: "Cultural Event Coordinator",
    content:
      "Professional, creative, and always on time. They truly understand our cultural heritage.",
    rating: 5,
  },
];

const stats = [
  { number: "500+", label: "Events Covered" },
  { number: "60K+", label: "Total audience" },
  { number: "1000+", label: "Content Pieces" },
  { number: "5+", label: "Years Experience" },
];

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Original Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-2 md:px-0 animate-fadein">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start w-full max-w-5xl shadow-2xl rounded-3xl bg-white/80 backdrop-blur-lg p-6 md:p-12 border border-blue-100">
          {/* Image Section */}
          <div
            className="flex-1 px-3 mt-8 md:mt-0 flex justify-center items-center md:mr-12"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src="videography.svg"
              alt="Doctor and a patient from Gudele Hospital, Juba, South Sudan"
              className="w-full max-w-md h-auto rounded-2xl shadow-lg animate-float"
              style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
            />
          </div>
          {/* Text Section */}
          <div
            className="flex-1 md:pr-8 flex flex-col justify-center items-center text-center animate-slidein"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight drop-shadow-lg">
              Clean Lenses.{" "}
              <span className="text-blue-600">Accurate Information</span>
            </h1>
            <p className="text-lg md:text-[1.2rem] text-gray-500 mb-6 font-medium leading-relaxed">
              We have hold a proven track record of bringing accuarate
              information to our audience, ranging from community leaderships,
              culture, sports among others. <br />
              <span className="text-blue-500 font-semibold">
                Follow us on our social media handles.
              </span>
            </p>
            <div className="py-4 w-full flex flex-col items-center gap-4">
              <Link
                to="/what-we-do"
                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 text-white border-none outline-none py-3 px-8 rounded-full shadow-lg text-lg tracking-wide hover:scale-105 mx-auto"
              >
                Explore Our Services
              </Link>
              <div className="flex gap-4 mt-2 w-full justify-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-blue-500 hover:text-blue-700 hover:bg-slate-300 transition-colors duration-200 bg-white/70 rounded-full p-2 shadow-md hover:scale-110"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              What <span className="text-blue-600">We Do</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive media solutions to help you tell your
              story effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="text-blue-600 mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FaStar className="w-4 h-4 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center text-white"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                About <span className="text-blue-600">Nyin Wong</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a passionate media company dedicated to amplifying voices
                and stories that matter. Our commitment to quality and
                authenticity has made us a trusted partner in community
                storytelling.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From local events to cultural celebrations, we capture the
                essence of community life and share it with the world through
                professional media production.
              </p>
              <div className="flex items-center space-x-4">
                <FaUsers className="w-8 h-8 text-blue-600" />
                <span className="text-gray-700 font-medium">
                  Community-Focused
                </span>
              </div>
            </div>
            <div
              className="bg-white p-8 rounded-2xl shadow-lg"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="space-y-6">
                <div
                  className="flex items-center space-x-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <FaAward className="w-10 h-10 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900">
                      Excellence Award
                    </h3>
                    <p className="text-gray-600">
                      Recognized for outstanding media coverage
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center space-x-4"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <FaGlobe className="w-10 h-10 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900">
                      Global Reach
                    </h3>
                    <p className="text-gray-600">Content viewed worldwide</p>
                  </div>
                </div>
                <div
                  className="flex items-center space-x-4"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <FaHeart className="w-10 h-10 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900">
                      Community Love
                    </h3>
                    <p className="text-gray-600">
                      Trusted by local communities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              What Our <span className="text-blue-600">Audiences Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the communities we've
              served
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-blue-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            data-aos="fade-up"
          >
            Ready to Tell Your Story?
          </h2>
          <p
            className="text-xl text-blue-100 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Let us help you create compelling content that resonates with your
            audience
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 transition-colors duration-300 px-6 py-3 rounded-full text-lg"
            >
              Get Started Today
            </Link>
            <Link
              to="/about"
              className="border-1 border-white text-white hover:bg-white hover:text-blue-600 transition-colors duration-300 px-6 py-3 rounded-full text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein { animation: fadein 1.2s cubic-bezier(.4,0,.2,1) both; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        @keyframes slidein {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slidein { animation: slidein 1.2s cubic-bezier(.4,0,.2,1) both; }
        .rounded-4xl { border-radius: 2rem; }
      `}</style>
    </div>
  );
}

export default Home;
