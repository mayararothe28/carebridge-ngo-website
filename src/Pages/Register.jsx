import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Register() {
  const sectionRef = useScrollAnimation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[-()\s]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit number";
    }
    if (!formData.interest) newErrors.interest = "Please select an area of interest";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
        });
      }, 1500);
    }
  };

  return (
    <main className="register-page" ref={sectionRef}>
      <div className="container">
        <div className="register-wrapper fade-in">
          <div className="row g-0">
            {/* Left Info Panel */}
            <div className="col-lg-5">
              <div className="register-info">
                <div className="register-info-content">
                  <Link to="/" className="register-logo">
                    <i className="bi bi-heart-pulse-fill"></i>
                    CareBridge
                  </Link>
                  <h2>Join Our Community of Changemakers</h2>
                  <p>
                    Whether you can spare a few hours a week or want to be
                    involved full-time, your skills and passion can make a real
                    difference in someone's life.
                  </p>
                  
                  <div className="register-features">
                    <div className="r-feature">
                      <i className="bi bi-check2-circle"></i>
                      <span>Make a tangible impact</span>
                    </div>
                    <div className="r-feature">
                      <i className="bi bi-check2-circle"></i>
                      <span>Gain valuable experience</span>
                    </div>
                    <div className="r-feature">
                      <i className="bi bi-check2-circle"></i>
                      <span>Join a supportive community</span>
                    </div>
                    <div className="r-feature">
                      <i className="bi bi-check2-circle"></i>
                      <span>Receive volunteer certification</span>
                    </div>
                  </div>

                  <div className="register-contact-info">
                    <p><i className="bi bi-envelope"></i> volunteer@carebridge.org</p>
                    <p><i className="bi bi-telephone"></i> +91 98765 43210</p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="circle-shape shape-1"></div>
                <div className="circle-shape shape-2"></div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="col-lg-7">
              <div className="register-form-container">
                {isSuccess ? (
                  <div className="success-message text-center fade-in">
                    <div className="success-icon">
                      <i className="bi bi-check-lg"></i>
                    </div>
                    <h3>Thank You for Registering!</h3>
                    <p>
                      We've received your application. Our volunteer coordinator
                      will contact you within 2-3 business days to discuss next steps.
                    </p>
                    <button 
                      className="btn-return"
                      onClick={() => setIsSuccess(false)}
                    >
                      Register Another Person
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="register-header">
                      <h3>Volunteer Registration</h3>
                      <p>Fill out the form below to get started.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="register-form" noValidate>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">First Name *</label>
                          <input
                            type="text"
                            name="firstName"
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Satyam"
                          />
                          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                        </div>

                        <div className="col-md-6 mb-3">
                          <label className="form-label">Last Name *</label>
                          <input
                            type="text"
                            name="lastName"
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Sharma"
                          />
                          {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="satyam@example.com"
                          />
                          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>

                        <div className="col-md-6 mb-3">
                          <label className="form-label">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="9876543210"
                          />
                          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Area of Interest *</label>
                        <select
                          name="interest"
                          className={`form-select ${errors.interest ? 'is-invalid' : ''}`}
                          value={formData.interest}
                          onChange={handleChange}
                        >
                          <option value="">Select an area...</option>
                          <option value="education">Child Education</option>
                          <option value="food">Food Distribution</option>
                          <option value="health">Healthcare Camps</option>
                          <option value="events">Event Management</option>
                          <option value="admin">Administrative Support</option>
                        </select>
                        {errors.interest && <div className="invalid-feedback">{errors.interest}</div>}
                      </div>

                      <div className="mb-4">
                        <label className="form-label">Additional Message (Optional)</label>
                        <textarea
                          name="message"
                          className="form-control"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us a bit about why you want to volunteer..."
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        className="btn-submit w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Submitting...</>
                        ) : (
                          "Submit Registration"
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;