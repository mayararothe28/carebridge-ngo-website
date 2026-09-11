
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid navbar-container">

        
        <a href="#home" className="navbar-logo">
          CareBridge
        </a>

      
        <div className="navbar-menu">


          <a href="#about">About Us</a>

          <a href="#work">Our Work</a>

          <a href="#campaigns">Campaigns</a>

          <a href="#events">Events</a>

          <a href="#gallery">Gallery</a>

          <a href="#contact">Contact</a>

        </div>

        
        <div className="navbar-buttons">

          <a href="#donate" className="donate-btn">
            Donate Now
          </a>

          <a href="#register" className="register-btn">
            Register
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;

