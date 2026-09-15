import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    city: "",
    skills: "",
    availability: "",
    reason: "",
    terms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!formData.terms) {
      alert("Please accept the Terms and Conditions");
      return;
    }

   
    localStorage.setItem(
      "carebridgeUser",
      JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      }),
    );

    alert("Registration successful. You can now login.");

   
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      city: "",
      skills: "",
      availability: "",
      reason: "",
      terms: false,
    });
  };

  return (
    <main className="register-page">
      <section className="register-hero">
        <div className="container">
          <div className="text-center">
            <p className="register-label">JOIN CAREBRIDGE</p>
            <h1>Become a Volunteer</h1>
            <p>
              Join our community and help us create a better future for
              children, families, and communities.
            </p>
          </div>
        </div>
      </section>

      <section className="register-section">
        <div className="container">
          <div className="register-card">
            <div className="row g-0">
              <div className="col-lg-5 register-info">
                <h2>Make a Difference</h2>
                <p>
                  Your time, skills, and kindness can bring meaningful change to
                  someone's life.
                </p>

                <div className="register-benefit">
                  <h5>Support Communities</h5>
                  <p>Help people who need care, education, and support.</p>
                </div>

                <div className="register-benefit">
                  <h5>Develop Your Skills</h5>
                  <p>Gain practical experience through social activities.</p>
                </div>

                <div className="register-benefit">
                  <h5>Meet New People</h5>
                  <p>Work with a team that believes in positive change.</p>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="register-form-wrapper">
                  <h2>Create Volunteer Account</h2>
                  <p className="form-description">
                    Fill in your details to join CareBridge.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="fullName" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          className="form-control"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-control"
                          placeholder="Enter mobile number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          className="form-control"
                          placeholder="Enter your city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control"
                          placeholder="Create a password"
                          value={formData.password}
                          onChange={handleChange}
                          minLength="6"
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="confirmPassword" className="form-label">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          className="form-control"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          minLength="6"
                          required
                        />
                      </div>

                      <div className="col-12 mb-3">
                        <label htmlFor="skills" className="form-label">
                          Skills / Interests
                        </label>
                        <select
                          id="skills"
                          name="skills"
                          className="form-select"
                          value={formData.skills}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select your interest</option>
                          <option value="Teaching">Teaching</option>
                          <option value="Food Distribution">
                            Food Distribution
                          </option>
                          <option value="Healthcare Support">
                            Healthcare Support
                          </option>
                          <option value="Event Management">
                            Event Management
                          </option>
                          <option value="Fundraising">Fundraising</option>
                          <option value="Social Media">Social Media</option>
                        </select>
                      </div>

                      <div className="col-12 mb-3">
                        <label htmlFor="availability" className="form-label">
                          Availability
                        </label>
                        <select
                          id="availability"
                          name="availability"
                          className="form-select"
                          value={formData.availability}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select availability</option>
                          <option value="Weekdays">Weekdays</option>
                          <option value="Weekends">Weekends</option>
                          <option value="Both">Both</option>
                        </select>
                      </div>

                      <div className="col-12 mb-3">
                        <label htmlFor="reason" className="form-label">
                          Why do you want to volunteer?
                        </label>
                        <textarea
                          id="reason"
                          name="reason"
                          className="form-control"
                          rows="4"
                          placeholder="Tell us why you want to join CareBridge"
                          value={formData.reason}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>

                      <div className="col-12 mb-4">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            className="form-check-input"
                            checked={formData.terms}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="terms" className="form-check-label">
                            I agree to the Terms and Conditions.
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-success register-button"
                        >
                          Create Volunteer Account
                        </button>
                      </div>
                    </div>
                  </form>

                  <p className="login-text">
                    Already have an account? <Link to="/login">Login here</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;
