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

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

 
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
                <Link to="/blogs" className={isActive("/blogs") ? "active" : ""}>
                  Blogs
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

            <div className="navbar-actions d-none d-lg-flex align-items-center gap-3">
              <Link to="/donate" className="btn-donate">
                Donate Now
              </Link>
              <Link to="/volunteer" className="btn-register">
                Volunteer
              </Link>
              <Link to="/register" className="btn-donate px-4">
                <i className="bi bi-person-circle me-1"></i> Sign In
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

      
      <div
        className={`mobile-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      
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
            <Link to="/blogs" className={isActive("/blogs") ? "active" : ""}>
              Blogs
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
          <Link to="/donate" className="btn-donate w-100 mb-3 text-center justify-content-center">
            <i className="bi bi-heart-fill"></i> Donate Now
          </Link>
          <Link to="/volunteer" className="btn-register w-100 text-center mb-3">
            Become a Volunteer
          </Link>
          <Link to="/register" className="btn-donate w-100 text-center justify-content-center">
            <i className="bi bi-person-circle me-1"></i> Sign In
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;