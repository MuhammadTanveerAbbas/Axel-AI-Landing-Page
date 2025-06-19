import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import PropTypes from "prop-types";
import clsx from "clsx";

// Separated for clarity and reuse
const NavLink = ({ title, onClick }) => (
  <LinkScroll
    to={title}
    offset={-100}
    spy={true}
    smooth={true}
    activeClass="nav-active"
    onClick={onClick}
    className="
    base-bold text-p4 uppercase
    transition-colors duration-500
    cursor-pointer
    hover:text-p1
    max-lg:my-4 max-lg:h5
    focus:outline-none focus:ring-2 focus:ring-p1
  "
    role="link"
    tabIndex={0}
    aria-label={`Navigate to ${title}`}
  >
    {title}
  </LinkScroll>
);

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll event to add background blur
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500",
        hasScrolled
          ? "py-2 bg-black-100 backdrop-blur-[8px]"
          : "py-10 max-lg:py-4"
      )}
      role="banner"
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        {/* Mobile Logo */}
        <a href="#hero" className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/Axel.png" width={115} height={55} alt="Axel Logo" />
        </a>

        {/* Navigation Menu */}
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0 max-lg:transition-opacity max-lg:duration-300",
            isOpen
              ? "max-lg:opacity-100 max-lg:pointer-events-auto"
              : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav
              className="max-lg:relative max-lg:z-2 max-lg:my-auto"
              role="navigation"
            >
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" onClick={handleCloseMenu} />
                  <div className="dot" />
                  <NavLink title="pricing" onClick={handleCloseMenu} />
                </li>

                <li className="nav-logo">
                  {/* Desktop Logo */}
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className="max-lg:hidden transition-transform duration-500 cursor-pointer"
                  >
                    <img
                      src="/images/Axel.png"
                      width={160}
                      height={55}
                      alt="Axel Logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" onClick={handleCloseMenu} />
                  <div className="dot" />
                  <NavLink title="download" onClick={handleCloseMenu} />
                </li>
              </ul>
            </nav>

            {/* Background graphic */}
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="background outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="background outline fill"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={handleToggleMenu}
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt={isOpen ? "Close" : "Open"}
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
