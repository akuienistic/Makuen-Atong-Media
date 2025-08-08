import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navItemClasses = ({ isActive }) =>
    `block rounded px-4 py-2 transition-colors md:px-2 md:py-1 ${
      isActive ? "md:bg-transparent" : ""
    }`;

  return (
    <header className="sticky top-0 z-50 bg-slate-700 text-white shadow-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">Makuen Atong Media</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center md:justify-center gap-6 md:flex">
          <NavLink to="/" className={navItemClasses} onClick={closeMenu} end>
            <span>
              <HomeIcon className="h-5 w-5 inline-block mr-1 " />
            </span>
            Home
          </NavLink>
          <NavLink to="/about" className={navItemClasses} onClick={closeMenu}>
            <span>
              <UserGroupIcon className="h-5 w-5 inline-block mr-1 " />
            </span>
            About Us
          </NavLink>
          <NavLink
            to="/what-we-do"
            className={navItemClasses}
            onClick={closeMenu}
          >
            <span>
              <BriefcaseIcon className="h-5 w-5 inline-block mr-1" />
            </span>
            What We Do
          </NavLink>
          <NavLink to="/contact" className={navItemClasses} onClick={closeMenu}>
            <span>
              <PhoneIcon className="h-5 w-5 inline-block mr-1 " />
            </span>
            Contact Us
          </NavLink>
        </div>
        <div className="text-center">
          <button
            to="/booking"
            className="hidden md:block rounded-full bg-white text-slate-900 px-4 py-2 hover:cursor-pointer hover:bg-slate-300 transition-all duration-300 ease-in-out"
          >
            Book service Now{" "}
            <span>
              <ArrowRightIcon className="h-5 w-5 inline-block" />
            </span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center rounded md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={`${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t border-white bg-slate-500 transition-all duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col justify-center items-center text-center gap-1 px-4 py-2">
          <NavLink to="/" className={navItemClasses} onClick={closeMenu} end>
            <HomeIcon className="h-5 w-5 inline-block mr-1" />
            Home
          </NavLink>
          <NavLink to="/about" className={navItemClasses} onClick={closeMenu}>
            <UserGroupIcon className="h-5 w-5 inline-block mr-1" />
            About Us
          </NavLink>
          <NavLink
            to="/what-we-do"
            className={navItemClasses}
            onClick={closeMenu}
          >
            <BriefcaseIcon className="h-5 w-5 inline-block mr-1" />
            What We Do
          </NavLink>
          <NavLink to="/contact" className={navItemClasses} onClick={closeMenu}>
            <PhoneIcon className="h-5 w-5 inline-block mr-1" />
            Contact Us
          </NavLink>
          <button
            to="/book"
            className="text-center rounded-full mb-3 w-max bg-white text-slate-900 px-4 py-2 hover:cursor-pointer hover:bg-slate-200 transition-all duration-300 ease-in-out"
          >
            Book service Now{" "}
            <span>
              <ArrowRightIcon className="h-5 w-5 inline-block" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
