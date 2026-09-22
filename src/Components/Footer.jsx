import { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [subError, setSubError] = useState("");
  const [subSuccess, setSubSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubError("");
    setSubSuccess(false);

    if (!email.trim()) {
      setSubError("Please enter your email address");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubError("Please enter a valid email address");
      return;
    }

    setSubSuccess(true);
    setEmail("");
    setTimeout(() => setSubSuccess(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        {/* Newsletter Bar */}
        <div className="footer-newsletter">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h3>
                <i className="bi bi-envelope-heart"></i>
                Stay Connected
              </h3>
              <p>Get updates on our work and ways to help.</p>
            </div>
            <div className="col-lg-7">
              <form className="newsletter-form" onSubmit={handleSubscribe} noValidate>
                <div className="newsletter-input-wrapper">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setSubError("");
                    }}
                  />
                  <button type="submit">Subscribe</button>
                </div>
                {subError && <p className="newsletter-error">{subError}</p>}
                {subSuccess && <p className="newsletter-success">Thank you for subscribing! 🎉</p>}
              </form>
            </div>
          </div>
        </div>

        <div className="footer-main">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="footer-brand">
                <Link to="/" className="footer-logo">
                  <i className="bi bi-heart-pulse-fill"></i>
                  <span>CareBridge</span>
                </Link>
                <p className="footer-tagline">
                  Together We Care. Together We Change.
                </p>
                <p>
                  CareBridge works to support children, families and communities
                  through education, food support, healthcare and volunteering.
                </p>
              </div>

              <div className="footer-social">
                <a href="#" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-6 mb-4">
              <h4>Our Work</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/work">Education</Link></li>
                <li><Link to="/work">Food Support</Link></li>
                <li><Link to="/work">Healthcare</Link></li>
                <li><Link to="/volunteer">Volunteer</Link></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 col-6 mb-4">
              <h4>Get Involved</h4>
              <ul>
                <li><Link to="/campaigns">Campaigns</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/volunteer">Volunteer</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <h4>Contact Us</h4>
              <div className="footer-contact">
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  Mumbai, Maharashtra, India
                </p>
                <p>
                  <i className="bi bi-envelope-fill"></i>
                  carebridge@gmail.com
                </p>
                <p>
                  <i className="bi bi-telephone-fill"></i>
                  +91 98765 43210
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="footer-bottom">
          <p>&copy; 2026 CareBridge NGO. All Rights Reserved.</p>
          <p>Together We Care. Together We Change.</p>
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <i className="bi bi-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;