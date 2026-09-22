import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData({ ...formData, [name]: numericValue });
      if (errors[name]) setErrors({ ...errors, [name]: "" });
      return;
    }
    
    if (name === "name") {
      const textOnly = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData({ ...formData, [name]: textOnly });
      if (errors[name]) setErrors({ ...errors, [name]: "" });
      return;
    }

    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
      }, 1500);
    }
  };

  return (
    <main className="contact-page bg-light py-5">
      <div className="container mt-4">
        
        <div className="text-center mb-5 fade-in">
          <span className="section-label">Contact Us</span>
          <h1 className="fw-bold mb-3">We're Here to Help</h1>
          <p className="text-muted mx-auto" style={{maxWidth: "600px"}}>
            Have a question, want to volunteer, or need help with a donation? Reach out to us and our team will get back to you shortly.
          </p>
        </div>

        <div className="contact-wrapper bg-white shadow-lg rounded-4 overflow-hidden">
          <div className="row g-0">
            
            {/* Left Side: Contact Information & Map */}
            <div className="col-lg-5 contact-info-panel text-white p-5 d-flex flex-column">
              <h3 className="fw-bold mb-4">Get In Touch</h3>
              <p className="mb-5 opacity-75">Fill out the form and our team will get back to you within 24 hours.</p>

              <div className="contact-details flex-grow-1">
                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-geo-alt-fill fs-4 me-3 text-accent"></i>
                  <div>
                    <h5 className="fw-bold mb-1">Head Office</h5>
                    <p className="mb-0 opacity-75">CareBridge Headquarters<br/>Andheri West, Link Road<br/>Mumbai, Maharashtra 400053</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-telephone-fill fs-4 me-3 text-accent"></i>
                  <div>
                    <h5 className="fw-bold mb-1">Phone</h5>
                    <p className="mb-0 opacity-75">+91 98765 43210</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-5">
                  <i className="bi bi-envelope-fill fs-4 me-3 text-accent"></i>
                  <div>
                    <h5 className="fw-bold mb-1">Email</h5>
                    <p className="mb-0 opacity-75">info@carebridge.org</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links mt-auto pt-4 border-top border-light">
                <h6 className="fw-bold mb-3">Follow Us</h6>
                <div className="d-flex gap-3">
                  <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="col-lg-7 p-5">
              
              {isSuccess ? (
                <div className="form-success text-center h-100 d-flex flex-column justify-content-center align-items-center">
                  <div className="success-icon-large text-success mb-3">
                    <i className="bi bi-check-circle-fill" style={{fontSize: "4rem"}}></i>
                  </div>
                  <h3 className="fw-bold">Message Sent!</h3>
                  <p className="text-muted mb-4">Thank you for reaching out. We'll be in touch soon.</p>
                  <button className="btn btn-accent px-4 py-2 rounded-pill" onClick={() => setIsSuccess(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="contact-form">
                  <h3 className="fw-bold mb-4">Send us a Message</h3>
                  
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label text-muted small fw-bold">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className={`form-control contact-input ${errors.name ? "is-invalid" : ""}`}
                        placeholder="Satyam Sharma"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <div className="text-danger small mt-1">{errors.name}</div>}
                    </div>
                    
                    <div className="col-md-6">
                      <label className="form-label text-muted small fw-bold">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control contact-input ${errors.email ? "is-invalid" : ""}`}
                        placeholder="satyam@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-muted small fw-bold">Mobile Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className={`form-control contact-input ${errors.phone ? "is-invalid" : ""}`}
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength="10"
                      />
                      {errors.phone && <div className="text-danger small mt-1">{errors.phone}</div>}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-muted small fw-bold">Subject</label>
                      <select
                        name="subject"
                        className="form-control contact-input"
                        style={{ appearance: "auto" }}
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Donation Support">Donation Support</option>
                        <option value="Volunteer with Us">Volunteer with Us</option>
                        <option value="Partnership / Sponsorship">Partnership / Sponsorship</option>
                        <option value="Media / Press">Media / Press</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label text-muted small fw-bold">Message (Optional)</label>
                      <textarea
                        name="message"
                        className="form-control contact-input"
                        rows="5"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="col-12 mt-4">
                      <button type="submit" className="btn btn-accent w-100 py-3 fw-bold fs-5 shadow-sm" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
        

      </div>
    </main>
  );
}

export default Contact;
