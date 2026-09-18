import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`site-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container">
          <div className="navbar-inner">
            <Link to="/" className="navbar-brand">
              <i className="bi bi-heart-pulse-fill brand-icon"></i>
              <span>CareBridge</span>
            </Link>

            <ul className="site-nav-list">
              <li>
                <Link to="/about" className={isActive("/about") ? "active" : ""}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/work" className={isActive("/work") ? "active" : ""}>
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className={isActive("/campaigns") ? "active" : ""}>
                  Campaigns
                </Link>
              </li>
              <li>
                <Link to="/events" className={isActive("/events") ? "active" : ""}>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/stories" className={isActive("/stories") ? "active" : ""}>
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/gallery" className={isActive("/gallery") ? "active" : ""}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
                  Contact
                </Link>
              </li>
            </ul>

            <div className="navbar-actions">
              <Link to="/#donate" className="btn-donate">
                Donate Now
              </Link>
              <Link to="/register" className="btn-register">
                Volunteer
              </Link>
            </div>

            <button
              className={`hamburger ${menuOpen ? "is-active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <Link
            to="/"
            className="navbar-brand"
            onClick={() => setMenuOpen(false)}
          >
            <i className="bi bi-heart-pulse-fill brand-icon"></i>
            <span>CareBridge</span>
          </Link>
          <button className="mobile-close" onClick={() => setMenuOpen(false)}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <ul className="mobile-nav">
          <li>
            <Link to="/" className={isActive("/") ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about") ? "active" : ""}>
              About
            </Link>
          </li>
          <li>
            <Link to="/work" className={isActive("/work") ? "active" : ""}>
              Our Work
            </Link>
          </li>
          <li>
            <Link to="/campaigns" className={isActive("/campaigns") ? "active" : ""}>
              Campaigns
            </Link>
          </li>
          <li>
            <Link to="/events" className={isActive("/events") ? "active" : ""}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/stories" className={isActive("/stories") ? "active" : ""}>
              Stories
            </Link>
          </li>
          <li>
            <Link to="/gallery" className={isActive("/gallery") ? "active" : ""}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="mobile-menu-actions">
          <Link to="/#donate" className="btn-donate">
            <i className="bi bi-heart-fill"></i> Donate Now
          </Link>
          <Link to="/register" className="btn-register">
            Become a Volunteer
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;