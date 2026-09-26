import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Volunteer.css";

function Volunteer() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: location.state?.interest || "",
    message: "",
  });

  useEffect(() => {
    if (location.state?.interest) {
      setFormData((prev) => ({ ...prev, interest: location.state.interest }));
    }
  }, [location.state]);

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

    if (name === "fullName") {
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
    if (!formData.fullName.trim()) newErrors.fullName = "Full name required";
    if (!formData.email.trim()) {
      newErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Must be 10 digits";
    }
    if (!formData.interest) newErrors.interest = "Please select an interest";

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
        setFormData({ fullName: "", email: "", phone: "", interest: "", message: "" });
      }, 1500);
    }
  };

  return (
    <main className="volunteer-page bg-light">
      
      <section className="volunteer-hero">
        <div className="container">
          <div className="fade-in">
            <span className="section-label">Join Our Team</span>
            <h1>Become a Volunteer</h1>
            <p>
              Make a real difference in lives across Mumbai. Fill out the form below and our coordinator will get back to you within 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              
              <div className="bg-white p-4 p-md-5 rounded-4 shadow-lg border">
                {isSuccess ? (
                  <div className="text-center py-5">
                    <i className="bi bi-patch-check-fill text-success" style={{fontSize: "5rem"}}></i>
                    <h2 className="fw-bold mt-4">Application Received!</h2>
                    <p className="text-muted mb-4 fs-5">Thank you for stepping forward. Our coordinator will contact you within 48 hours.</p>
                    <Link to="/events" className="btn btn-accent px-4 py-2 rounded-pill fw-bold text-white text-decoration-none shadow-sm">
                      Events <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-5">
                      <h3 className="fw-bold">Application Form</h3>
                      <p className="text-muted">Fill out the details below to register.</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                      <div className="row g-4">
                        <div className="col-12">
                          <label className="form-label text-muted small fw-bold">Full Name</label>
                          <input
                            type="text"
                            name="fullName"
                            className={`form-control p-3 bg-light ${errors.fullName ? 'is-invalid' : ''}`}
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Satyam Sharma"
                          />
                          {errors.fullName && <div className="text-danger small mt-1">{errors.fullName}</div>}
                        </div>

                        <div className="col-md-6">
                          <label className="form-label text-muted small fw-bold">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            className={`form-control p-3 bg-light ${errors.email ? 'is-invalid' : ''}`}
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="satyam@example.com"
                          />
                          {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
                        </div>

                        <div className="col-md-6">
                          <label className="form-label text-muted small fw-bold">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            className={`form-control p-3 bg-light ${errors.phone ? 'is-invalid' : ''}`}
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="9876543210"
                            maxLength="10"
                          />
                          {errors.phone && <div className="text-danger small mt-1">{errors.phone}</div>}
                        </div>

                        <div className="col-12">
                          <label className="form-label text-muted small fw-bold">Area of Interest</label>
                          <select
                            name="interest"
                            className={`form-select p-3 bg-light ${errors.interest ? 'is-invalid' : ''}`}
                            value={formData.interest}
                            onChange={handleChange}
                          >
                            <option value="">Select an area of interest...</option>
                            <option value="education">Child Education & Mentoring</option>
                            <option value="food">Food Distribution Drives</option>
                            <option value="health">Healthcare & Medical Camps</option>
                            <option value="events">Event Management & Logistics</option>
                            <option value="admin">Administrative & Tech Support</option>
                          </select>
                          {errors.interest && <div className="text-danger small mt-1">{errors.interest}</div>}
                        </div>

                        <div className="col-12">
                          <label className="form-label text-muted small fw-bold">Additional Message (Optional)</label>
                          <textarea
                            name="message"
                            className="form-control p-3 bg-light"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us a bit about why you want to volunteer..."
                          ></textarea>
                        </div>

                        <div className="col-12 mt-4">
                          <button 
                            type="submit" 
                            className="btn btn-accent w-100 py-3 fw-bold fs-5 shadow-sm rounded-pill"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting Application..." : "Submit Application"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Volunteer;