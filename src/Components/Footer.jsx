import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="container">
        <div className="row">

         
          <div className="col-md-4 mb-4">
            <h3>CareBridge NGO</h3>

            <p className="footer-tagline">
              Together We Care. Together We Change.
            </p>

            <p>
              CareBridge works to support children, families and
              communities through education, food support, healthcare
              and volunteering.
            </p>
          </div>


        
          <div className="col-md-2 col-sm-6 mb-4">
            <h4>Our Work</h4>

            <a href="#about">About Us</a>
            <a href="#work">Child Education</a>
            <a href="#work">Food Support</a>
            <a href="#work">Healthcare</a>
            <a href="#work">Volunteer</a>
          </div>


         
          <div className="col-md-2 col-sm-6 mb-4">
            <h4>Get Involved</h4>

            <a href="#campaigns">Campaigns</a>
            <a href="#events">Events</a>
            <a href="#volunteer">Volunteer</a>
            <a href="#donate">Donate</a>
          </div>


      
<div className="col-md-4 mb-4">
  <h4>Contact Us</h4>

  <p>
    <i className="bi bi-geo-alt-fill"></i>
    Maharashtra, India
  </p>

  <p>
    <i className="bi bi-envelope-fill"></i>
    carebridge@gmail.com
  </p>

  <p>
    <i className="bi bi-telephone-fill"></i>
    +91 XXXXX XXXXX
  </p>

  <div className="footer-social">
    <a href="#">
      <i className="bi bi-instagram"></i>
    </a>

    <a href="#">
      <i className="bi bi-facebook"></i>
    </a>

    <a href="#">
      <i className="bi bi-linkedin"></i>
    </a>
  </div>
</div>

        </div>


        
        <div className="footer-bottom">

          <p>
            © 2026 CareBridge NGO. All Rights Reserved.
          </p>

          <p>
            Together We Care. Together We Change.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;