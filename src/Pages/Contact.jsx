import { useState } from "react";
import "./Contact.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Contact() {
  const sectionRef = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[-()\s]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

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
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      }, 1500);
    }
  };

  return (
    <main className="contact-page" ref={sectionRef}>
      {/* Hero Section */}
      <section className="contact-hero fade-in">
        <div className="container text-center">
          <span className="section-label">Get In Touch</span>
          <h1>We'd Love to Hear From You</h1>
          <p>
            Whether you have a question about our programs, want to partner with us, or simply
            want to learn more about our impact, our team is here to help.
          </p>
        </div>
      </section>

     
      <section className="contact-cards-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="contact-info-card fade-in stagger-1">
                <div className="contact-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <h3>Visit Us</h3>
                <p>
                  CareBridge Headquarters<br />
                  Andheri West, Link Road<br />
                  Mumbai, Maharashtra 400053<br />
                  India
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="contact-info-card fade-in stagger-2">
                <div className="contact-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <h3>Call Us</h3>
                <p>
                  <strong>General Inquiries:</strong><br />
                  +91 98765 43210<br /><br />
                  <strong>Donation Support:</strong><br />
                  +91 98765 43211
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="contact-info-card fade-in stagger-3">
                <div className="contact-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <h3>Email Us</h3>
                <p>
                  <strong>Information:</strong><br />
                  info@carebridge.org<br /><br />
                  <strong>Volunteer:</strong><br />
                  volunteer@carebridge.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-wrapper fade-in">
            <div className="contact-form-box">
              {isSuccess ? (
                <div className="form-success text-center">
                  <div className="success-icon-large">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. A member of our team will get back to you within 24 hours.</p>
                  <button className="btn-contact-submit" onClick={() => setIsSuccess(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2>Send us a Message</h2>
                  <p className="form-subtitle">Fill out the form below and we'll get back to you as soon as possible.</p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label className="contact-label">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          className={`contact-input ${errors.name ? "is-invalid" : ""}`}
                          placeholder="Satyam Sharma"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <div className="text-danger small mt-1">{errors.name}</div>}
                      </div>
                      <div className="col-md-6 mb-4">
                        <label className="contact-label">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          className={`contact-input ${errors.email ? "is-invalid" : ""}`}
                          placeholder="satyam@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label className="contact-label">Mobile Number</label>
                        <input
                          type="tel"
                          name="phone"
                          className={`contact-input ${errors.phone ? "is-invalid" : ""}`}
                          placeholder="9876543210"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && <div className="text-danger small mt-1">{errors.phone}</div>}
                      </div>
                      <div className="col-md-6 mb-4">
                        <label className="contact-label">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          className={`contact-input ${errors.subject ? "is-invalid" : ""}`}
                          placeholder="How can we help you?"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                        {errors.subject && <div className="text-danger small mt-1">{errors.subject}</div>}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="contact-label">Message</label>
                      <textarea
                        name="message"
                        className={`contact-input ${errors.message ? "is-invalid" : ""}`}
                        rows="5"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && <div className="text-danger small mt-1">{errors.message}</div>}
                    </div>

                    <button type="submit" className="btn-contact-submit" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <i className="bi bi-send"></i>}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
