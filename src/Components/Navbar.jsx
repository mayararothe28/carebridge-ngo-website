
import "./Navbar.css";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid navbar-container">

       <Link to="/" className="navbar-logo">
  CareBridge
</Link>

      
        <div className="navbar-menu">


          <Link to="/about">About us</Link>
<Link to="/our-work">Our work</Link>

      <Link to="/campaigns">Campaigns</Link>

          <Link to="/events">Events</Link>

                <Link to="/gallery">Gallery</Link>

         <Link to="/contact">Contact</Link>

        </div>

        
        <div className="navbar-buttons">
<Link to="/donate" className="donate-btn">
  Donate Now
</Link>

          <Link to="/register" className="register-btn">
  Register
</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

